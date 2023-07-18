"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";

const Card = ({ type, className, postURL = "/post/" }) => {
  console.log(postURL);
  if (type === "project") {
    return (
      <>
        <motion.div className="projectCard" whileHover={{ scale: 1.1 }}>
          <div className="cardImage">
            <img
              src={
                "https://portfolio-tailwind.preview.uideck.com/demos/personal/images/portfolio-01.jpg"
              }
            />
          </div>
          <div className="title">Startup landing page</div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae dolor ultrices libero.
          </div>
        </motion.div>
      </>
    );
  } else if (type === "post") {
    return (
      <>
        <motion.div className={`postCard ${className}`} initial={{ scale: 0.98 }} whileHover={{ scale: 1 }} animate={{ transition: { duration: 0.5 } }}>
          <div className="cardImage">
            <Link href={postURL}><img
              src={
                "https://portfolio-tailwind.preview.uideck.com/demos/personal/images/news-1.jpg"
              }
            /></Link>
          </div>
          <Link href={postURL}><div className="title">Startup landing page</div></Link>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae dolor ultrices libero.
          </div>
          <Link href={postURL} className="readMore">Read More</Link>
        </motion.div>
      </>
    );
  }
};

export default Card;
