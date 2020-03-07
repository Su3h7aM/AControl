const routes = [
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Dashboard.vue") }]
  },
  {
    path: "/serviceorders",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ServiceOrders.vue") }]
  },
  {
    path: "/sales",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Sales.vue") }]
  },
  {
    path: "/financial",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Financial.vue") }]
  },
  {
    path: "/registrations",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Registrations.vue") }]
  },
  {
    path: "/reports",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Reports.vue") }]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    redirect: "/dashboard"
  });
}

export default routes;
