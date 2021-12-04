import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          officiis corporis deleniti inventore qui neque rem atque explicabo
          iusto, eaque ratione, similique consequatur voluptate sint mollitia
          quo expedita tempora sit minima odio alias pariatur aliquam. Velit
          magni modi repudiandae! Dolore.
        </p>
        <p>Someth paragraph</p>
      </section>
    </Layout>
  );
}
