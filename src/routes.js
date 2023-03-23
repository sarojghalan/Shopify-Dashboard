// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Settings from "examples/Icons/Settings";

import LanguageIcon from "@mui/icons-material/Language";
import ArchiveIcon from "@mui/icons-material/Archive";
import PollIcon from "@mui/icons-material/Poll";
import { Brands } from "Pages/MySkill/Brands";
import { Category } from "Pages/Category/Category/Category";
import { SubCategory } from "Pages/Category/SubCategory/SubCategory";
import { AddProducts } from "Pages/Products/AddProducts/AddProducts";
import { ManageProducts } from "Pages/Products/ManageProducts/ManageProducts";
import { Slider } from "Pages/Slider/Slider";
import { Coupons } from "Pages/Coupons/Coupons";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    children: false,
    component: <Dashboard />,
    noCollapse: true,
    authentication: true,
  },
  {
    type: "collapse",
    name: "Brands",
    key: "brands",
    route: "/brands",
    icon: <Shop size="12px" />,
    component: <Brands />,
    noCollapse: true,
    children: false,
    authentication: true,
  },
  {
    type: "collapse",
    name: "Category",
    key: "category",
    icon: <Shop size="12px" />,
    noCollapse: true,
    children: true,
    authentication: true,
    collapse: [
      {
        name: "All Category",
        key: "all_category",
        route: "/all_category",
        component: <Category />,
      },
      {
        name: "Sub Category",
        key: "sub_category",
        route: "/sub_category",
        component: <SubCategory />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Products",
    key: "products",
    icon: <Shop size="12px" />,
    noCollapse: true,
    children: true,
    authentication: true,
    collapse: [
      {
        name: "Add Products",
        key: "add_products",
        route: "/add_products",
        component: <AddProducts />,
      },
      {
        name: "Manage Products",
        key: "manage_products",
        route: "/manage_products",
        component: <ManageProducts />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Slider",
    key: "slider",
    route: "/slider",
    icon: <Shop size="12px" />,
    component: <Slider />,
    noCollapse: true,
    authentication: true,
  },
  {
    type: "collapse",
    name: "Coupons",
    key: "coupons",
    route: "/coupons",
    icon: <Shop size="12px" />,
    component: <Coupons />,
    noCollapse: true,
    authentication: true,
  },
];

export default routes;
