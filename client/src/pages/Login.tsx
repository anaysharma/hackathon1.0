import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import setDocumentTitle from "../utils/setDocumentTitle";

export default function Login(): JSX.Element {
  const [toggleVisibility, setToggleVisibility] = useState<boolean>(false);
  setDocumentTitle("Login | Police Feedback Hub");

  return (
    <>
      <main className="flex items-center relaive justify-center max-sm:justify-end flex-col h-screen bg-slate-100 px-4">
        <div className="absolute left-0 h-1/2 right-0 top-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100"></div>
          <img src="bg.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <h1 className="font-bold z-10 drop-shadow-lg text-2xl max-sm:flex-1 flex items-center py-6">
          Police Feedback System
        </h1>
        <form
          action="/"
          method="post"
          className="bg-white border w-full p-4 rounded-lg mx-4 shadow-md grid gap-3 sm:w-[500px] z-10"
        >
          <legend className="font-bold text-lg">Login to get started: </legend>
          <div className="grid gap-4">
            <label className="grid text-slate-600 gap-2" htmlFor="username">
              Username
              <input
                className="border bg-slate-50 rounded px-4 py-2"
                type="text"
                name="username"
                id="username"
                placeholder="type your username"
              />
            </label>
            <label className="grid text-slate-600 gap-2" htmlFor="password">
              Password
              <div className="relative flex items-center">
                <input
                  className="border rounded bg-slate-50 px-4 py-2 w-full"
                  type={toggleVisibility ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="type here"
                />
                <button
                  className="absolute right-3"
                  type="button"
                  onClick={() => setToggleVisibility((prev) => !prev)}
                >
                  {toggleVisibility ? <IconEyeOpen /> : <IconEyeClose />}
                </button>
              </div>
            </label>
          </div>
          <div className="pt-4">
            <button
              className="py-2 bg-sky-600 text-white rounded w-full hover:bg-sky-500"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center py-6">
          don't have an account yet?{" "}
          <Link to="/signup" className="text-sky-700 hover:underline">
            Sign up
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const IconEyeClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-eye-closed"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
    <path d="M3 15l2.5 -3.8" />
    <path d="M21 14.976l-2.492 -3.776" />
    <path d="M9 17l.5 -4" />
    <path d="M15 17l-.5 -4" />
  </svg>
);
export const IconEyeOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-eye"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
  </svg>
);
