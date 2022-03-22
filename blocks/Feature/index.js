import react from "react";
import Card from "../card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Feature = (props) => {
  const { title, body, card } = props;

  return (
    <>
      <ReactMarkdown children={title} remarkPlugins={[remarkGfm]} />
      <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
      {card.map((cardItem) => (
        <Card
          key={cardItem._id}
          title={cardItem.title}
          body={cardItem.body}
          img={cardItem.img}
        />
      ))}
    </>
  );
};

export default Feature;
