import { createBrowserRouter } from "react-router";

import Home from "../Components/Home/Home";
import TimeLine from "../Components/TimeLine/TimeLine";
import Stats from "../Components/Stats/Stats";
import Error from "../Components/UI/Error";
import MainLayout from "../Components/MainLayout";
import FriendDetails from "../Components/UI/FriendDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: '/:id',
        Component: FriendDetails,
        // loader: () => fetch('/data.json')
      },
      {
        path: '/timeline',
        Component: TimeLine
      },
      {
        path: '/stats',
        Component: Stats
      },
    ],
    errorElement: <Error></Error>
  }
])