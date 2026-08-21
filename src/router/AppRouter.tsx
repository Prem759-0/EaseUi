import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ComponentLayout from "../layouts/ComponentLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ButtonPage from "../pages/components/ButtonPage";
import CardPage from "@/pages/components/CardPage";
import ModalPage from "../pages/components/ModalPage";
import InputPage from "@/pages/components/InputPage";
import NavbarPage from "../pages/components/NavbarPage";
import TooltipPage from "../pages/components/TooltipPage";
import InstallationPage from "@/pages/components/InstallationPage";
import CarouselPage from "@/pages/components/CarouselPage";
import IntroductionPage from "@/pages/components/IntroductionPage";
import ThemingPage from "@/pages/components/ThemingPage";
import CliPage from "@/pages/components/CliPage";
import ChangelogPage from "@/pages/components/ChangelogPage";

type Props = {};

const AppRouter = ({}: Props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "components",
          element: <ComponentLayout />,
          children: [
            {
              path: "introduction",
              element: <IntroductionPage />,
            },
            {
              path: "installation",
              element: <InstallationPage />,
            },
            {
              path: "theming",
              element: <ThemingPage />,
            },
            {
              path: "cli",
              element: <CliPage />,
            },
            {
              path: "changelog",
              element: <ChangelogPage />,
            },
            {
              path: "button",
              element: <ButtonPage />,
            },
            {
              path: "card",
              element: <CardPage />,
            },
            {
              path: "modal",
              element: <ModalPage />,
            },
            {
              path: "input",
              element: <InputPage />,
            },
            {
              path: "navbar",
              element: <NavbarPage />,
            },
            {
              path: "tooltip",
              element: <TooltipPage />,
            },
            {
              path: "carousel",
              element: <CarouselPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
