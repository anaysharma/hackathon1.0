export default function Home(): JSX.Element {
  return (
    <main>
      <header className="bg-[url('/hero.jpeg')] h-96 bg-cover bg-center relative">
        <h1 className="text-white drop-shadow-lg font-bold text-4xl text-center absolute inset-0 grid place-items-center bg-black/30">
          Welcome to Rajasthan Police Feedback Hub
        </h1>
      </header>
      <section className="py-10 px-6">
        <h2 className="text-center py-6 font-bold text-lg text-sky-600">
          Tell us your opinion about the services we have provided you
        </h2>
        <div className="p-4 shadow-lg border grid bg-sky-100 mx-auto max-w-7xl rounded-md">
          <h3 className="text-xl font-medium pb-5">
            Create a new Feedback Post
          </h3>
          <div className="flex max-sm:flex-col gap-4">
            <div className="flex-1">
              <label className="flex flex-col gap-3" htmlFor="lang">
                1. Select Language
                <select
                  name="lang"
                  id="lang"
                  className="bg-white rounded px-3 py-2 text-black border border-sky-500"
                >
                  <option value="en">English</option>
                  <option value="hn">Hindi</option>
                  <option value="ur">Urdu</option>
                </select>
              </label>
            </div>
            <div className="flex-1">
              <label className="flex flex-col gap-3" htmlFor="number">
                2. Enter Your Number
                <input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="type here"
                  className="bg-white rounded px-3 py-2 text-black border border-sky-500"
                />
              </label>
            </div>
            <div className="flex-1">
              <label className="flex flex-col gap-3" htmlFor="lang">
                3. Next
                <button className="bg-sky-600 hover:bg-sky-500 rounded px-3 py-2 font-medium text-white">
                  Go
                </button>
              </label>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
