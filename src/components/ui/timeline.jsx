"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-6xl mb-6 font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent max-w-4xl">
          Professional Journey
        </h2>
        <p
          className="dark:text-neutral-300 text-base md:text-lg max-w-2xl leading-relaxed">
          Explore my career path and professional milestones. From internships to full-time roles,
          here&apos;s a chronicle of my growth in software engineering and AI/ML development.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10 group">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ backgroundColor: 'var(--color-bg-variant)' }}>
                <div
                  className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:h-5 group-hover:w-5" />
              </div>
              <div className="hidden md:block md:pl-20 transition-all duration-300 group-hover:translate-x-2">
                <h3
                  className="text-xl md:text-6xl font-extrabold bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-400 group-hover:to-blue-500">
                  {item.title}
                </h3>
                {item.duration && (
                  <p className="text-sm md:text-lg text-neutral-400 dark:text-neutral-400 mt-3 font-medium transition-all duration-300 group-hover:text-blue-400 group-hover:translate-x-1">
                    {item.duration}
                  </p>
                )}
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden mb-4 transition-all duration-300 group-hover:translate-x-1">
                <h3
                  className="text-3xl text-left font-extrabold bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-400 group-hover:to-blue-500">
                  {item.title}
                </h3>
                {item.duration && (
                  <p className="text-sm text-neutral-400 dark:text-neutral-400 mt-2 font-medium transition-all duration-300 group-hover:text-blue-400">
                    {item.duration}
                  </p>
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="transition-all duration-300 group-hover:translate-x-2"
              >
                {item.content}
              </motion.div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};
