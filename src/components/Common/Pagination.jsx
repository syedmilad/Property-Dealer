// src/components/TagBadge.js
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'; // Using solid icons

const Pagination = ({ currentPage, totalPages, onPageChange, itemsPerPage, totalItems, onItemsPerPageChange }) => {

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const handleItemsChange = (event) => {
    onItemsPerPageChange(Number(event.target.value));
  };

  const getPageNumbers = () => {
    const delta = 1; // How many pages around the current page
    const left = currentPage - delta;
    const right = currentPage + delta + 1;
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i < right)) {
        range.push(i);
      }
    }

    let l;
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  };

  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  if (totalPages <= 1 && totalItems <= itemsPerPage) {
      // Optionally hide pagination if only one page and fits all items
      // return null;
      // Or show minimal info
      return (
          <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
               <span>Displaying {totalItems} {totalItems === 1 ? 'item' : 'items'} in total</span>
               {/* Optionally keep items per page selector even if only one page */}
               <div>
                   <select
                       id="itemsPerPage"
                       value={itemsPerPage}
                       onChange={handleItemsChange}
                       className="border border-[#B5DEF2] rounded-md px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                   >
                       {[10, 25, 50, 100].map(size => (
                           <option key={size} value={size}>{size}</option>
                       ))}
                   </select>
                   <label htmlFor="itemsPerPage" className="ml-2 text-xs">items per page</label>
               </div>
          </div>
      );
  }


  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 border-t border-[#B5DEF2] sm:px-6 text-sm">
       {/* Left Side: Items per page and count */}
      <div className="flex items-center space-x-4">
          <select
              id="itemsPerPageSelect"
              value={itemsPerPage}
              onChange={handleItemsChange}
              className="border border-gray-300 rounded-md px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
              {[10, 25, 50, 100].map(size => (
                  <option key={size} value={size}>{size}</option>
              ))}
          </select>
         <p className="text-gray-600">
            Displaying <span className="font-medium">{startItem}</span>-<span className="font-medium">{endItem}</span> of <span className="font-medium">{totalItems}</span> in total
         </p>
      </div>

       {/* Right Side: Pagination Controls */}
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center rounded-l-md px-2 py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>

        {getPageNumbers().map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={index}
              onClick={() => handlePageClick(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`relative inline-flex items-center px-3 py-1.5 font-medium focus:z-20 focus:outline-offset-0 ${
                page === currentPage
                  ? 'z-10 bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="relative inline-flex items-center px-3 py-1.5 text-gray-700 ring-1 ring-inset ring-gray-300">
              ...
            </span>
          )
        )}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`relative inline-flex items-center rounded-r-md px-2 py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;