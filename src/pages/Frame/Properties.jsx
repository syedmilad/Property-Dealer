import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowDownTrayIcon, PlusIcon, MagnifyingGlassIcon, FunnelIcon, PencilSquareIcon, EyeIcon,
  ChevronUpIcon, ChevronDownIcon, ChevronUpDownIcon
} from '@heroicons/react/24/outline'; // Using outline for consistency where possible
import Pagination from '../../components/Common/Pagination';
import { propertiesData, propertiesHeaders } from '../../data/propertiesData';
import TagBadge from '../../components/TagBadge';

const PropertiesPage = () => {
  const [allProperties, setAllProperties] = useState([]); // Holds the original full dataset
  const [filteredProperties, setFilteredProperties] = useState([]); // Data after filtering/searching
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const [activeFilterTab, setActiveFilterTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' }); // Default sort
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

  const filterTabs = ['All', 'Residential', 'Commercial', 'Co Living'];

  // Simulate fetching data on mount
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // Simulate API call delay
    setTimeout(() => {
      try {
        setAllProperties(propertiesData); // Use the imported fake data
        setIsLoading(false);
      } catch (err) {
          console.error("Error loading properties:", err);
          setError("Failed to load properties.");
          setIsLoading(false);
      }
    }, 500); // 0.5 second delay
  }, []);

  // Apply filtering and searching whenever dependencies change
  useEffect(() => {
    let result = [...allProperties];

    // Apply Tab Filter
    if (activeFilterTab !== 'All') {
      result = result.filter(prop => prop.type === activeFilterTab);
    }

    // Apply Search Filter (searching in relevant fields)
    if (searchTerm.trim()) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(prop =>
        String(prop.id).toLowerCase().includes(lowerSearchTerm) ||
        prop.property.toLowerCase().includes(lowerSearchTerm) ||
        prop.stage.toLowerCase().includes(lowerSearchTerm) ||
        prop.assignedTo.toLowerCase().includes(lowerSearchTerm) ||
        (prop.tags && prop.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)))
      );
    }

    setFilteredProperties(result);
    setCurrentPage(1); // Reset to first page whenever filters change

  }, [allProperties, activeFilterTab, searchTerm]);


  // Apply sorting
  const sortedProperties = useMemo(() => {
      let sortableItems = [...filteredProperties];
      if (sortConfig.key !== null) {
          sortableItems.sort((a, b) => {
              const aValue = a[sortConfig.key];
              const bValue = b[sortConfig.key];

              // Handle null/undefined or specific strings like 'Column'
              if (aValue == null || aValue === 'Column') return sortConfig.direction === 'asc' ? 1 : -1;
              if (bValue == null || bValue === 'Column') return sortConfig.direction === 'asc' ? -1 : 1;

              // Basic type comparison (expand as needed)
              if (!isNaN(Number(aValue)) && !isNaN(Number(bValue))) { // Number check
                   return sortConfig.direction === 'asc' ? Number(aValue) - Number(bValue) : Number(bValue) - Number(aValue);
              } else { // String check (case-insensitive)
                   const strA = String(aValue).toLowerCase();
                   const strB = String(bValue).toLowerCase();
                   if (strA < strB) return sortConfig.direction === 'asc' ? -1 : 1;
                   if (strA > strB) return sortConfig.direction === 'asc' ? 1 : -1;
                   return 0;
              }
          });
      }
      return sortableItems;
  }, [filteredProperties, sortConfig]);


  // Apply pagination
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedProperties.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProperties, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);

  // --- Event Handlers ---
  const handleTabClick = (tab) => {
    setActiveFilterTab(tab);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setActiveFilterTab('All');
    // Reset other filters if you add them (like the 'Edit Column' filter)
    setCurrentPage(1);
    setSortConfig({ key: 'id', direction: 'asc' }); // Reset sort
  };

  const handleSort = (key) => {
     // Check if the header allows sorting
    const headerConfig = propertiesHeaders.find(h => h.key === key);
    if (headerConfig && headerConfig.sortable === false) {
        return; // Do nothing if column is not sortable
    }

    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc'){
        // Optional: Third click resets sort or removes it for this column
        // setSortConfig({ key: 'id', direction: 'asc' }); // Reset to default
        // return;
        direction = 'asc'; // Cycle back to asc
    }
    setSortConfig({ key, direction });
    // No need to reset page here, sorting applies to current view
  };

  const handleItemsPerPageChange = (number) => {
    setItemsPerPage(number);
    setCurrentPage(1); // Go back to page 1 when changing items per page
  };

  // Placeholder action handlers
  const handleImport = () => alert('Import Properties clicked (placeholder)');
  const handleAddProperty = () => alert('Add Properties clicked (placeholder)');
  const handleEditColumn = () => alert('Edit Column filter clicked (placeholder)');
  const handleViewProperty = (id) => alert(`View Property ${id} clicked (placeholder)`);
  const handleEditProperty = (id) => alert(`Edit Property ${id} clicked (placeholder)`);


  // --- Rendering ---

  const renderSortIcon = (columnKey) => {
      const headerConfig = propertiesHeaders.find(h => h.key === columnKey);
      if (headerConfig && headerConfig.sortable === false) {
          return null; // No icon if not sortable
      }
      if (sortConfig.key !== columnKey) {
          return <ChevronUpDownIcon className="w-4 h-4 text-gray-400 group-hover:text-gray-500" />;
      }
      return sortConfig.direction === 'asc' ?
          <ChevronUpIcon className="w-4 h-4 text-gray-600" /> :
          <ChevronDownIcon className="w-4 h-4 text-gray-600" />;
  };

  const renderCellContent = (item, headerKey) => {
    const value = item[headerKey];
    switch (headerKey) {
      case 'tags':
        return (value && Array.isArray(value)) ? value.map(tag => <TagBadge key={tag} tag={tag} />) : null;
      case 'size':
      case 'managementFees':
         // Format numbers nicely, handle null/strings
        return (value !== null && !isNaN(Number(value))) ? Number(value).toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 2}) : (value ?? 'N/A');
      case 'noOfUnits':
          return value ?? 'N/A'; // Display N/A for null/undefined
      case 'actions':
        return (
          <div className="flex items-center space-x-2">
            <button onClick={() => handleEditProperty(item.uniqueId)} className="text-blue-500 hover:text-blue-700 p-1" aria-label="Edit">
              <PencilSquareIcon className="w-4 h-4" />
            </button>
            <button onClick={() => handleViewProperty(item.uniqueId)} className="text-gray-500 hover:text-gray-700 p-1" aria-label="View">
              <EyeIcon className="w-4 h-4" />
            </button>
          </div>
        );
      default:
        return value ?? ''; // Default rendering, handle null/undefined
    }
  };


  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* 1. Header Section */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <h1 className="text-2xl font-semibold text-gray-800">Properties</h1>
        <div className="flex items-center space-x-3">
          <button onClick={handleImport} className="flex items-center bg-teal-100 text-teal-700 hover:bg-teal-200 px-3 py-1.5 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1">
            <ArrowDownTrayIcon className="w-4 h-4 mr-1.5" />
            Import Properties
          </button>
          <button onClick={handleAddProperty} className="flex items-center bg-blue-600 text-white hover:bg-blue-700 px-3 py-1.5 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
            <PlusIcon className="w-4 h-4 mr-1.5" />
            Add Properties
          </button>
        </div>
      </div>

      {/* 2. Filter/Search Section */}
      <div className="mb-4 bg-white p-4 rounded-lg shadow-sm">
          {/* Filter Tabs */}
          <div className="mb-4 pb-2">
              <nav className="flex flex-wrap -mb-px space-x-1 sm:space-x-4" aria-label="Tabs">
                  {filterTabs.map((tab) => (
                      <button
                          key={tab}
                          onClick={() => handleTabClick(tab)}
                          className={`whitespace-nowrap py-2 px-3 border-b-2 text-sm font-medium focus:outline-none ${
                              activeFilterTab === tab
                                  ? 'border-blue-500 text-blue-600'
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                      >
                          {tab}
                      </button>
                  ))}
              </nav>
          </div>

          {/* Search and Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="relative flex-grow max-w-xs">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                       <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                   </div>
                   <input
                       type="text"
                       placeholder="Search Properties..."
                       value={searchTerm}
                       onChange={handleSearchChange}
                       className="block w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                   />
              </div>
              <div className="flex items-center space-x-2">
                   <button
                       onClick={handleEditColumn}
                       className="flex items-center bg-teal-100 text-teal-700 hover:bg-teal-200 px-3 py-1.5 rounded-md text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1"
                   >
                       <FunnelIcon className="w-3 h-3 mr-1" />
                       {/* Edit Column - Changed icon to Funnel for filtering implication */}
                   </button>
                   <button
                       onClick={handleEditColumn} // Should likely open a modal to choose columns
                       className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 px-3 py-1.5 rounded-md text-xs font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
                   >
                       Edit Column
                   </button>
                   <button
                       onClick={handleClearFilters}
                       className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 px-3 py-1.5 rounded-md text-xs font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
                   >
                       Clear
                   </button>
              </div>
          </div>
      </div>


      {/* 3. Table Section */}
      <div className="bg-white shadow-sm rounded-lg border border-[#B5DEF2] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-sky-50 border-b border-[#B5DEF2]">
              <tr>
                {propertiesHeaders.map((header) => (
                  <th key={header.key} scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                    <button
                      onClick={() => handleSort(header.key)}
                      disabled={header.sortable === false} // Disable button if not sortable
                      className={`flex items-center justify-between w-full group focus:outline-none ${header.sortable === false ? 'cursor-default' : ''}`}
                    >
                      <span>{header.label}</span>
                       {/* Add sort icons */}
                      <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {renderSortIcon(header.key)}
                      </span>
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td colSpan={propertiesHeaders.length} className="text-center py-10 text-gray-500">Loading...</td></tr>
              ) : error ? (
                <tr><td colSpan={propertiesHeaders.length} className="text-center py-10 text-red-500">{error}</td></tr>
              ) : paginatedProperties.length === 0 ? (
                <tr><td colSpan={propertiesHeaders.length} className="text-center py-10 text-gray-500">No properties found matching your criteria.</td></tr>
              ) : (
                  paginatedProperties.map((item,index) => (
                    <tr
                      key={item.uniqueId} // Use a truly unique ID here
                      style={{ backgroundColor: index % 2 !== 0 ? "#F0F9FF" : "white" }} // Adjust color as needed
                      className="bg-white border-b border-[#B5DEF2] hover:bg-sky-50/50"
                    >
                     {propertiesHeaders.map(header => (
                         <td key={header.key} className="px-4 py-3 whitespace-nowrap">
                             {renderCellContent(item, header.key)}
                          </td>
                      ))}
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>

         {/* 4. Pagination Section */}
         {!isLoading && !error && sortedProperties.length > 0 && (
              <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  itemsPerPage={itemsPerPage}
                  totalItems={sortedProperties.length}
                  onItemsPerPageChange={handleItemsPerPageChange}
              />
         )}
      </div>
    </div>
  );
};

export default PropertiesPage;