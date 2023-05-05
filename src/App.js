import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Product from "./components/Section/Product";
import Details from "./components/Section/Details";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: ":id",
        element: <Details />,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
    ],
  },
]);

function App() {
  return (
    <Container className="">
      <RouterProvider router={routers}></RouterProvider>
    </Container>
  );
}

export default App;
