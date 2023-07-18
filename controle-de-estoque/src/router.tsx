import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import ItemsList from "./pages/ItensList/ItensList";
import NewItem from "./pages/NewItem/NewItem";
import UpdateItem from "./pages/UpdateItem/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "item-details",
        element: <ItemDetails />,
      },
      {
        path: "items-list",
        element: <ItemsList />,
      },
      {
        path: "new-item",
        element: <NewItem />,
      },
      {
        path: "update-item",
        element: <UpdateItem />,
      },
    ],
  },
]);

export default router;
