import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <nav className="md:px-4 md:py-2 fixed inset-0 bottom-auto bg-white shadow-lg z-50">
      <div className="items-center grid grid-cols-3 max-md:grid-cols-2 max-w-7xl mx-auto lg:px-4">
        <div className="font-bold max-md:py-2 max-md:pl-4">
          Police Feedback System
        </div>
        <ul className="flex gap-3 max-md:col-start-1 max-md:col-end-3 py-3 justify-center max-md:border-t">
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/">Helpline</Link>
          </li>
          <li>
            <Link to="/">Explore</Link>
          </li>
          <li>
            <Link to="/">Accounts</Link>
          </li>
        </ul>
        <div className="flex gap-3 justify-self-end max-md:col-start-2 max-md:row-start-1  max-md:py-2 max-md:pr-4">
          <Link
            to="/login"
            className="bg-sky-600 text-white rounded py-1 w-20 text-center hover:bg-sky-500"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="border-sky-600 border-2 text-sky-700 rounded py-1 w-20 text-center hover:bg-sky-500 hover:text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
