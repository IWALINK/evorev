"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const projects = [
  {
    title: "Projet 'TechInnov' - Lausanne",
    description:
      "Soutenir le développement d'une solution logicielle innovante créée par de jeunes ingénieurs de l'EPFL.",
    category: "Innovation technologique",
    location: "Lausanne",
    color: "from-emerald-500 to-emerald-700",
    bgPattern: "circles",
  },
  {
    title: "Programme 'Artisan 2.0' - Genève",
    description:
      "Aider les jeunes artisans à digitaliser leur savoir-faire et à atteindre un marché national.",
    category: "Transformation digitale",
    location: "Genève",
    color: "from-orange-500 to-red-500",
    bgPattern: "dots",
  },
];

export default function Impact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="impact" className="bg-gradient-to-b from-white to-primary">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-4">
            Là où votre investissement{" "}
            <span className="gradient-text">prend vie</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les visages et les projets que nous soutenons ensemble.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto divide-y divide-gray-200 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row items-stretch md:items-center py-10 md:py-12">
                {/* Modern Geometric Background */}
                <div className={`relative w-full md:w-2/5 h-[220px] md:h-[260px] overflow-hidden bg-gradient-to-br ${project.color}`}>
                  {/* Abstract Geometric Pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.bgPattern === "circles" && (
                      <svg
                        className="w-64 h-64 opacity-30"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="100" cy="50" r="35" stroke="white" strokeWidth="2" />
                        <circle cx="150" cy="100" r="35" stroke="white" strokeWidth="2" />
                        <circle cx="100" cy="150" r="35" stroke="white" strokeWidth="2" />
                        <circle cx="50" cy="100" r="35" stroke="white" strokeWidth="2" />
                        <circle cx="100" cy="100" r="25" stroke="white" strokeWidth="2" />
                      </svg>
                    )}
                    {project.bgPattern === "dots" && (
                      <svg
                        className="w-full h-full opacity-30"
                        viewBox="0 0 400 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {Array.from({ length: 15 }).map((_, i) => (
                          <g key={i}>
                            {Array.from({ length: 8 }).map((_, j) => (
                              <circle
                                key={`${i}-${j}`}
                                cx={150 + j * 8}
                                cy={180 + i * 8}
                                r={i > 7 && j > 3 ? "3" : "1.5"}
                                fill="white"
                              />
                            ))}
                          </g>
                        ))}
                        {/* Document icon */}
                        <rect x="200" y="250" width="80" height="100" stroke="white" strokeWidth="3" rx="4" />
                        <line x1="215" y1="270" x2="265" y2="270" stroke="white" strokeWidth="2" />
                        <line x1="215" y1="285" x2="265" y2="285" stroke="white" strokeWidth="2" />
                        <line x1="215" y1="300" x2="250" y2="300" stroke="white" strokeWidth="2" />
                      </svg>
                    )}
                  </div>


                </div>

                {/* Content */}
                <div className="md:w-3/5 md:pl-10 pt-6 md:pt-0 flex flex-col justify-center">
                  <div className="flex items-center text-gray-400 text-xs uppercase tracking-wider mb-4">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-300 mr-2" />
                    {project.category}
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-[26px] text-secondary mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[15px] md:text-base text-gray-600 leading-relaxed max-w-prose">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className=" mx-auto  rounded-3xl p-2   ">
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Votre investissement n&apos;est pas une ligne dans un bilan. <br />
              <span>
                C&apos;est une histoire, un projet, un emploi. C&apos;est
                l&apos;avenir.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

