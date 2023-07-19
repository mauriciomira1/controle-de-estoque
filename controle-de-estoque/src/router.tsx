import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import NewItem from "./pages/NewItem/NewItem";
import UpdateItem from "./pages/UpdateItem/UpdateItem";
import StockItems from "./pages/StockItems/StockItems";

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
        path: "stock-items",
        element: <StockItems />,
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
