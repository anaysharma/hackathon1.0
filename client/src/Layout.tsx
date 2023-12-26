import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="pt-14 max-md:pt-24 bg-slate-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
