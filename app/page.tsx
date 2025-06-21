"use client";

import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.header variants={itemVariants} className="text-center py-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Twitting Camel
            </h1>
          </motion.header>

          {/* Main Content */}
          <main className="container mx-auto px-4">
            {/* Video Section */}
            <motion.section variants={itemVariants} className="mb-20">
              <div className="aspect-w-16 aspect-h-9 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">נגן וידאו יוטמע כאן</p>
                </div>
              </div>
            </motion.section>

            {/* Articles Section */}
            <motion.section variants={itemVariants}>
              <h2 className="text-4xl font-bold text-center mb-12">הכתבות שלנו</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-gray-800/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-purple-500/20 hover:scale-105"
                  >
                    <h3 className="text-2xl font-semibold mb-3">
                      כתבה לדוגמה {i}
                    </h3>
                    <p className="text-gray-400">
                      תקציר קצר של הכתבה המרתקת הזו יופיע כאן בקרוב...
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </main>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center py-10 mt-20"
          >
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Twitting Camel. כל הזכויות שמורות.
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}
