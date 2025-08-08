
import { Github, Magnet, Rat, Wifi, Zap } from "lucide-react";
import Link from "next/link";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";


export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-zinc-900 overflow-x-hidden">

      <header className="flex z-10 md:fixed bg-zinc-900 shadow-2xl w-full items-center h-fit py-4 px-4 md:px-8 border-b-2 border-zinc-700 justify-between text-zinc-50">

        <span>Caio Mendes | Portfólio</span>

        <a href="#hero"><Rat className="size-5 text-zinc-600 hover:text-zinc-300" /></a>

        <nav className="hidden md:flex text-zinc-200 gap-2 items-center">
          <a href="#sobre" className="py-1.5 px-2 transition-all duration-150 hover:bg-zinc-800 rounded-sm">Sobre</a>
          <a href="#projetos" className="py-1.5 px-2 transition-all duration-150 hover:bg-zinc-800 rounded-sm">Projetos</a>
        </nav>

      </header>

      <Intro id="hero" />

      <div className="flex w-full justify-center border-y-2 border-zinc-700 text-zinc-600 transition-all duration-500 shadow-2xl px-[10vw] md:px-[45vw] hover:px-0">

        <div className="flex w-full items-center justify-between py-3 px-6 gap-2 transition-all duration-1000">
          <Magnet className="size-4 rotate-[225deg]" />
          <Wifi className="size-4 rotate-90 animate-bounce" />
          <Zap className="size-4 ml-1" />
        </div>
      </div>

      <About id="sobre" />

      <Projects id="projetos"/>

      <footer className="flex bg-zinc-900 w-full items-center justify-center py-2 border-t-2 text-zinc-500 text-sm border-zinc-700 mt-auto">
        <Link href={"https://github.com/zCaio79"} target="_blank" className="flex gap-2 items-center transition-all duration-300 hover:text-zinc-300">
          zCaio79
          <Github className="size-4" />
        </Link>

      </footer>

    </div>
  )
}
