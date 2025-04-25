import {
  Home,
  Contact,
  Facitaly,
  Outline,
  OutlineGeneral,
  SearchMenu,
  Report,
  Frame,
  Phosphor,
  Shop,
  Note,
  Graph,
} from "../assets/index.js";

export const sidebarWithMenuData = [
  {
    name: "frame",
    label: "Frame",
    icon: Frame,
    submenuItem: {
      name: "portfolio",
      label: "Portfolio",
      items: [
        { name: "properties", label: "Properties" },
        { name: "units", label: "Units" },
        { name: "parkings", label: "Parkings" },
      ],
    },
  },
  {
    name: "leasing",
    label: "Leasing",
    icon: Outline,
    submenuItem: {
      name: "leasing",
      label: "Leasing",
      items: [
        { name: "allLease", label: "All Lease" },
        { name: "draft", label: "Draft" },
        { name: "active", label: "Active" },
        { name: "completed", label: "Completed" },
      ],
    },
  },
  {
    name: "home",
    label: "Home",
    icon: Home,
    submenuItem: {
      name: "home_menu",
      label: "Home Menu",
      items: [
        { name: "home-1", label: "Dashboard" },
        { name: "home-2", label: "Overview" },
        { name: "home-3", label: "Stats" },
      ],
    },
  },
  {
    name: "contact",
    label: "Contact",
    icon: Contact,
    submenuItem: {
      name: "contact_menu",
      label: "Contact Menu",
      items: [
        { name: "contact-1", label: "Leads" },
        { name: "contact-2", label: "Clients" },
        { name: "contact-3", label: "Messages" },
      ],
    },
  },
  {
    name: "search",
    label: "Search",
    icon: SearchMenu,
    submenuItem: {
      name: "search_menu",
      label: "Search Menu",
      items: [
        { name: "search-1", label: "Quick Find" },
        { name: "search-2", label: "Advanced" },
        { name: "search-3", label: "History" },
      ],
    },
  },
  {
    name: "report",
    label: "Report",
    icon: Report,
    submenuItem: {
      name: "report_menu",
      label: "Report Menu",
      items: [
        { name: "report-1", label: "Monthly" },
        { name: "report-2", label: "Annual" },
        { name: "report-3", label: "Custom" },
      ],
    },
  },
  {
    name: "facitaly",
    label: "Facitaly",
    icon: Facitaly,
    submenuItem: {
      name: "facitaly_menu",
      label: "Facitaly Menu",
      items: [
        { name: "fac-1", label: "Buildings" },
        { name: "fac-2", label: "Services" },
        { name: "fac-3", label: "Schedules" },
      ],
    },
  },
  {
    name: "outlineGeneral",
    label: "OutlineGeneral",
    icon: OutlineGeneral,
    submenuItem: {
      name: "outline_general_menu",
      label: "General Menu",
      items: [
        { name: "general-1", label: "Overview" },
        { name: "general-2", label: "Layout" },
        { name: "general-3", label: "Details" },
      ],
    },
  },
  {
    name: "phosphor",
    label: "Phosphor",
    icon: Phosphor,
    submenuItem: {
      name: "phosphor_menu",
      label: "Phosphor Menu",
      items: [
        { name: "phosphor-1", label: "Intensity" },
        { name: "phosphor-2", label: "Wavelength" },
        { name: "phosphor-3", label: "Usage" },
      ],
    },
  },
  {
    name: "Shop",
    label: "Shop",
    icon: Shop,
    submenuItem: {
      name: "shop_menu",
      label: "Shop Menu",
      items: [
        { name: "shop-1", label: "Products" },
        { name: "shop-2", label: "Orders" },
        { name: "shop-3", label: "Inventory" },
      ],
    },
  },
  {
    name: "note",
    label: "Note",
    icon: Note,
    submenuItem: {
      name: "note_menu",
      label: "Note Menu",
      items: [
        { name: "note-1", label: "Personal" },
        { name: "note-2", label: "Team" },
        { name: "note-3", label: "Archived" },
      ],
    },
  },
  {
    name: "graph",
    label: "Graph",
    icon: Graph,
    submenuItem: {
      name: "graph_menu",
      label: "Graph Menu",
      items: [
        { name: "graph-1", label: "Line Chart" },
        { name: "graph-2", label: "Bar Chart" },
        { name: "graph-3", label: "Pie Chart" },
      ],
    },
  },
];
