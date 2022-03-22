import react from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Imgtext = (props) => {
  const { title, body, img } = props;

  return (
    <>
      <ReactMarkdown children={title} remarkPlugins={[remarkGfm]} />
      <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
      <Image
        src={`http://localhost:1337${img.url}`}
        width={img.width}
        height={img.height}
      />
    </>
  );
};

export default Imgtext;
