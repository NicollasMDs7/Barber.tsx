import Header from "../components/header";
export default function Page() {
  return (
    <div>
      <div className="w-full justify-center flex">
        <Header />
        <div className="flex flex-col justify-center items-center mt-24 w-[80%] ">
        <p className="text-center mt-10 text-white text-2xl">
          <span className="uppercase text-4xl font-semibold">Nossa casa</span>{" "}
          <br />
          Estamos localizados a mais de 20 anos no mesmo local, <br />{" "}
          procurando melhorar cada vez mais para melhor atender nossos clientes!
        </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5897248064325!2d-46.84955039999999!3d-23.5472544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf004c9f947a69%3A0x6e25a953b10b2dbd!2sR.%20Maria%20Lopes%20de%20Souza%2C%20119%20-%20Jardim%20Maria%20Beatriz%2C%20Carapicu%C3%ADba%20-%20SP%2C%2006361-470!5e0!3m2!1spt-BR!2sbr!4v1743102115832!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-10"
          ></iframe>
          <div>
       
      </div>
      <div className="w-[20%] flex justify-center items-center "> <a
              href=""
              className="text-white-500 transition-colors text-white mt-10 duration-300 hover:text-slate-400"
            >
              AGENDE AGORA
            </a></div>
        </div>
      </div>
      
    </div>
  );
}
