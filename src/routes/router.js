import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blogs from "../components/Blogs/Blogs";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/topics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics></Topics>
      },
      {
        path: '/statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path: '/topics/:quizId',
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
        },
        element: <Quiz></Quiz>
      }
    ]
  }
])

export default router;