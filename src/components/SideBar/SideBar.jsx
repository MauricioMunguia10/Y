import { IoBriefcaseOutline } from "react-icons/io5";
import ButtonSB from "./ButtonSB/ButtonSB";
import styles from "./SideBar.module.css";
import {
  MdHomeFilled,
  MdOutlineBookmarks,
  MdOutlineEmail,
  MdOutlineNotificationsActive,
  MdOutlinePeopleOutline,
  MdPersonOutline,
  MdSearch,
} from "react-icons/md";

const SideBar = () => {
  const links = [
    { icon: <MdHomeFilled />, text: "Home", path: "/home", enable: true },
    { icon: <MdSearch />, text: "Search", path: "/search", enable: true },
    {
      icon: <MdOutlineNotificationsActive />,
      text: "Notifications",
      path: "/notifications",
      enable: true,
    },
    {
      icon: <MdOutlineEmail />,
      text: "Messages",
      path: "/messages",
      enable: true,
    },
    {
      icon: <MdOutlineBookmarks />,
      text: "Bookmarks",
      path: "/bookmarks",
      enable: true,
    },
    {
      icon: <IoBriefcaseOutline />,
      text: "Jobs",
      path: "/jobs",
      enable: true,
    },
    {
      icon: <MdOutlinePeopleOutline />,
      text: "Communities",
      path: "/communities",
      enable: true,
    },
    {
      icon: <MdPersonOutline />,
      text: "Profile",
      path: "/profile",
      enable: true,
    },
  ];
  return (
    <div className={styles.container}>
      Enter SideBAR rasgos
      {links.map((link, index) => (
        <ButtonSB
          key={index}
          icon={link.icon}
          text={link.text}
          path={link.path}
          enable={link.enable}
        />
      ))}
    </div>
  );
};

export default SideBar;
