import { Navigation } from "@/components/Navigation/Navigation";
import { Header } from "@/sections/Home/Header/Header";
import { Intro } from "@/sections/Home/Intro/Intro";
import { Showcase } from "@/sections/Home/Showcase/Showcase";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="bg-black-bg">
        <div className="container">
          <Header />
          <Intro />
          <Showcase />
        </div>
      </div>
    </>
  );
}
