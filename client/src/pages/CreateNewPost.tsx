import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import questions from "../data/questions.json";
import FeedbackQuestion from "../components/FeedbackQuestion";
import setDocumentTitle from "../utils/setDocumentTitle";
import { useNavigate } from "react-router-dom";
export default function CreateNewPost() {
  setDocumentTitle("New Post | Police Feedback Hub");
  const navigate = useNavigate();
  return (
    <motion.main
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-lg flex py-4 items-center">
          <Link
            to={".."}
            className="flex gap-2 items-center hover:bg-white rounded px-3 py-2"
          >
            <IconLeftArrow />
            go back
          </Link>
          <h2 className="font-bold pl-4 flex-1">Create new feedback post</h2>
        </div>
        <form className="grid gap-3 max-w-5xl mx-auto px-3 text-sm">
          {questions.questions.map((que, idx) => (
            <FeedbackQuestion
              srno={idx + 1}
              question={que.question}
              option={que.options}
              key={`sdkjfbkjasdfjhkb${idx}`}
            />
          ))}
          <div
            id="other"
            className="rounded-md bg-white overflow-hidden shadow"
          >
            <label
              htmlFor="other"
              className="font-bold flex flex-col gap-3 px-4 py-3 border-b w-full"
            >
              Please share any specific feedback you have about your experience,
              either positive or constructive [300 words] (optional)
              <textarea
                maxLength={300}
                name="other"
                id="other"
                cols={30}
                rows={5}
                className="border shadow-inner rounded py-1 px-3"
                placeholder="start typing here"
              ></textarea>
            </label>
          </div>
          <div className="flex gap-4 justify-center mb-6 py-6 bg-white rounded">
            <button
              type="button"
              className="px-10 py-1 text-sky-700 hover:bg-sky-500 hover:border-sky-500 rounded border-sky-600 border-2 hover:text-white"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-10 py-1 text-white hover:bg-sky-500 hover:border-sky-500 bg-sky-600 rounded border-sky-600 border-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.main>
  );
}

export const IconLeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.3rem"
    height="1.3rem"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"
    ></path>
  </svg>
);
