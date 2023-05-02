import "./App.css";
import Friends from "./Components/Friends";
import Header from "./Components/Header";
import Home from "./Components/Home";
import RQFriends from "./Components/RQFriends";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header />
        <Outlet />
      </>
    </QueryClientProvider>
  );
}

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      { path: "rqfriends", element: <RQFriends /> },
    ],
  },
]);

export default AppRoutes;
