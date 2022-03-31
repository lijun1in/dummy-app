import react from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Card = (props) => {
  const { title, body, img } = props;

  return (
    <div className="rounded-lg w-1/4 p-100 flex border-8">
      <div className="w-1/2">
        <Image
          src={`http://localhost:1337${img.url}`}
          width="50px"
          height="50ox"
        />
      </div>
      <div>
        <ReactMarkdown children={title} remarkPlugins={[remarkGfm]} />
        <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
};

export default Card;
