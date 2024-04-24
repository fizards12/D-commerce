import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootPage from "./pages/RootPage";
import Home from "./pages/Home";
import AddProduct, { action } from "./components/Products/AddProduct";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "add-product", element: <AddProduct />, action: action },
      {path: "auth",element: <Auth/>, children: [
        {index: true, element: <Login/>},
        {path: "register", element: <Register/>},
      ]}
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
