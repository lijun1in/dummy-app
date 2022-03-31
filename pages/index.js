import Head from "next/head";
import Image from "next/image";
//import styles from "../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";
import delve from "dlv";
import BlockManager from "../shared/BlockManager";
import Layout from "../global/Layout";

const Home = ({ global, pageData }) => {
  const blocks = delve(pageData, "block");

  return (
    <Layout global={global} pageData={pageData}>
      <BlockManager blocks={blocks} />
    </Layout>
  );
};

export async function getStaticProps() {
  // get post from strapi api

  const res = await axios.get("http://127.0.0.1:1337/pages");

  const pageData = await res.data[0];

  return {
    props: { pageData },
  };
}

export default Home;
