export const navigationConfig = [
  {
    title: "Dashboard",
    defaultOpen: true,
    items: [
      { name: "Home", path: "/" },
      { name: "Analytics", path: "/analytics" },
      { name: "Reports", path: "/reports" },
    ],
  },
  {
    title: "Trading",
    defaultOpen: false,
    items: [
      { name: "Portfolio", path: "/portfolio" },
      { name: "Watchlist", path: "/watchlist" },
      { name: "Orders", path: "/orders" },
    ],
  },
  {
    title: "Account",
    defaultOpen: false,
    items: [
      { name: "Profile", path: "/profile" },
      { name: "Settings", path: "/settings" },
      { name: "Help", path: "/help" },
    ],
  },
];
