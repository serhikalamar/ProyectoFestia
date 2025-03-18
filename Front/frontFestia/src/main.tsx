import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";

import "./index.css";
import Calendar from "./pages/calendar";
import Main from "./pages/home";
import EventoDetalle from "./components/Eventos/EventoDetalle";
import datosFake from "./components/Eventos/datosFake.json";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header></Header>
        <main>
          <Outlet />
        </main>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
        errorElement: <div>404 pagina no existe</div>,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/evento/:id",
        element: <EventoDetalle datos={datosFake}/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
