import react from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Imgtext = (props) => {
  const { title, body, img } = props;
  const BASEHEIGHT = 500;

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <ReactMarkdown children={title} remarkPlugins={[remarkGfm]} />
      <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
      <Image
        src={`http://localhost:1337${img.url}`}
        width={(BASEHEIGHT / img.height) * img.width}
        height={BASEHEIGHT}
      />
    </div>
  );
};

export default Imgtext;
