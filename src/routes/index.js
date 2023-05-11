import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Messenger from "~/pages/Messenger";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/messenger", component: Messenger },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
