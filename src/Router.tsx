import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Quiz from "./pages/Quiz";
import Survey from "./pages/Survey";
import App from "./App";

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
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

export default router;
