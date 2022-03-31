import react from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = ({ navbar }) => {
  const { link } = navbar;

  return (
    <div
      className="p-10 "
      style={{ display: "flex", padding: "20px", fontSize: "20px" }}
    >
      <div>
        <Image
          src={`http://localhost:1337${navbar.logo.url}`}
          height={100}
          width={100}
        />
      </div>

      {link.map((_) => (
        <a className="p-10 hover:text-red-500" href={_.href}>
          {_.name}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
