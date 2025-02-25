import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from './routes/PublicLayout';
import Clock from './routes/Clock';
import TableUsers, {
  loader as usersLoader,
  action as usersAction,
} from './routes/TableUsers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <div>Oops! Was a error on it!</div>,
    children: [
      {
        errorElement: <div>Oops! A error happends on a child.</div>,
        children: [
          {
            path: 'clock',
            element: <Clock />,
          },
          {
            path: 'people',
            element: <TableUsers />,
            loader: usersLoader,
            action: usersAction,
          },
        ],
      },
    ],
  },
]);

export default router;