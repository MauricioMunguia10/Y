import { RiVerifiedBadgeFill } from "react-icons/ri";
import styles from "./Post.module.css";
import { LuDot } from "react-icons/lu";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const Post = ({ post }) => {
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();

  return (
    <div className={styles.container}>
      <div className={styles.photoProfile}>
        <img src={post.profilePic} alt="profilePic" />
      </div>
      <div className={styles.postContent}>
        <div className={styles.postTop}>
          <h3 className={styles.author}>{post.author}</h3>
          <RiVerifiedBadgeFill color={color} />
          <p className={styles.user}>{post.user}</p>
          <LuDot />
          <p className={styles.date}>
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className={styles.postMiddle}>
          <p className={styles.description}>{post.description}</p>
        </div>
        <div className={styles.postBottom}>
          <div style={{ cursor: "not-allowed" }}>
            <FaRegComment /> Comments
          </div>
          <div style={{ cursor: "not-allowed" }}>
            <FaRegHeart /> Likes
          </div>
          <div style={{ cursor: "not-allowed" }}>
            <IoShareSocialOutline /> Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
