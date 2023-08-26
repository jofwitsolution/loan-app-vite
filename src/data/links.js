import images from "../constants/images";

export const navbarLinks = [
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/features",
    label: "Features",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export const userLinks = [
  {
    label: "Overview",
    path: "/user/dashboard",
    icon: images.menu,
  },
  {
    label: "Transaction",
    path: "/user/dashboard/transactions",
    icon: images.maximize,
  },
  {
    label: "Loan Request",
    path: "/user/dashboard/loan-requests",
    icon: images.loan_time,
  },
  {
    label: "Settings",
    path: "/user/dashboard/settings",
    icon: images.settings,
  },
];

export const adminLinks = [
  {
    label: "Overview",
    path: "/admin/dashboard",
    icon: images.menu,
  },
  {
    label: "Users",
    path: "/admin/dashboard/users",
    icon: images.menu,
  },
  {
    label: "Transaction",
    path: "/admin/dashboard/transactions",
    icon: images.maximize,
  },
  {
    label: "Loan",
    path: "/admin/dashboard/loan-requests",
    icon: images.loan_time,
  },
  {
    label: "Settings",
    path: "/admin/dashboard/settings",
    icon: images.settings,
  },
];
