import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard";
import User from "../views/User";
import Messages from "../views/Messages";
import Analytics from "../views/Analytics";
import FileManager from "../views/FileManager";
import Order from "../views/Order";
import Favorites from "../views/Favorites";
import Setting from "../views/Setting";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: Analytics,
  },
  {
    path: "/fileManager",
    name: "FileManager",
    component: FileManager,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
