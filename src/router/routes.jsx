import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Products from '../pages/shop/Shop';
import ProductPage from '../pages/product/Product';
import Cart from '../pages/cart/Cart';

const CustomRouterProvider = () => {
  const cartDataState = useState([]);
  const data = useState([]);

  const routes = [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      loader: async () => {
        return { cartDataState, data };
      },
    },
    {
      path: '/shop',
      element: <Products />,
      loader: async () => {
        return { cartDataState, data };
      },
    },
    {
      path: 'shop/product/:productId',
      element: <ProductPage />,
      loader: async () => {
        return { cartDataState, data };
      },
    },
    {
      path: '/cart',
      element: <Cart />,
      loader: async () => {
        return { cartDataState, data };
      },
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default CustomRouterProvider;
