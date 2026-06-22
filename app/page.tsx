'use client';

import { motion } from 'framer-motion';
import { PageTransition, StaggerContainer, StaggerItem } from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur z-50 border-b border-electric-blue">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="font-orbitron text-2xl font-bold tracking-wider">
            AIDAN<span className="text-electric-blue">NATION</span>
          </a>
          <ul className="flex gap-8">
            <li>
              <a href="/" className="nav-underline text-white hover:text-electric-blue transition">
                Home
              </a>
            </li>
            <li>
              <a href="/music" className="nav-underline text-white hover:text-electric-blue transition">
                Music
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Hero Image Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="/hero-2560.webp"
            alt="Phoenix silhouette hero"
            className="w-full h-full object-cover opacity-80"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 opacity-40">
          <motion.div
            className="absolute top-20 right-10 w-80 h-80 bg-electric-blue rounded-full mix-blend-screen blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-moody-blue rounded-full mix-blend-screen blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          ></motion.div>
        </div>

        {/* Additional Glow Layers */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          animate={{
            boxShadow: [
              'inset 0 0 100px rgba(11, 132, 255, 0.1)',
              'inset 0 0 200px rgba(11, 132, 255, 0.3)',
              'inset 0 0 100px rgba(11, 132, 255, 0.1)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>

        {/* Content */}
        <StaggerContainer delay={0.2}>
          <div className="relative z-10 text-center px-6">
            {/* Text Logo */}
            <motion.div
              className="mb-8 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(11, 132, 255, 0.5))',
              }}
            >
              <img
                src="/AidanNation (Text Only - Transparent Background).png"
                alt="AidanNation"
                className="mx-auto"
                style={{
                  width: '500px',
                  height: 'auto',
                  maxWidth: '90vw',
                  mixBlendMode: 'screen',
                  backgroundColor: 'transparent',
                }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="font-raleway text-2xl text-silver mb-12 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Music. Creativity. Flight.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="/music"
              className="inline-block px-8 py-4 bg-electric-blue text-black font-orbitron font-bold rounded-lg transition"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 40px rgba(11, 132, 255, 0.8), 0 0 80px rgba(2, 27, 121, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Explore Music
            </motion.a>
          </div>
        </StaggerContainer>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-moody-blue py-8 text-center text-silver">
        <p>&copy; 2026 AidanNation. All rights reserved.</p>
      </footer>
    </div>
    </PageTransition>
  );
}
