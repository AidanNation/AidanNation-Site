'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition, StaggerContainer, StaggerItem } from '@/components/PageTransition';

interface Track {
  id: string;
  title: string;
  artist: string;
  src: string;
  artwork: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: 'Heartbeat Acoustic',
    artist: 'AidanNation',
    src: '/heartbeat-acoustic.mp3',
    artwork: '/heartbeat-acoustic-artwork.jpg',
  },
  {
    id: 2,
    title: 'Let Me Go Acoustic',
    artist: 'AidanNation',
    src: '/let-me-go-acoustic.mp3',
    artwork: '/let-me-go-acoustic-artwork.jpg',
  },
];

export default function Music() {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

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

      {/* Main Content */}
      <main className="mt-16 min-h-screen bg-gradient-to-br from-black via-moody-blue to-black pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <StaggerContainer delay={0.1}>
            <div className="text-center mb-20">
              <motion.h1
                className="font-orbitron text-5xl font-bold mb-4 text-gradient"
                animate={{ textShadow: [
                  '0 0 10px rgba(11, 132, 255, 0.5), 0 0 20px rgba(2, 27, 121, 0.3)',
                  '0 0 20px rgba(11, 132, 255, 0.9), 0 0 40px rgba(2, 27, 121, 0.6)',
                  '0 0 10px rgba(11, 132, 255, 0.5), 0 0 20px rgba(2, 27, 121, 0.3)',
                ] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                MUSIC
              </motion.h1>
              <motion.p
                className="font-raleway text-xl text-silver"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Explore the sounds of AidanNation
              </motion.p>
            </div>

            {/* Tracks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tracks.map((track, idx) => (
              <motion.div
                key={track.id}
                className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                  currentTrack.id === track.id
                    ? 'border-electric-blue bg-electric-blue/10 shadow-glow-electric'
                    : 'border-moody-blue hover:border-electric-blue'
                }`}
                onClick={() => setCurrentTrack(track)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: currentTrack.id === track.id
                    ? '0 0 30px rgba(11, 132, 255, 0.6)'
                    : '0 0 20px rgba(11, 132, 255, 0.4)',
                }}
              >
                <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                  <img
                    src={track.artwork}
                    alt={track.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-orbitron font-bold text-lg text-white mb-1">
                  {track.title}
                </h3>
                <p className="font-raleway text-silver mb-4">{track.artist}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                  className="w-full py-2 bg-electric-blue text-black font-orbitron font-bold rounded hover:shadow-glow-electric-lg transition"
                >
                  {isPlaying && currentTrack.id === track.id ? 'PAUSE' : 'PLAY'}
                </button>
              </motion.div>
            ))}
            </div>

          </StaggerContainer>

          {/* Now Playing Section */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-moody-blue/20 to-electric-blue/20 p-8 rounded-lg border border-electric-blue/50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="font-orbitron text-2xl font-bold text-white mb-6">
              NOW PLAYING
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <img
                  src={currentTrack.artwork}
                  alt={currentTrack.title}
                  className="w-full rounded-lg shadow-glow-electric"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-orbitron text-3xl font-bold text-gradient mb-2">
                  {currentTrack.title}
                </h3>
                <p className="font-raleway text-xl text-silver mb-8">
                  {currentTrack.artist}
                </p>
                <audio
                  key={currentTrack.id}
                  src={currentTrack.src}
                  controls
                  autoPlay={isPlaying}
                  className="w-full mb-6"
                />
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-8 py-3 bg-electric-blue text-black font-orbitron font-bold rounded-lg hover:shadow-glow-electric-lg transition transform hover:scale-105"
                >
                  {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-moody-blue py-8 text-center text-silver">
        <p>&copy; 2026 AidanNation. All rights reserved.</p>
      </footer>
    </div>
    </PageTransition>
  );
}
