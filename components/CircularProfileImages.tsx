"use client";

import { motion } from "framer-motion";

interface CircularProfileImagesProps {
  inView: boolean;
}

const bubbleConfig = [
  {
    delay: 0.1,
    bounceDelay: 0,
    visibility: "block",
    positions: "top-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 xl:top-[5%] xl:left-[10%]",
    size: "w-20 h-20 sm:w-28 sm:h-28 xl:w-56 xl:h-56",
  },
  {
    delay: 0.2,
    bounceDelay: 0.2,
    visibility: "block",
    positions: "top-1/2 left-1/2 -translate-x-1/2 sm:top-28 sm:left-6 sm:translate-x-0 xl:top-[20%] xl:left-[6%]",
    size: "w-18 h-18 sm:w-24 sm:h-24 xl:w-48 xl:h-48",
  },
  {
    delay: 0.3,
    bounceDelay: 0.4,
    visibility: "block",
    positions: "bottom-10 left-1/2 -translate-x-1/2 sm:bottom-16 sm:left-10 sm:translate-x-0 xl:bottom-[18%] xl:left-[8%]",
    size: "w-18 h-18 sm:w-26 sm:h-26 xl:w-56 xl:h-56",
  },
  {
    delay: 0.4,
    bounceDelay: 0.6,
    visibility: "hidden sm:block",
    positions: "sm:top-16 sm:right-6 xl:top-[12%] xl:right-[8%]",
    size: "sm:w-24 sm:h-24 xl:w-52 xl:h-52",
  },
  {
    delay: 0.5,
    bounceDelay: 0.8,
    visibility: "hidden lg:block",
    positions: "lg:top-1/2 lg:right-10 xl:top-[38%] xl:right-[6%]",
    size: "lg:w-28 lg:h-28 xl:w-56 xl:h-56",
  },
  {
    delay: 0.6,
    bounceDelay: 1.0,
    visibility: "hidden md:block",
    positions: "md:bottom-10 md:right-10 xl:bottom-[15%] xl:right-[8%]",
    size: "md:w-24 md:h-24 xl:w-52 xl:h-52",
  },
];

const imageUrls = [
  "https://plus.unsplash.com/premium_photo-1663076109961-24daa94b8f57?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?q=80&w=1284&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function CircularProfileImages({ inView }: CircularProfileImagesProps) {
  return (
    <>
      {bubbleConfig.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  scale: 1,
                  y: [0, -15, 0],
                }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{
            opacity: {
              duration: 0.5,
              delay: 0.6 + item.delay,
            },
            scale: {
              duration: 0.5,
              delay: 0.6 + item.delay,
            },
            y: inView
              ? {
                  duration: 1.5,
                  delay: 1 + item.bounceDelay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {},
          }}
          className={`${item.visibility} absolute ${item.positions} pointer-events-none z-0 ${item.size}`}
        >
          {/* Concentric circles background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border border-blue-200/30" />
            <div className="absolute w-[130%] h-[130%] rounded-full border border-blue-200/20" />
            <div className="absolute w-[160%] h-[160%] rounded-full border border-blue-200/10" />
          </div>
          {/* Profile image centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-18 sm:h-18 xl:w-24 xl:h-24 rounded-full overflow-hidden border-2 border-white shadow-lg ring-2 ring-blue-100/40 bg-white z-10">
            <img
              src={imageUrls[index % imageUrls.length]}
              alt={`Profile ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}
    </>
  );
}

