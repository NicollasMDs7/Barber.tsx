import { Scissors } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 flex justify-center w-full h-[50px] text-white shadow-md z-50">
      <nav className="flex flex-row items-center w-full">
        <div className="flex justify-start items-center gap-2 ml-4">
          <Scissors />
        </div>
        <ul className="flex justify-center gap-4 w-full p-1">
          <li className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 p-2 rounded">
            <a href="/">HOME</a>
          </li>
          <li className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 p-2 rounded">
            <a href="/contato">CONTATO</a>
          </li>
          <li className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 p-2 rounded">
            <a href="/servicos">SERVIÇOS</a>
          </li>
          <li className="transition-all duration-300 hover:scale-110 hover:text-yellow-500 p-2 rounded">
            <a href="/enderecos">ENDEREÇO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
