import Dashboard from "views/Dashboard.js";
import Projects from "views/Notifications.js";
import Icons from "views/Icns.js";
import Typography from "views/Typography.js";
import Reward from "views/reward.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import Login from "views/Login.js";
import Register from "views/Register.js";



var routes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Login Mgmt",
    icon: "nc-icon nc-diamond",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Users Around Us",
    icon: "nc-icon nc-pin-3",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "nc-icon nc-bell-55",
    component: <Projects />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/reward",
    name: "Reward List",
    icon: "nc-icon nc-tile-56",
    component: <Reward />,
    layout: "/admin",
  },

  {
    path: "/Register",
    name: "Register",
    icon: "nc-icon nc-bank",
    component: <Register />,
    layout: "/admin",
  },
];
export default routes;
