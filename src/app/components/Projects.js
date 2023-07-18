"use client";
import React, { useEffect, useState } from "react";
import Card from "@/app/components/Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="projectsSection" id="projects">
        <div className="topWrapper">
          <p>Check out some of</p>
          <h3 className="title">My Recent Projects</h3>
          <div className="desc">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </div>
        </div>
        <div className="projectsGallery">
          <div className="projects">
            {loading ? (
              <>
                <Card type={"project"} />
                <Card type={"project"} />
                <Card type={"project"} />
                <Card type={"project"} />
                <Card type={"project"} />
                <Card type={"project"} />
              </>
            ) : (
              <SkeletonTheme
                baseColor="rgb(219 234 254)"
                highlightColor="rgb(191 219 254)"
              >
                <motion.div
                  animate={{ scale: loading ? 1 : [0.98, 1, 0.98] }}
                  transition={{ repeat: Infinity }}
                >
                  <Skeleton
                    className="shadow-lg mx-3"
                    height={280}
                    width={280}
                    style={{ borderRadius: "1rem" }}
                  />
                </motion.div>
                <motion.div
                  animate={{ scale: loading ? 1 : [0.98, 1, 0.98] }}
                  transition={{ repeat: Infinity, delay: 0.5 }}
                >
                  <Skeleton
                    className="shadow-lg mx-3"
                    height={280}
                    width={280}
                    style={{ borderRadius: "1rem" }}
                  />
                </motion.div>
                <motion.div
                  animate={{ scale: loading ? 1 : [0.98, 1, 0.98] }}
                  transition={{ repeat: Infinity, delay: 1 }}
                >
                  <Skeleton
                    className="shadow-lg mx-3"
                    height={280}
                    width={280}
                    style={{ borderRadius: "1rem" }}
                  />
                </motion.div>
              </SkeletonTheme>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
