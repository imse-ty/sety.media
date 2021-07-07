import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import Wordmark from '../components/wordmark';

export default function Home() {
  const [theme, setTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 3);

    setTheme(randomNumber);
  }, []);

  const router = useRouter();

  const setymediaColors = {
    frameworkGray: '#1D1D26',
    outlineWhite: '#F5F5F5',
    wireframeRed: '#DD1444'
  };
  const wordmarkVariant = {
    hidden: { scale: 3 },
    show: {
      scale: 1,
      transition: { type: 'spring', duration: 2 }
    }
  };

  function cycleThemes() {
    if (theme === 0) {
      setTheme(theme + 1);
    } else if (theme === 1) {
      setTheme(theme + 1);
    } else if (theme === 2) {
      setTheme(0);
    }
  }

  function setWordmarkColors() {
    if (theme === 0) {
      return {
        setyColor: setymediaColors.frameworkGray,
        mediaColor: setymediaColors.wireframeRed
      };
    }

    if (theme === 1) {
      return {
        setyColor: setymediaColors.outlineWhite,
        mediaColor: setymediaColors.frameworkGray
      };
    }

    if (theme === 2) {
      return {
        setyColor: setymediaColors.outlineWhite,
        mediaColor: setymediaColors.wireframeRed
      };
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function goToImsety() {
    setIsLoading(true);
    await sleep(2500);
    router.push('https://imsety.com');
  }

  return (
    <div
      onClick={() => cycleThemes()}
      className={`
      flex flex-col overflow-hidden min-h-screen text-frameworkGray transition-colors duration-500

      ${theme === 0 && 'text-frameworkGray bg-outlineWhite'}
      ${theme === 1 && 'text-outlineWhite bg-wireframeRed'}
      ${theme === 2 && 'text-outlineWhite bg-frameworkGray'}

      ${isLoading && 'cursor-wait'}
    `}
    >
      <Head>
        <title>SetyMedia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex-grow flex items-center justify-center ">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ left: '-100%' }}
              animate={{ left: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className={`
                fixed top-0 -left-full w-screen h-2

                ${theme === 1 ? 'bg-outlineWhite' : 'bg-wireframeRed'}
              `}
            />
          )}
        </AnimatePresence>

        <motion.div
          transition={{ type: 'spring', duration: 0.6, bounce: 0.5 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => goToImsety()}
          className={`${isLoading ? 'cursor-wait' : 'cursor-pointer'}`}
        >
          <motion.div
            variants={wordmarkVariant}
            initial="hidden"
            animate="show"
            whileTap={{
              scale: 0.8,
              transition: { type: 'spring', duration: 0.3, bounce: 0.5 }
            }}
            className="w-60 md:w-96"
          >
            <Wordmark
              setyColor={setWordmarkColors().setyColor}
              mediaColor={setWordmarkColors().mediaColor}
            />
          </motion.div>
        </motion.div>
      </main>

      <footer className="p-14">
        <p className="text-xs text-center">
          Copyright © 2021 SetyMedia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
