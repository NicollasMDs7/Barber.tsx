import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card";
  import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
  import Header from "../components/header";
  
  export default function Contato() {
    return (
      <div className="bg-gray-900 min-h-screen text-white overflow-hidden">
        <Header />
  
        <h1 className="text-center text-5xl font-bold mt-12 text-blue-500">
          Fale Conosco
        </h1>
  
        {/* Card Principal Maior que envolve todos os outros cards */}
        <Card className="bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-4xl mx-auto mt-12">
          <CardContent>
            {/* Cards de Contato (Telefone e E-mail) lado a lado */}
            <div className="flex gap-8 justify-center mb-12">
              {/* Card de Telefone */}
              <Card className="bg-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 w-80">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <FaPhoneAlt size={30} className="mr-4 text-blue-500" />
                    <div>
                      <CardTitle className="text-lg font-semibold">Telefone</CardTitle>
                      <CardDescription className="text-sm">(11) 1234-5678</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
  
              {/* Card de E-mail */}
              <Card className="bg-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 w-80">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <FaEnvelope size={30} className="mr-4 text-blue-500" />
                    <div>
                      <CardTitle className="text-lg font-semibold">E-mail</CardTitle>
                      <CardDescription className="text-sm">contato@exemplo.com</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
  
            {/* Card de Formulário de Contato - Alinhado com os outros cards */}
            <Card className="bg-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 w-full">
              <CardContent>
                <h2 className="text-2xl font-semibold text-blue-500 mb-6">
                  Envie Sua Mensagem
                </h2>
  
                <form className="space-y-6">
                  <div className="mb-6">
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-300">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome"
                    />
                  </div>
  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu e-mail"
                    />
                  </div>
  
                  <div className="mb-6">
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Sua mensagem"
                    ></textarea>
                  </div>
  
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Enviar
                  </button>
                </form>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    );
  }
  