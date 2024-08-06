import React from "react";
import { HompageHeader } from "./components/header";
import Typewriter from "../../components/typewriter";
import Link from "next/link";
import { SpotifyNowPlaying } from "../(spotify)/spotifyNowPlaying";



export default function Home() {
  return (
    <>
      <HompageHeader />
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-start mt-10 ml-10 mr-10">
          <h1 className="text-4xl font-bold">
            <Typewriter
              options={{
                strings: [
                  "Hello,",
                  "Hola,",
                  "Bonjour,",
                  "Ciao,",
                  "Hallo,",
                  "你好,",
                  "こんにちは,",
                  "안녕하세요,",
                  "สวัสดี,",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            I&apos;m Ihsaan
          </h1>
        </div>

        <div className="flex gap-2 mt-4 font-bold">
          <Link
            target="_blank"
            href="https://github.com/ihsaanhardyanto"
            className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-current after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-width after:duration-300"
          >
            Github
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ihsaan-h-88bb72253/"
            className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-current after:bottom-[-2px] after:right-0 hover:after:w-full after:transition-width after:duration-300"
          >
            LinkedIn
          </Link>
        </div>
        <div>
          <h1 className="flex justify-center items-center">Spotify</h1>
          <SpotifyNowPlaying/>
        </div>
      </div>
    </>
  );
}
