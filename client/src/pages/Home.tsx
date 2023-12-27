import CreatePostForm from "../components/CreatePostForm";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Home(): JSX.Element {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Header />
      <section className="py-10 px-6">
        <h2 className="text-center pb-6 font-bold text-lg text-sky-600">
          Tell us your opinion about the services we have provided you
        </h2>
        <CreatePostForm />
      </section>
    </motion.main>
  );
}
