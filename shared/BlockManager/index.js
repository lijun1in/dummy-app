import Hero from "../../blocks/Hero";
import Imgtext from "../../blocks/Imgtext";
import Feature from "../../blocks/Feature";
import Card from "../../blocks/card";

const getBlockComponent = ({ __component, ...rest }) => {
  let Block;
  switch (__component) {
    case "block.hero":
      Block = Hero;
      break;
    case "block.imgtext":
      Block = Imgtext;
      break;
    case "block.feature":
      Block = Feature;
      break;
    case "block.card":
      Block = Card;
      break;
    default:
      Block = () => <>Component not created: {__component}</>;
      break;
  }

  return Block ? <Block {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return <>{blocks.map((block) => getBlockComponent(block))}</>;
};

export default BlockManager;
