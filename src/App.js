import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import NetworkConnectionBanner from "./components/NetworkConnectionBanner";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { OnlineStatusProvider } from "./hooks/useOnlineStatus";

const Restaurant = lazy(() => import("./components/Restaurant"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  return (
    <OnlineStatusProvider>
      <div className="subpixel-antialiased">
        <NetworkConnectionBanner />
        <Header />
        <div className="mx-7 mt-5">
          <Outlet />
        </div>
      </div>
    </OnlineStatusProvider>
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
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense>
      },
      {
        path: "/restaurants/:id",
        element: <Suspense fallback={<h1>Loading...</h1>}><Restaurant /></Suspense>
      }
    ]
  }
]);

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<RouterProvider router={router} />);