import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Product from "./components/Section/Product";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Product />
      },
      { path: "/move/:id", loader:({params})=>fetch() },
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
