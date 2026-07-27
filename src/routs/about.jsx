import { useState } from "react";
import Navbar from "../components/nav";
import { CodeIcon, MoveUpRight } from "lucide-react";

import { Code2Icon, Rocket, Heart } from "lucide-react";

import Footer from "../components/Footer";

import LinuxImg from "../assets/Linux_mascot_tux.png";

function About() {
  const cards = [
    {
      icon: CodeIcon,
      title: "Learn by building",
      text: "Explore resources, technologies and ideas that help you turn curiosity into real projects.",
    },
    {
      icon: Rocket,
      title: "Keep evolving",
      text: "Technology never stops moving. Neither should your learning journey.",
    },
    {
      icon: Heart,
      title: "Built for community",
      text: "A place for developers to discover, create, share and grow together.",
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="w-screen h-screen flex items-center bg-blue-500 p-5 gap-15 flex justify-center">
        <div className="flex flex-col gap-7">
          <div className="flex gap-1 w-fit text-sm  items-center text-white bg-blue-400 font-bold p-2 rounded-2xl">
            <div className="h-2 w-2 bg-emerald-400 rounded-full "></div>
            <h1>THE DEVELOPERS PLATAFORM</h1>
          </div>

          <div>
            <h1 className="text-6xl text-white font-bold w-120">
              Made by Devs. <span className="text-black">For Devs</span>
            </h1>
          </div>

          <div>
            <p className="text-gray-300 w-115">
              A modern space for people who love technology, want to build
              better projects, and keep growing in the world of development.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="#mission"
              className="flex w-fit font-bold text-sm bg-black cursor-pointer text-white p-3 gap-3 rounded-2xl items-center transition-all duration-300 ease-in hover:scale-102 hover:opacity-80"
            >
              <h1>Discover our mission</h1>
              <MoveUpRight className="size-4" />
            </a>

            <a
              href="#mission"
              className="flex w-fit font-bold text-sm border-1 border-blue-300  bg-blue-400 cursor-pointer text-white p-3 gap-3 rounded-2xl items-center transition-all duration-300 ease-in hover:scale-102 hover:opacity-80"
            >
              <h1>Our values</h1>
            </a>
          </div>
        </div>

        <img
          src={LinuxImg}
          alt=""
          className="size-100 w-100 h-120  border-black transition-all duration-200 ease-in hover:rotate-5"
        />
      </main>

      <main className="w-screen  bg-white flex flex-col items-center justify-center pt-30 pb-10">
        <div id="mission" className="flex flex-col gap-3 w-fit">
          <h1 className="font-bold text-blue-500">OUR MISSION</h1>

          <div className="flex justify-between gap-20 items-center">
            <h1 className="text-5xl w-130 font-bold">
              Make technology feel more acessible
            </h1>
            <p className="font-bold text-gray-500 w-110">
              we believe every great developer starts with curiosity. Developers
              is here to help you learn, create and find your place in tech
            </p>
          </div>

          <div className="flex mt-20 h-1 bg-gray-500 opacity-20"></div>
        </div>
      </main>

      <main className="flex flex-col bg-white h-full w-screnn items-center gap-10 pb-40">
        <div id="mission" className="flex flex-col gap-3 w-fit ">
          <h1 className="font-bold text-blue-500">WHY WE EXIST</h1>

          <div className="flex justify-between gap-20 items-center">
            <h1 className="text-5xl w-130 font-bold">More than just code</h1>
            <p className="font-bold text-gray-500 w-110">
              the principies behind everything we build for developers
            </p>
          </div>
        </div>

        <main className="flex ">
          <div className="grid grid-cols-3 gap-10 ">
            {cards.map((card, index) => {
              return (
                <article className="text-black relative group flex flex-col rounded-2xl gap-5 p-5 h-70 shadow-sm shaodw-black w-75">
                  <div>
                    <span className="absolute right-7 top-6 text-sm font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <card.icon className="size-10 p-2 rounded-2xl group-hover:rotate-15 bg-blue-500 text-white  transition-all duration-300 ease-in" />

                  <h1 className="text-2xl font-bold">{card.title}</h1>

                  <p className=" text-sm text-gray-500">{card.text}</p>

                  <div className="w-10 h-1 bg-blue-500 rounded-3xl  group-hover:w-full transition-all duration-300 ease-in"></div>
                </article>
              );
            })}
          </div>
        </main>
      </main>
      <Footer />
    </div>
  );
}

export default About;
