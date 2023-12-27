import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CreatePostForm() {
  const [lang, setLang] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [mode, setMode] = useState<"detail" | "chat">("detail");
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    if (mode === "detail") setLink(`/create?no=${number}&lang=${lang}`);
    else setLink(`/chat?no=${number}&lang=${lang}`);
  }, [mode, number, lang]);

  return (
    <div className="p-4 shadow-lg grid bg-sky-700 mx-auto max-w-7xl rounded-md">
      <h3 className="text-xl font-medium text-white pb-5">
        Create a new Feedback Post
      </h3>
      <div className="flex max-sm:flex-col gap-2 text-sm flex-wrap">
        <div className="flex-1 border bg-slate-100 p-2 rounded-md justify-between md:basis-52">
          <label className="flex flex-col gap-3 justify-between" htmlFor="lang">
            1. Select Language
            <select
              onChange={(e) => setLang(e.target.value)}
              name="lang"
              id="lang"
              value={lang}
              className="bg-white rounded px-3 py-2 text-black border"
            >
              <option value="en">English</option>
              <option value="hn">Hindi</option>
              <option value="ur">Urdu</option>
            </select>
          </label>
        </div>
        <div className="flex-1 border bg-slate-100 p-2 rounded-md justify-between md:basis-52">
          <label
            className="flex flex-col gap-3 justify-between"
            htmlFor="number"
          >
            2. Enter Your Number
            <input
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              id="number"
              value={number}
              name="number"
              placeholder="type here"
              className="bg-white rounded px-3 py-2 text-black border"
            />
          </label>
        </div>
        <div className="flex-1 border bg-slate-100 p-2 rounded-md justify-between md:basis-52">
          <div className="flex flex-col gap-3 justify-between">
            3. Select Mode
            <div className="flex gap-2">
              <label
                htmlFor="detail"
                className="flex items-center gap-2 p-2 bg-white rounded cursor-pointer flex-1"
              >
                <input
                  checked
                  onClick={() => setMode("detail")}
                  className="h-6 w-6 accent-sky-600"
                  type="radio"
                  name="assist"
                  id="detail"
                  value="detail"
                />
                detailed post
              </label>
              <label
                htmlFor="chat"
                className="flex items-center gap-2 p-2 bg-white rounded cursor-pointer flex-1"
              >
                <input
                  onClick={() => setMode("chat")}
                  className="h-6 w-6 accent-sky-600"
                  type="radio"
                  name="assist"
                  id="chat"
                  value="chat"
                />
                chat bot
              </label>
            </div>
          </div>
        </div>
        <div className="flex-1 border bg-slate-100 p-2 rounded-md justify-between md:basis-52">
          <label className="flex flex-col gap-3 justify-between" htmlFor="lang">
            4. Next
            <Link
              to={link}
              className="bg-sky-600 text-center hover:bg-sky-500 rounded px-3 py-2 font-medium text-white"
            >
              Go
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
}
