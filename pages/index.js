import Head from "next/head";
import { Header, Hero, Projects, Contact, Footer } from "../sections/index";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Plattform für Biodiversität</title>
        <meta
          name="description"
          content="Auf unserer Plattform für Biodiversität findest du Infos und Projekte rund um das Thema Biodiversität."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ scrollBehavior: "smooth" }}>
        <Header></Header>
        <Hero></Hero>
        <Projects projects={projects}></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://api.betterplace.org/de/api_v4/search?q=Biodiversit%C3%A4t&page=1&per_page=100&facets=state:activated|min_activity_threshold_reached:true|hidden_from_platform:false&order=category_boost:desc|score:desc|completed:asc|rank:desc|last_donation_at:desc`
  );
  const projects = await res.json();

  return {
    props: { projects },
  };
}
