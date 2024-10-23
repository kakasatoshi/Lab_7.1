import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./components/Main";
// import SomeComponent from "./path/to/SomeComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
        // loader: authLoader,
      },
      {},
      // Thêm các route con tại đây
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
