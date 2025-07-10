import React from "react";
import Link from "next/link";

import "../styles/aside.scss";

const Aside = () => {
  return (
    <div className="aside-container">
      <Link className="aside-link" href="/">
        About Me
      </Link>
      <Link className="aside-link" href="/skills">
        Skills & Knowledge
      </Link>
      <Link className="aside-link" href="/projects">
        Projects
      </Link>
      <Link className="aside-link" href="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Aside;
