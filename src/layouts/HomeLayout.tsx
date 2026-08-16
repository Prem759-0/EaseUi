import { Outlet } from "react-router";
import Navbar from "../components/Personal/Navbar";

type Props = {};

const HomeLayout = ({ }: Props) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="comic-bg"></div>

      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
