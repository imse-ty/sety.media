import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const randomNumber = Math.floor(Math.random() * 3);
  const [theme, setTheme] = useState(randomNumber);
  const setymediaColors = {
    frameworkGray: '#1D1D26',
    outlineWhite: '#F5F5F5',
    wireframeRed: '#DD1444'
  };

  function cycleThemes() {
    if (theme === 0) {
      setTheme(theme + 1);
    }

    if (theme === 1) {
      setTheme(theme + 1);
    }

    if (theme === 2) {
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

  return (
    <div class="text-frameworkGray">
      <Head>
        <title>SetyMedia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class="container mx-auto px-12">
        <div class="flex justify-center h-screen flex-col">
          <h1 class="text-7xl font-semibold">
            Hey! My Name is <span class="text-wireframeRed">Imsety</span>.
          </h1>
          <div class="bg-wireframeRed h-2 w-32 my-8"></div>
          <p class="text-xl font-medium">
            I'm a Motion Designer based in Atlanta, GA.
          </p>
          <footer class="mt-64">
            <p class="text-gray-300 mt-4">
              Copyright © 2021 SetyMedia. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
