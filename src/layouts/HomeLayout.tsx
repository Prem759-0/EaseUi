import { Outlet } from "react-router";
import Navbar from "../components/Personal/Navbar";
import { CommandMenu } from "../components/Personal/CommandMenu";

type Props = {};

const HomeLayout = ({ }: Props) => {
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
