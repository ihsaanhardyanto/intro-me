import React from "react";
import Header from "../components/header";
import Image from "next/image";
import background from "../assets/img/background.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Image src={background} alt="background image"></Image>
        <div className=""></div>
      </main>
    </>
  );
}
