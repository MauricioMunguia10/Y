import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";
import styles from "./home.module.css";
import { fetchProfile } from "../../utils/fetchProfile";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { LuDot } from "react-icons/lu";
import { sendNotification } from "../../utils/toastNotifications";

//Temporary posts
const posts = [
  {
    user: "@johndoe",
    author: "John Doe",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    description:
      "Exploring new tech stacks this weekend. Any suggestions for fun side projects? 🚀 #DevLife",
    createdAt: "2025-04-16T10:30:00Z",
  },
  {
    user: "@saraparker",
    author: "Sara Parker",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    description:
      "Reading 'Atomic Habits' again. Small changes really do make a big difference! 📚💡",
    createdAt: "2025-04-16T06:45:00Z",
  },
  {
    user: "@alex99",
    author: "Alex Smith",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    description:
      "Finally deployed my first full-stack project! Couldn't be more proud. 🎉 Check it out! #WebDe Finally deployed my first full-stack project! Couldn't be more proud. 🎉 Check it out! #WebDev",
    createdAt: "2025-04-15T19:00:00Z",
  },
  {
    user: "@emilywrites",
    author: "Emily Johnson",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    description:
      "Sometimes the best ideas come when you’re not even looking for them. Trust the process ✨",
    createdAt: "2025-04-13T14:20:00Z",
  },
  {
    user: "@techguru",
    author: "Michael Green",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    description:
      "AI will not replace developers, but developers using AI will replace those who don't. 🤖🔥 #AI #Coding",
    createdAt: "2025-04-10T08:00:00Z",
  },
  {
    user: "@johndoe",
    author: "John Doe",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    description:
      "Exploring new tech stacks this weekend. Any suggestions for fun side projects? 🚀 #DevLife",
    createdAt: "2025-04-16T10:30:00Z",
  },
  {
    user: "@saraparker",
    author: "Sara Parker",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    description:
      "Reading 'Atomic Habits' again. Small changes really do make a big difference! 📚💡",
    createdAt: "2025-04-16T06:45:00Z",
  },
  {
    user: "@alex99",
    author: "Alex Smith",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    description:
      "Finally deployed my first full-stack project! Couldn't be more proud. 🎉 Check it out! #WebDe Finally deployed my first full-stack project! Couldn't be more proud. 🎉 Check it out! #WebDev",
    createdAt: "2025-04-15T19:00:00Z",
  },
  {
    user: "@emilywrites",
    author: "Emily Johnson",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    description:
      "Sometimes the best ideas come when you’re not even looking for them. Trust the process ✨",
    createdAt: "2025-04-13T14:20:00Z",
  },
  {
    user: "@techguru",
    author: "Michael Green",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    description:
      "AI will not replace developers, but developers using AI will replace those who don't. 🤖🔥 #AI #Coding",
    createdAt: "2025-04-10T08:00:00Z",
  },
];

const Home = () => {
  const [user, setUser] = useState("");
  const [post, setPost] = useState("");
  const maxLength = 200;
  useEffect(() => {
    fetchProfile()
      .then((data) => {
        console.log(data.user);
        setUser(data.user);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();
  const handleChangePost = (e) => {
    if (e.target.value.length <= maxLength) {
      setPost(e.target.value);
    } else {
      sendNotification("Post too long (200 max)", "error");
    }
  };
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.photoProfile}>
            <img
              src={"https://randomuser.me/api/portraits/men/9.jpg"}
              alt="profilePic"
            />
            <div className={styles.userInfo}>
              {user && (
                <div className={styles.userTop}>
                  <h3 className={styles.author}>{user.name}</h3>
                  <RiVerifiedBadgeFill color={color} />
                  <p className={styles.user}>{"@" + user.username}</p>
                  <LuDot />
                  <p className={styles.date}>
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              )}
              <div className={styles.createPost}>
                <textarea
                  type="text"
                  placeholder="What's on your mind?"
                  className={styles.inputPost}
                  value={post}
                  onChange={handleChangePost}
                  rows={1}
                  style={{ resize: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <div className={styles.bottom}></div>
    </Layout>
  );
};

export default Home;
