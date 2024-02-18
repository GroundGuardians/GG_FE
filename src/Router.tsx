import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Quiz from "./pages/Quiz";
import Survey from "./pages/Survey";
import App from "./App";
import UnknownCard from "./pages/UnknownCard";
import Info from "./pages/Info";
import RedirectLogin from "./redirectLogin";
import GetCard from "./pages/GetCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/survey/:surveyId",
        element: <Survey />,
      },
      {
        path: "/quiz/:animalId",
        element: <Quiz />,
      },
      {
        path: "/card/unknown",
        element: <UnknownCard />,
      },
      {
        path: "/getcard/:animalId",
        element: <GetCard />,
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/api/auth/callback",
        element: <RedirectLogin />,
      },
    ],
  },
]);

export default router;
