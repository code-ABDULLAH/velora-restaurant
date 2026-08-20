import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [ambientTrack, setAmbientTrack] = useState('zen_garden'); // 'zen_garden' | 'gentle_rain'
  const audioCtxRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const gainNodeRef = useRef(null);

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Pentatonic warm calm frequencies (C, E, G, A, C)
      const freqs = [130.81, 164.81, 196.00, 220.00, 261.63];
      oscillatorsRef.current = freqs.map((freq, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Warm sine / triangle wave for soothing harmonics
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle LFO modulation for breathing calm feel
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.1 + i * 0.03;
        lfoGain.gain.value = 0.02;
        lfo.connect(oscGain.gain);
        lfo.start();

        oscGain.gain.setValueAtTime(0.03, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        return { osc, lfo, oscGain };
      });

      setIsPlaying(true);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  };

  const stopAmbientSound = () => {
    if (oscillatorsRef.current.length > 0) {
      oscillatorsRef.current.forEach(({ osc, lfo }) => {
        try {
          osc.stop();
          lfo.stop();
        } catch {}
      });
      oscillatorsRef.current = [];
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbientSound();
    } else {
      startAmbientSound();
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  return (
    <SoundContext.Provider value={{ isPlaying, toggleSound, ambientTrack, setAmbientTrack }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
