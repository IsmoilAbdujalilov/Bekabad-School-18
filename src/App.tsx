import Routes from "./Routes";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("./pages/Home"));
  const News = lazy(() => import("./pages/News"));
  const Events = lazy(() => import("./pages/Events"));
  const Courses = lazy(() => import("./pages/Courses"));
  const Library = lazy(() => import("./pages/Library"));
  const OneNews = lazy(() => import("./pages/OneNews"));
  const NotFound = lazy(() => import("./pages/NotFound"));
  const Teachers = lazy(() => import("./pages/Teachers"));
  const SchoolAbout = lazy(() => import("./pages/SchoolAbout"));
  const AdditionalLessons = lazy(() => import("./pages/AdditionalLessons"));

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/pages/courses",
          element: <Courses />,
        },
        {
          path: "/pages/additional-lessons",
          element: <AdditionalLessons />,
        },
        {
          path: "/pages/Events",
          element: <Events />,
        },
        {
          path: "/pages/Library",
          element: <Library />,
        },
        {
          path: "/pages/News",
          element: <News />,
        },
        {
          path: "/pages/News/:id",
          element: <OneNews />,
        },
        {
          path: "/pages/teachers",
          element: <Teachers />,
        },
        {
          element: <SchoolAbout />,
          path: "/pages/school/about",
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
