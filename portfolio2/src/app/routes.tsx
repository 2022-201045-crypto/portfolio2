import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";

const basename = import.meta.env.PROD ? '/portfolio2/' : '/';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
], {
  basename,
});
