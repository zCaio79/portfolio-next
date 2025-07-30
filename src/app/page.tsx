import { CodeXml, Rat } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-zinc-900">

      <header className="flex w-full items-center h-fit py-4 px-4 md:px-8 border-b-2 border-zinc-800 justify-between text-zinc-50">

        <span>Caio Mendes | Portfólio</span>

        <Rat className="size-5" />

        <nav className="hidden md:flex text-zinc-200 gap-2 items-center">
          <a href="" className="py-1.5 px-2 transition-all duration-150 hover:bg-zinc-800 rounded-sm">Sobre</a>
          <a href="" className="py-1.5 px-2 transition-all duration-150 hover:bg-zinc-800 rounded-sm">Projetos</a>
          <a href="" className="py-1.5 px-2 transition-all duration-150 hover:bg-zinc-800 rounded-sm">Contato</a>
        </nav>

      </header>

      <section className="flex flex-col justify-center items-center mx-auto w-[65vw] md:w-[45vw] h-[80vh] gap-6 border-x-2 border-zinc-800">

        <div className="flex flex-col-reverse gap-8 md:gap-14 justify-center items-center border-y-2 border-zinc-800 w-[100vw] md:w-[100vw] p-8 transition-all duration-500 md:flex-row-reverse 
        hover:w-[70vw] hover:rounded-md">
          <span className="flex self-center justify-center md:self-start h-fit md:h-[24vh] flex-col font-bold text-6xl text-zinc-50 transition-all duration-500 border-y-2 border-zinc-800 px-6 md:text-7xl">
            <span className="md:justify-start justify-center border-x-2 border-zinc-800 px-4 py-1.5 flex w-[80vw] md:w-full md:h-[20vh] transition-all duration-500 hover:text-8xl">CAIO</span>
            <span className="md:justify-start justify-center border-x-2 border-zinc-800 px-4 py-1.5 flex w-[80vw] md:w-full md:h-[20vh] transition-all duration-500 hover:text-6xl">MENDES</span>
          </span>

          <Image
            className=" rounded-bl-full rounded-tr-full rounded-tl-full border-4 border-zinc-100 transition-all duration-500 hover:rounded-t-4xl hover:rounded-br-full"
            src="/caio.jpeg"
            width={180} height={180}
            alt="caio"
          />
        </div>

        <div className="flex items-center flex-col gap-4 px-4 border-y-2 border-zinc-800 w-[55vw] p-6 transition-all duration-500 
        hover:w-[100vw] hover:rounded-md">
          <span className="flex md:w-[20vw] justify-center flex-col md:flex-row items-start md:items-end border-2 border-zinc-800 mt- py-1.5 gap-2 px-6 md:gap-4 text-zinc-400 text-lg
          transition-all duration-500 hover:w-[35vw]">
            Desenvolvedor Frontend
            <CodeXml className="size-6" />
          </span>

          <span className="hidden md:flex text-center w-fit justify-center gap-1.5 font-light py-2 px-2 md:px-4 rounded-sm bg-zinc-700 text-zinc-50 transition duration-500 hover:w-[35vw]">
            Tornando a sua ideia em uma <span className="font-medium">experiência visual</span>
          </span>

        </div>

      </section>

      <section className="flex w-full border-t-2 border-zinc-800">

      </section>

    </div>
  )
}
