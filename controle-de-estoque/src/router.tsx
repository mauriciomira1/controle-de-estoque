import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard/dashboard";
import ItemDetails from "./pages/ItemDetails/itemDetails";
import NewItem from "./pages/NewItem/NewItem";
import UpdateItem from "./pages/UpdateItem/UpdateItem";
import StockItems from "./pages/StockItems/StockItems";
import loadItem from "./loader/loadItem";
import ItemBoundary from "./errors/ItemBoundary";

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
        path: "stock-items",
        element: <StockItems />,
      },
      {
        path: "item-details/:productId",
        element: <ItemDetails />,
        loader: loadItem,
        errorElement: <ItemBoundary />,
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
