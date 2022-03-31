import react from "react";
import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";

// child
const Layout = ({ children, global }) => {
  return (
    <div>
      <NavBar {...global}></NavBar>
      <div className="p-10">{children}</div>
      <Footer {...global}></Footer>
    </div>
  );
};

export default Layout;
