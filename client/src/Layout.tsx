import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="pt-14 max-md:pt-24">
        <Outlet />
      </div>
    </>
  );
}
