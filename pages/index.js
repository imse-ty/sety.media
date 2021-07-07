import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import sleep from '../lib/sleep';
import setymediaColors from '../constants/setymedia-colors';
import Footer from '../components/footer';
import Wordmark from '../components/wordmark';
import ProgressBar from '../components/progress-bar';

export default function Home() {
  const [theme, setTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 3);

    setTheme(randomNumber);
  }, []);

  function cycleTheme() {
    if (theme === 0) {
      setTheme(theme + 1);
    } else if (theme === 1) {
      setTheme(theme + 1);
    } else if (theme === 2) {
      setTheme(0);
    }
  }

  function getWordmarkColors() {
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

  async function goToImsetyWebsite() {
    setIsLoading(true);
    await sleep(2500);
    router.push('https://imsety.com');
  }

  const wordmarkVariant = {
    hidden: { scale: 3 },
    show: {
      scale: 1,
      transition: { type: 'spring', duration: 2 }
    }
  };

  return (
    <div
      onClick={() => cycleTheme()}
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
      </Head>

      <main className="flex-grow flex items-center justify-center ">
        <AnimatePresence>
          {isLoading && (
            <ProgressBar
              color={theme === 1 ? 'bg-outlineWhite' : 'bg-wireframeRed'}
            />
          )}
        </AnimatePresence>

        <motion.div
          transition={{ type: 'spring', duration: 0.6, bounce: 0.5 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => goToImsetyWebsite()}
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
              setyColor={getWordmarkColors().setyColor}
              mediaColor={getWordmarkColors().mediaColor}
            />
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
