import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import ErrorPage from "./pages/Errorpage";
import MainLayout from "./pages/MainLayout";
import StartPage from "./pages/StartPage";
import QuestionOverview from "./pages/QuestionOverview";
import LearnPage from "./pages/LearnPage";
import QuestionUpdater from "./pages/QuestionUpdater";
import LearnStartPage from "./pages/LearnStartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <StartPage />,
      },
      {
        path: "/overview",
        element: <QuestionOverview />,
        /* children: [
        {
          path: "update/:id",
          element: <QuestionUpdater/>
        },
      ] */
      },
      {
        path: "/overview/update/:id",
        element: <QuestionUpdater />,
      },
      {
        path: "/learn/startpage",
        element: <LearnStartPage />
      },

      {
        path: "/learn/index-card",
        element: <LearnPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
