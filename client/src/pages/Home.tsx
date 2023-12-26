export default function Home(): JSX.Element {
  return (
    <main>
      <header className="bg-[url('/hero.jpeg')] h-96 bg-cover bg-center relative">
        <h1 className="text-white drop-shadow-lg font-bold text-4xl text-center absolute inset-0 grid place-items-center bg-black/30">
          Welcome to Rajasthan Police Feedback Hub
        </h1>
      </header>
      <section>
        <h2>Tell us your opinion about the services we have provided you</h2>
        <div></div>
      </section>
    </main>
  );
}
