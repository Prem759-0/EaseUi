import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "../components/Personal/Navbar";
import { CommandMenu } from "../components/Personal/CommandMenu";

type Props = {};

const HomeLayout = ({ }: Props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="comic-bg"></div>

      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>
      
      <CommandMenu />
    </div>
  );
};

export default HomeLayout;
