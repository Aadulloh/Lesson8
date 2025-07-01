import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import { SignIn, SignUp, Products, Driver, Logs, Students } from "@pages";
import Statistics from "../page/logs/Statistics";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="logs" element={<Logs />}>
          <Route path="driver" element={<Driver />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="students" element={<Students />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
