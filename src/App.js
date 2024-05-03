import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import NetworkConnectionBanner from "./components/NetworkConnectionBanner";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { OnlineStatusProvider } from "./hooks/useOnlineStatus";
import { Provider } from "react-redux";
import store from "./store/appStore";

const RestaurantPage = lazy(() => import("./components/RestaurantPage"));
const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <OnlineStatusProvider>
        <div className="subpixel-antialiased">
          <NetworkConnectionBanner />
          <Header />
          <div className="mx-7 mt-28 mb-6">
            <Outlet />
          </div>
        </div>
      </OnlineStatusProvider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<></>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:id",
        element: (
          <Suspense fallback={<></>}>
            <RestaurantPage />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<></>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<RouterProvider router={router} />);
