import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-8">
        <section className="mt-28 border">
          <Hero />
        </section>
        <section>
          <Title />
          <LatestCollections />
        </section>
      </main>
    </>
  );
}
