import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import TableUsers from "./routes/TableUsers";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TableUsers />,
    errorElement: <ErrorPage />,
  },
]);

export default router;