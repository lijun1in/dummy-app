import react from "react";
import Link from "next/link";

const Footer = ({ footer }) => {
  return (
    <div className="text-blue-500 flex">
      {footer.link.map((linkItem) => (
        <a className="p-10 hover:text-red-500" href={linkItem.href}>
          {linkItem.name}
        </a>
      ))}
    </div>
  );
};

export default Footer;
