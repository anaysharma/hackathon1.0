interface feedbackQuestionProps {
  srno: number;
  question: string;
  option: string[];
}

export default function FeedbackQuestion({
  srno,
  question,
  option,
}: feedbackQuestionProps): JSX.Element {
  const queId = question.split(" ").join("_");
  return (
    <div className="bg-white rounded-md shadow overflow-hidden">
      <fieldset id={queId} className="flex flex-col">
        <legend className="font-bold flex items-start md:items-center px-4 py-3 border-b bg-slate-50 w-full">
          <span className="mr-2 text-sky-700 text-lg">{srno}.</span>
          {question}
        </legend>
        <div className="p-4 grid">
          {option.map((el, idx) => (
            <label
              key={`lksdjlkg${idx}`}
              htmlFor={el}
              className="flex gap-2 items-center cursor-pointer hover:bg-slate-50 rounded py-2 px-3"
            >
              <input
                className="h-5 w-5 accent-sky-600"
                type="radio"
                value={el}
                name={queId}
                id={el}
              />
              <span>{el}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
