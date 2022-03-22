import Image from "next/image";
import react from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Hero = (props) => {
  const { title, body, img } = props;

  return (
    <>
      <ReactMarkdown children={title} remarkPlugins={[remarkGfm]} />
      <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
      <Image src={`http://localhost:1337${img.url}`} width={15} height={15} />
    </>
  );
};

export default Hero;
