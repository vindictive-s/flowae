import { cookies } from "next/headers";
import Hero from "./(home)/Hero";
import Card from "./(home)/Card";
import Banner from "./(home)/Banner";
import Mission from "./(home)/Mission";
import Project from "./(home)/Project";
import Process from "./(home)/Process";

export default function Home() {
  const cookiesList = cookies();
  const hasCookie = cookiesList.has("theme");

  return (
    <div>
      <main className="flex flex-col items-center justify-between text-center gap-4 w-full px-10 text-wh-100 scroll-smooth">
        <Hero />
        <Card />
        <Banner />
        <Process />
        <Mission />
        <Project />
      </main>
    </div>
  );
}
