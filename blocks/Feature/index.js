import react from "react";
import Card from "../card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Feature = (props) => {
  const { title, body, card } = props;

  return (
    <div>
      <ReactMarkdown children={title} remarkPlugins={[remarkGfm]} />
      <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
      <div className="flex space-x-20">
        {card.map((cardItem) => (
          <Card
            key={cardItem._id}
            title={cardItem.title}
            body={cardItem.body}
            img={cardItem.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
