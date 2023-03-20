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

const routes = [ 
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
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
    authentication: true,
  },
  {
    type: "collapse",
    name: "Category",
    key: "category",
    route: "/all-category",
    icon: <Shop size="12px" />,
    component: <Category />,
    noCollapse: true,
    authentication: true,
  },
  {
    type: "collapse",
    name: "Sub Category",
    key: "sub-category",
    route: "/all-sub-category",
    icon: <Shop size="12px" />,
    component: <SubCategory />,
    noCollapse: true,
    authentication: true,
  },
];

export default routes;
