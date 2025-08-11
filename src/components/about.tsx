import { Rabbit } from "lucide-react";
import Image from "next/image";

type AboutProps = {
    id : string
}

export default function About(props : AboutProps){
    return(
        <section id={props.id} className="flex flex-col justify-center w-full h-[65vh] md:h-[80vh] md:justify-center items-center gap-6 py-6 px-6">

        <div className="flex flex-col justify-center w-[90vw] md:w-[55vw] gap-4 h-fit md:h-[54vh] md:min-h-fit border-2 border-zinc-700 py-6 md:px-12 transition-all duration-500 hover:w-[60vw] hover:shadow-2xl hover:rounded">

          <span className="flex w-fit gap-6 items-center text-zinc-50 font-semibold text-5xl border-b-2 border-zinc-700 pb-3 px-6 md:pr-3 md:pl-0 transition-all duration-500 hover:text-6xl">Sobre Mim <Rabbit className="hidden md:flex size-10"/></span>
          <span className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 px-2 text-sm md:text-base text-zinc-300 border-y-2 border-zinc-700">
            <span className="flex md:w-[29vw] text-justify rounded py-3 px-2 md:px-6 md:py-4 bg-zinc-800">
              Sou desenvolvedor front-end e trabalho transformando ideias em interfaces modernas, funcionais e responsivas. Gosto de unir design e código para criar experiências visuais que fazem sentido tanto para quem usa quanto para quem idealiza. Acredito que um bom site vai além da aparência, ele precisa ser leve, intuitivo e acessível em qualquer dispositivo.
            </span>
            <Image
              className=" saturate-0 flex border-4 md:ml-auto border-zinc-100 transition-all duration-500 hover:saturate-[80%]"
              src="/caio01.jpg"
              width={200} height={200}
              alt="caio"
            />
          </span>

        </div>

      </section>
    )
}