import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full relative bg-white">
      <div className="grid grid-cols-4 max-lg:grid-cols-3 lg:px-4 max-lg:px-10 max-lg:gap-4 md:flex-row max-w-7xl mx-auto py-16 max-md:flex max-md:flex-col">
        <div className="max-w-[300px]">
          <span className="font-bold text-xl">Police Feedback Hub</span>
          <div className="mt-6 max-w-md">
            <span className="text-sky-600 block">Contact :</span>
            Call on: +91 1234567890
            <br /> Email at: example@gmail.com
          </div>
          <div className="mt-6 max-w-md">
            <span className="text-sky-600 block">Mail us at:</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            laudantium?
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Navigate</h3>
          <ul className="grid gap-2">
            <li className="hover:text-sky-600">
              <span className="text-sky-600 mr-2">■</span>Posts
            </li>
            <li className="hover:text-sky-600">
              <span className="text-sky-600 mr-2">■</span>Helpline
            </li>
            <li className="hover:text-sky-600">
              <span className="text-sky-600 mr-2">■</span>Submit Feedback
            </li>
            <li className="hover:text-sky-600">
              <span className="text-sky-600 mr-2">■</span>
              Compaint status
            </li>
            <li className="hover:text-sky-600">
              <span className="text-sky-600 mr-2">■</span>Account
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Links</h3>
          <ul className="grid gap-2">
            <li className="hover:text-sky-600">
              <Link to="/" title="go to home page">
                <span className="text-sky-600 mr-2">■</span>Update records
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link to="/" title="go to abouts page">
                <span className="text-sky-600 mr-2">■</span>Generate QR
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link to="/" title="go to services page">
                <span className="text-sky-600 mr-2">■</span>Add Station
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link to="/" title="go to projects page">
                <span className="text-sky-600 mr-2">■</span>Documents
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link to="/" title="go to blogs page">
                <span className="text-sky-600 mr-2">■</span>Your Activities
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link to="/" title="go to contacts page">
                <span className="text-sky-600 mr-2">■</span>Brouchers
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link to="/" title="go to trainings page">
                <span className="text-sky-600 mr-2">■</span>Training
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link to="/" title="go to verify">
                <span className="text-sky-600 mr-2">■</span>Verify
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col min-w-[300px] max-lg:col-span-3 max-lg:pt-6">
          <h3 className="text-xl font-bold mb-6">Newsletter</h3>
          <p>Signup to our newsletter to get updates, news or insights.</p>
          <div className="flex lg:flex-col max-lg:items-center max-lg:gap-6 max-sm:flex-col max-sm:items-stretch max-sm:gap-0">
            <input
              className="py-2 my-4 max-lg:flex-1 px-6 rounded bg-slate-100 border"
              type="email"
              name="email"
              id="email-input"
              placeholder="Enter your email"
            />
            <button className="rounded min-w-40 bg-sky-600 py-2 hover:bg-sky-500 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="bg-sky-700 py-8">
        <div className="max-w-7xl px-6 mx-auto flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center justify-center w-min gap-2">
            <a className="text-white" target="blank" href="#">
              <svg
                className="bg-sky-600 rounded p-2 h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225h-2.6Z"
                />
              </svg>
            </a>
            <a className="text-white" target="blank" href="#">
              <svg
                className="bg-sky-600 rounded p-2 h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a className="text-white" target="blank" href="#">
              <svg
                className="bg-sky-600 rounded p-2 h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24Zm48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60Zm36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16Z"
                />
              </svg>
            </a>
            <a className="text-white" target="blank" href="#">
              <svg
                className="bg-sky-600 rounded p-2 h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
                />
              </svg>
            </a>
          </div>
          <a href="#" className="text-white">
            Copyright © 2023 Rajasthan Police, All rights reserved.{" "}
          </a>
        </div>
      </div>
      <img
        className="absolute grayscale bottom-0 left-0 -z-20 opacity-20"
        src="bg_footer_2.webp.webp"
        alt="image for illustration purspose"
        title="image for illustration purspose"
      />
    </footer>
  );
}
