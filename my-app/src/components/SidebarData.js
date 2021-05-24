import React from "react";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <CgIcons.CgHello />,
    className: "nav-text",
  },
  {
    title: "Skills",
    path: "/skills",
    icon: <GiIcons.GiSkills />,
    className: "nav-text",
  },
  {
    title: "CV",
    path: "/curriculum",
    icon: <IoIcons.IoNewspaperOutline />,
    className: "nav-text",
  },
];

export default SidebarData;
