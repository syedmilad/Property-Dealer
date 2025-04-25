// src/config/routesConfig.js

import { lazy } from "react";

const routes = [
  // Frame menu
  {path: "/", component: lazy(() => import("../pages/Frame/Units"))},
  { path: "/frame/properties", component: lazy(() => import("../pages/Frame/Properties")) },
  { path: "/frame/units", component: lazy(() => import("../pages/Frame/Units")) },
  { path: "/frame/parkings", component: lazy(() => import("../pages/Frame/Parkings")) },

//   // Home menu
//   { path: "/home/dashboard", component: lazy(() => import("../pages/Home/Dashboard")) },
//   { path: "/home/overview", component: lazy(() => import("../pages/Home/Overview")) },
//   { path: "/home/stats", component: lazy(() => import("../pages/Home/Stats")) },

//   // Contact menu
//   { path: "/contact/leads", component: lazy(() => import("../pages/Contact/Leads")) },
//   { path: "/contact/clients", component: lazy(() => import("../pages/Contact/Clients")) },
//   { path: "/contact/messages", component: lazy(() => import("../pages/Contact/Messages")) },

//   // Search menu
//   { path: "/search/quick-find", component: lazy(() => import("../pages/Search/QuickFind")) },
//   { path: "/search/advanced", component: lazy(() => import("../pages/Search/Advanced")) },
//   { path: "/search/history", component: lazy(() => import("../pages/Search/History")) },

//   // Report menu
//   { path: "/report/monthly", component: lazy(() => import("../pages/Report/Monthly")) },
//   { path: "/report/annual", component: lazy(() => import("../pages/Report/Annual")) },
//   { path: "/report/custom", component: lazy(() => import("../pages/Report/Custom")) },

//   // Facitaly menu
//   { path: "/facitaly/buildings", component: lazy(() => import("../pages/Facitaly/Buildings")) },
//   { path: "/facitaly/services", component: lazy(() => import("../pages/Facitaly/Services")) },
//   { path: "/facitaly/schedules", component: lazy(() => import("../pages/Facitaly/Schedules")) },

    // Outline menu
    { path: "/leasing/allLease", component: lazy(() => import("../pages/Leasing/Leasing")) },
    { path: "/leasing/active", component: lazy(() => import("../pages/Leasing/Active")) },
    { path: "/leasing/completed", component: lazy(() => import("../pages/Leasing/Completed")) },
    { path: "/leasing/draft", component: lazy(() => import("../pages/Leasing/Draft")) },

//   // OutlineGeneral menu
//   { path: "/outline-general/overview", component: lazy(() => import("../pages/OutlineGeneral/Overview")) },
//   { path: "/outline-general/layout", component: lazy(() => import("../pages/OutlineGeneral/Layout")) },
//   { path: "/outline-general/details", component: lazy(() => import("../pages/OutlineGeneral/Details")) },

//   // Phosphor menu
//   { path: "/phosphor/intensity", component: lazy(() => import("../pages/Phosphor/Intensity")) },
//   { path: "/phosphor/wavelength", component: lazy(() => import("../pages/Phosphor/Wavelength")) },
//   { path: "/phosphor/usage", component: lazy(() => import("../pages/Phosphor/Usage")) },

//   // Shop menu
//   { path: "/shop/products", component: lazy(() => import("../pages/Shop/Products")) },
//   { path: "/shop/orders", component: lazy(() => import("../pages/Shop/Orders")) },
//   { path: "/shop/inventory", component: lazy(() => import("../pages/Shop/Inventory")) },

//   // Note menu
//   { path: "/note/personal", component: lazy(() => import("../pages/Note/Personal")) },
//   { path: "/note/team", component: lazy(() => import("../pages/Note/Team")) },
//   { path: "/note/archived", component: lazy(() => import("../pages/Note/Archived")) },

//   // Graph menu
//   { path: "/graph/line-chart", component: lazy(() => import("../pages/Graph/LineChart")) },
//   { path: "/graph/bar-chart", component: lazy(() => import("../pages/Graph/BarChart")) },
//   { path: "/graph/pie-chart", component: lazy(() => import("../pages/Graph/PieChart")) },
];

export default routes;
