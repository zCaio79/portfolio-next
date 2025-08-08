import { Link2, Waypoints } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type ProjectProps = {
  id: string
}

export default function Projects(props : ProjectProps){
    return(
        <section id={props.id} className="flex gap-8 w-full pb-4 flex-col border-2 border-b-0 border-zinc-700 justify-center items-center h-fit ">
        <span className="flex px-4 items-center gap-6 hover:shadow-2xl justify-center border-b-2 border-x-2 rounded-b border-zinc-700 py-4 w-full md:w-[85vw] font-bold text-5xl text-zinc-50 transition-all duration-500 hover:w-full">
          <span className="hover:text-6xl transition-all duration-500">Meus Projetos</span>
          <Waypoints className="hidden md:flex size-10" />
        </span>
        
        <div className="flex md:min-h-fit mb-2 flex-col gap-6 py-4 pt-6 px-6 w-[90vw] md:w-[85vw] md:h-[79vh] h-fit border-2 border-zinc-700 transition-all duration-500 rounded-md">
          <span className="flex h-fit pb-2 flex-col w-full gap-2 border-b-2 border-zinc-700">
            <span className="text-3xl font-medium text-zinc-200 transition-all duration-500 hover:text-4xl">Dengue Zero</span>
            <Link href={"https://github.com/zCaio79/Dengue-Nextjs"} className="flex text-zinc-400 items-center font-medium gap-2 hover:text-zinc-300">dengue-zero.github.com <Link2 className="size-4" /></Link>
          </span>

          <div className="flex flex-col justify-center items-center w-full flex-wrap gap-4">
            <Image
              className="flex rounded"
              src="/dengue1.png"
              width={550} height={300}
              alt="dengue zero" />
            <span className="flex self-center md:w-[37vw] w-full bg-zinc-800 rounded py-3 px-4 font-light text-zinc-100 text-justify">Dengue Zero é um sistema voltado à conscientização e combate ao mosquito transmissor da dengue. Permite o registro de focos, acompanhamento de casos e acesso a informações úteis. A plataforma busca unir comunidade e autoridades para prevenir surtos e reduzir os riscos da doença.</span>
          </div>
        </div>
        <div className="flex  w-full md:w-[85vw] gap-8 justify-center md:justify-between flex-wrap mb-2">
        <div className="flex md:min-h-fit flex-col gap-6 py-4 pt-6 px-6 w-[90vw] md:w-[40vw] md:h-[78vh] h-fit border-2 border-zinc-700 transition-all duration-500 rounded-md">
          <span className="flex h-fit pb-2 flex-col w-full gap-2 border-b-2 border-zinc-700">
            <span className="text-3xl font-medium text-zinc-200 transition-all duration-500 hover:text-4xl">Opina Univale</span>
            <Link href={"https://github.com/zCaio79/univale-next.git"} className="flex text-zinc-400 items-center font-medium gap-2 hover:text-zinc-300">opina-univale.github.com <Link2 className="size-4" /></Link>
          </span>

          <div className="flex flex-col justify-center items-center w-full flex-wrap gap-4">
            <Image
              className="flex rounded"
              src="/opina1.png"
              width={550} height={300}
              alt="opina univale" />
            <span className="flex self-center md:w-[37vw] w-full bg-zinc-800 rounded py-3 px-4 font-light text-zinc-100 text-justify">Opina Univale é um sistema de enquetes e sugestões voltado aos alunos da Univale. Permite compartilhar opiniões sobre temas do campus, apoiar ideias e participar de votações. Com foco na interação e melhoria contínua, o projeto dá voz aos estudantes de forma simples e organizada.</span>
          </div>
        </div>

        <div className="flex md:min-h-fit flex-col gap-6 py-4 pt-6 px-6 w-[90vw] md:w-[40vw] md:h-[78vh] h-fit border-2 border-zinc-700 transition-all duration-500 rounded-md">
          <span className="flex h-fit pb-2 flex-col w-full gap-2 border-b-2 border-zinc-700">
            <span className="text-3xl font-medium text-zinc-200 transition-all duration-500 hover:text-4xl">Este Portfólio</span>
            <Link href={"https://github.com/zCaio79/portfolio-next.git"} className="flex text-zinc-400 items-center font-medium gap-2 hover:text-zinc-300">my-portfolio.github.com <Link2 className="size-4" /></Link>
          </span>

          <div className="flex flex-col justify-center items-center w-full flex-wrap gap-4">
            <Image
              className="flex rounded"
              src="/portfolio.PNG"
              width={550} height={300}
              alt="portfólio" />
            <span className="flex self-center md:w-[37vw] w-full bg-zinc-800 rounded py-3 px-4 font-light text-zinc-100 text-justify">Portfólio desenvolvido com Next.js e Tailwind CSS, focado em design minimalista, performance e responsividade. Apresenta projetos e habilidades de forma clara, com animações sutis e estrutura otimizada para destacar o trabalho. Combina estética moderna com código limpo e eficiente.</span>
          </div>
        </div>
        </div>
      </section>
    )
}