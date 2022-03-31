import Image from "next/image";
import react from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Hero = (props) => {
  const { title, body, img } = props;
  const BASEHEIGHT = 400;

  return (
    <div className="flex">
      <div>
        <ReactMarkdown
          style={{ flexGrow: 3 }}
          children={title}
          remarkPlugins={[remarkGfm]}
        />
        <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
      </div>
      <div className="w-200">
        <Image
          src={`http://localhost:1337${img.url}`}
          width={(BASEHEIGHT / img.height) * img.width}
          height={BASEHEIGHT}
        />
      </div>
    </div>
  );
};

export default Hero;
