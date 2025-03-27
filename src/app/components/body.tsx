"use client";
import Image from "next/image";
import * as React from "react";
export default function Body() {
  return (
    <div className="relative w-full h-[90vh] mt-12 flex justify-center items-center overflow-hidden">
      {/* Imagem de fundo versão desktop */}
      <div className="hidden lg:block">
        <Image
          src="/imagens/bg-barbudo.jpg"
          alt="Descrição da imagem"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute top-0 left-0"
        />
      </div>

      {/* Imagem de fundo versão mobile */}
      <div className="block lg:hidden absolute top-0 left-0 flex justify-center items-center w-full h-full">
        <Image
          src="/imagens/barber.png"
          alt="Descrição da imagem"
          width={300}
          height={300}
          objectFit="contain"
          objectPosition="center"
          className="mx-auto"
        />
      </div>

      {/* Texto acima da imagem */}
      <div className="absolute w-[40%]  z-10 text-4xl font-bold top-10 left-4">
        <div className="flex flex-col justify-center items-center p-4">
          <Image src="/imagens/logo2.png" alt="logo" width={300} height={300} />
          <div className="text-white text-center mt-20">
            <span className="uppercase text-4xl  shadow-2">Carakas barber</span>
            <p>Seja bem-vindo, Somos referência em atendimento e qualidade em carapicuiba! <br/>
            Aqui você poderá conhecer nosso trabalho e ficar mais próximos de virar nosso cliente fiel</p>
            
            </div>
        </div>
      </div>
    </div>
  );
}
