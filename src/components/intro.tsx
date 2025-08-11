'use client'

import { CodeXml, Heart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type IntroProps = {
  id: string
}

export default function Intro(props: IntroProps) {

  const [liked, setLiked] = useState(false);

  return (
    <section id={props.id} className="flex flex-col justify-center items-center mx-auto w-[65vw] md:w-[45vw] h-[85vh] md:h-[94vh] gap-6 border-x-2 border-zinc-700">

      <div className="flex flex-col-reverse gap-8 md:gap-14 justify-center items-center border-y-2 border-zinc-700 w-[70vw] p-8 transition-all duration-500 md:flex-row-reverse 
        hover:w-[100vw] hover:rounded-md hover:shadow-2xl">
        <span className="flex self-center justify-center md:self-start h-fit md:h-[24vh] flex-col font-bold text-5xl text-zinc-50 transition-all duration-500 border-y-2 border-zinc-700 px-6 md:text-7xl">
          <span className="md:justify-start justify-center border-x-2 border-zinc-700 px-4 py-1.5 flex w-[80vw] md:w-full md:h-[20vh] transition-all duration-500 hover:text-8xl">CAIO</span>
          <span className="md:justify-start justify-center border-x-2 border-zinc-700 px-4 py-1.5 flex w-[80vw] md:w-full md:h-[20vh] transition-all duration-500 hover:text-6xl">MENDES</span>
        </span>

        <Image
          className="rounded-bl-full rounded-tr-full rounded-tl-full border-4 border-zinc-100 transition-all duration-500 hover:rounded-t-4xl hover:rounded-br-full"
          src="/pc03.jpg"
          width={180} height={140}
          alt="caio"
        />
      </div>

      <div className="flex items-center flex-col gap-6 px-4 border-t-2 md:border-y-2 border-zinc-700 w-[65vw] p-6 transition-all duration-500 
        hover:w-[100vw] hover:rounded-md hover:shadow-2xl">
        <span className="flex md:w-[20vw] justify-center flex-col md:flex-row items-start md:items-end border-2 border-zinc-800 mt- py-1.5 gap-2 px-6 md:gap-4 text-zinc-400 text-sm md:text-lg
          transition-all duration-500 hover:w-[35vw]">
          Desenvolvedor Frontend
          <CodeXml className="size-6" />
        </span>

        <span className="hidden md:flex text-center w-fit justify-center gap-1.5 font-light py-2 px-2 md:px-4 rounded-sm bg-zinc-800 text-zinc-50">
          Tornando a sua ideia em uma <span className="font-medium">experiência visual</span>
        </span>

        {!liked ? 
        <button type="button" onClick={() => setLiked(true)}><Star className="size-5 text-zinc-700 hover:text-zinc-400 cursor-pointer" /></button> 
        : 
        <button type="button" onClick={() => setLiked(false)}><Star className="size-5 text-amber-400 cursor-pointer animate-[ping_1.5s_linear_1]" /></button>
        }

      </div>

    </section>
  )
}