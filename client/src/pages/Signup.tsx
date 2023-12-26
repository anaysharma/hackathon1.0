import { Link } from "react-router-dom";

export default function Signup(): JSX.Element {
  return (
    <main className="flex relative items-center justify-center max-sm:justify-end flex-col h-screen bg-slate-100 px-4">
      <div className="absolute left-0 h-1/2 right-0 top-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100"></div>
        <img src="bg.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <h1 className="font-bold text-2xl z-10 max-sm:flex-1 flex items-center py-6">
        Police Feedback System
      </h1>
      <form
        action="/"
        method="post"
        className="bg-white z-10 border w-full p-4 rounded-lg mx-4 shadow-md grid gap-3 sm:w-[500px]"
      >
        <legend className="font-bold text-lg">Quick Signup: </legend>
        <div className="grid gap-4">
          <label className="grid text-slate-600 gap-2" htmlFor="firstname">
            First Name
            <input
              className="border bg-slate-50 rounded px-4 py-2"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="type your first name"
            />
          </label>
          <label className="grid text-slate-600 gap-2" htmlFor="firstname">
            Last Name
            <input
              className="border bg-slate-50 rounded px-4 py-2"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="type your last name"
            />
          </label>
          <label className="grid text-slate-600 gap-2" htmlFor="firstname">
            Mobile Number
            <input
              className="border bg-slate-50 rounded px-4 py-2"
              type="text"
              name="number"
              id="number"
              placeholder="+91 not required"
            />
          </label>
          <label className="grid text-slate-600 gap-2" htmlFor="firstname">
            Permanent Address
            <input
              className="border bg-slate-50 rounded px-4 py-2"
              type="text"
              name="address"
              id="address"
              placeholder="enter detailed address"
            />
          </label>
        </div>
        <div className="pt-4">
          <button
            className="py-2 bg-sky-600 text-white rounded w-full hover:bg-sky-500"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center py-6">
        already have an account?{" "}
        <Link to="/login" className="text-sky-700 hover:underline">
          login instead
        </Link>
      </div>
    </main>
  );
}
