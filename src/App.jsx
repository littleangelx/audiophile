import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import DesktopLayout from "./pages/DesktopLayout";
import Home from "./pages/Home";
import CategoryLayout from "./pages/CategoryLayout";
import Checkout from "./pages/Checkout";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailLayout from "./pages/ProductDetailLayout";
import TabletLayout from "./pages/TabletLayout";
import MobileLayout from "./pages/MobileLayout";

const desktopRouter = createBrowserRouter([
  {
    element: <DesktopLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "category",
        element: <CategoryLayout />,
        children: [
          { path: "headphones", element: <CategoryPage /> },
          { path: "speakers", element: <CategoryPage /> },
          { path: "earphones", element: <CategoryPage /> },
        ],
      },
      { path: "product-detail/:slug", element: <ProductDetailLayout /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

const tabletRouter = createBrowserRouter([
  {
    element: <TabletLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "category",
        element: <CategoryLayout />,
        children: [
          { path: "headphones", element: <CategoryPage /> },
          { path: "speakers", element: <CategoryPage /> },
          { path: "earphones", element: <CategoryPage /> },
        ],
      },
      { path: "product-detail/:slug", element: <ProductDetailLayout /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

const mobileRouter = createBrowserRouter([
  {
    element: <MobileLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "category",
        element: <CategoryLayout />,
        children: [
          { path: "headphones", element: <CategoryPage /> },
          { path: "speakers", element: <CategoryPage /> },
          { path: "earphones", element: <CategoryPage /> },
        ],
      },
      { path: "product-detail/:slug", element: <ProductDetailLayout /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <RouterProvider
      router={
        isDesktop ? desktopRouter : isTablet ? tabletRouter : mobileRouter
      }
    />
  );
};

export default App;
