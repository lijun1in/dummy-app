import { route } from "next/dist/server/router";
import axios from "axios";
import delve from "dlv";
//import MarkdownIt from "markdown-it";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import Link from "next/link";
import BlockManager from "../shared/BlockManager";

export default function Page({ props }) {
  const { pageData } = props;
  const blocks = delve(pageData, "block");
  if (page.Slug != "home") {
    return (
      <div>
        <BlockManager blocks={blocks} />
      </div>
    );
  }
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const res = await axios.get("http://localhost:1337/pages");
  const pages = await res.data;
  const paths = pages.map((page) => ({
    params: { slug: page.Slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

// for each stock page get data of that stock

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await axios.get(`http://localhost:1337/pages?Slug=${slug}`);

  const data = await res.data;

  const pageData = data[0];

  return {
    props: { pageData },
  };
}
