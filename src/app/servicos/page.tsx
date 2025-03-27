"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

import Image from "next/image";
import Header from "../components/header";

export default function Servicos() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Função para gerar horários disponíveis a cada 30 minutos
  const generateAvailableTimes = () => {
    const times = [];
    let startTime = new Date();
    startTime.setHours(9, 0, 0, 0); // Começando às 09:00

    for (let i = 0; i < 10; i++) { // Gera 10 horários, com intervalo de 30 minutos
      const time = new Date(startTime);
      times.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      startTime.setMinutes(startTime.getMinutes() + 30);
    }
    return times;
  };

  const availableTimes = generateAvailableTimes();
  // Estados para controlar qual card está visível
  const [currentCard1, setCurrentCard1] = React.useState(0);
  const [currentCard2, setCurrentCard2] = React.useState(0);

  // Funções para ir para o próximo card
  const nextCard1 = () => {
    setCurrentCard1((prev) => (prev + 1) % 3); // A quantidade de cards é 3
  };
  const nextCard2 = () => {
    setCurrentCard2((prev) => (prev + 1) % 3); // A quantidade de cards é 3
  };

  // Funções para ir para o card anterior
  const prevCard1 = () => {
    setCurrentCard1((prev) => (prev - 1 + 3) % 3); // A quantidade de cards é 3
  };
  const prevCard2 = () => {
    setCurrentCard2((prev) => (prev - 1 + 3) % 3); // A quantidade de cards é 3
  };

  return (
    <div className="w-full ">
      <Header />

      <div className="w-full flex justify-center ">
        <Card className="w-[90%] h-[90vh] m-16 flex justify-center items-center bg-black text-white opacity-80 shadow-lg">
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full flex">
              {/* Card 1 */}
              <div className="w-[50%]  mt-24 flex justify-center items-center
              ">
                <div className="flex justify-center items-center p-4">
                  <Card className="relative w-[500px] bg-black text-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold uppercase text-center">
                        Basicos
                      </CardTitle>
                    </CardHeader>

                    {/* Condicional para exibir um card específico com base no estado currentCard1 */}
                    <div>
                      {currentCard1 === 0 && (
                        <CardContent className="flex flex-col items-center">
                          <Image
                            src="/imagens/image1.jpg" // Imagem para o primeiro card
                            alt="Imagem 1"
                            width={250}
                            height={150}
                            objectFit="contain"
                          />
                          <p className="mt-2 text-center">Cortes</p>
                        </CardContent>
                      )}

                      {currentCard1 === 1 && (
                        <CardContent className="flex flex-col items-center">
                          <Image
                            src="/imagens/image2.jpg" // Imagem para o segundo card
                            alt="Imagem 2"
                            width={250}
                            height={150}
                            className="p-6"
                            objectFit="contain"
                          />
                          <p className="mt-2 text-center">Barba</p>
                        </CardContent>
                      )}

                      {currentCard1 === 2 && (
                        <CardContent className="flex flex-col items-center">
                          <Image
                            src="/imagens/image3.jpg" // Imagem para o terceiro card
                            alt="Imagem 3"
                            width={250}
                            height={150}
                            objectFit="contain"
                          />
                          <p className="mt-2 text-center">
                            Trança
                          </p>
                        </CardContent>
                      )}
                    </div>

                    {/* Botões para navegação entre os cards do Card 1 */}
                    <div
                      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 cursor-pointer hover:bg-slate-500"
                      onClick={prevCard1}
                    >
                      {"<"}
                    </div>
                    <div
                      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 cursor-pointer hover:bg-slate-500"
                      onClick={nextCard1}
                    >
                      {">"}
                    </div>
                  </Card>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-[50%] mt-24 flex justify-center items-center ">
                <div className="flex justify-center items-center p-4">
                  <Card className="relative w-[500px] bg-black text-white  shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold uppercase text-center">
                        Premium
                      </CardTitle>
                    </CardHeader>

                    {/* Condicional para exibir um card específico com base no estado currentCard2 */}
                    <div>
                      {currentCard2 === 0 && (
                        <CardContent className="flex flex-col items-center">
                          <Image
                            src="/imagens/image4.jpg" // Imagem para o primeiro card
                            alt="Imagem 1"
                            width={290}
                            height={250}
                            objectFit="contain"
                            className="p-6"
                          />
                          <p className="mt-2 text-center">Limpeza de pele</p>
                        </CardContent>
                      )}

                      {currentCard2 === 1 && (
                        <CardContent className="flex flex-col items-center">
                          <Image
                            src="/imagens/image5.jpg" // Imagem para o segundo card
                            alt="Imagem 2"
                            width={340}
                            height={250}
                            className="p-6"
                            objectFit="contain"
                          />
                          <p className="mt-2 text-center">
                            Luzes
                          </p>
                        </CardContent>
                      )}

                      {currentCard2 === 2 && (
                        <CardContent className="flex flex-col items-center">
                          <Image
                            src="/imagens/image6.jpg" // Imagem para o terceiro card
                            alt="Imagem 6"
                            width={340}
                            height={250}
                            objectFit="contain"
                          />
                          <p className="mt-2 text-center"></p>Penteados
                        </CardContent>
                      )}
                    </div>

                    {/* Botões para navegação entre os cards do Card 2 */}
                    <div
                      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 cursor-pointer hover:bg-slate-500"
                      onClick={prevCard2}
                    >
                      {"<"}
                    </div>
                    <div
                      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 cursor-pointer hover:bg-slate-500"
                      onClick={nextCard2}
                    >
                      {">"}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-2 border-slate-500">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <a
              href="#"
              className="text-white-500 transition-colors duration-300 hover:text-slate-400"
            >
              AGENDE AGORA
            </a>
          </DialogTrigger>
          
          <DialogContent>
            <DialogTitle>Agende Seu Horário</DialogTitle>
            <DialogDescription>
              Selecione um horário disponível:
            </DialogDescription>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {availableTimes.map((time, index) => (
                <button
                  key={index}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  {time}
                </button>
              ))}
            </div>
            
            <DialogClose className="mt-6 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
              Fechar
            </DialogClose>
          </DialogContent>
        </Dialog>
      </CardFooter>
        </Card>
      </div>
    </div>
  );
}
