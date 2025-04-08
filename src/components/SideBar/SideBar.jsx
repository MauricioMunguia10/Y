import { IoBriefcaseOutline } from "react-icons/io5";
import ButtonSB from "./ButtonSB/ButtonSB";
import styles from "./SideBar.module.css";
import { useLocation } from "react-router-dom";
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
    { icon: <MdHomeFilled />, text: "Home", path: "/home", active: true },
    { icon: <MdSearch />, text: "Search", path: "/search", active: false },
    {
      icon: <MdOutlineNotificationsActive />,
      text: "Notifications",
      path: "/notifications",
      active: false,
    },
    {
      icon: <MdOutlineEmail />,
      text: "Messages",
      path: "/messages",
      active: false,
    },
    {
      icon: <MdOutlineBookmarks />,
      text: "Bookmarks",
      path: "/bookmarks",
      active: false,
    },
    {
      icon: <IoBriefcaseOutline />,
      text: "Jobs",
      path: "/jobs",
      active: false,
    },
    {
      icon: <MdOutlinePeopleOutline />,
      text: "Communities",
      path: "/communities",
      active: true,
    },
    {
      icon: <MdPersonOutline />,
      text: "Profile",
      path: "/profile",
      active: false,
    },
  ];
  const location = useLocation();

  const currentPath = location.pathname;
  const updatedLinks = links.map((link) => {
    if (link.path === currentPath) {
      return { ...link, active: true };
    } else {
      return { ...link, active: false };
    }
  });

  return (
    <div className={styles.container}>
      <img src="/whiteLogo.png" alt="logo" className={styles.logo} />
      {updatedLinks.map((link, index) => (
        <ButtonSB
          key={index}
          icon={link.icon}
          text={link.text}
          path={link.path}
          active={link.active}
        />
      ))}
    </div>
  );
};

export default SideBar;
