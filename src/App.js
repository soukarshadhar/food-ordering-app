import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import NetworkConnectionBanner from "./components/NetworkConnectionBanner";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { OnlineStatusProvider } from "./hooks/useOnlineStatus";

const AppLayout = () => {
  return (
    <OnlineStatusProvider>
      <div className="app">
        <NetworkConnectionBanner />
        <Header />
        <Outlet />
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
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:id",
        element: <Restaurant />
      }
    ]
  }
]);

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<RouterProvider router={router} />);