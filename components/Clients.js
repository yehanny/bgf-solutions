import React from "react";
import Link from "next/link";

const Clients = () => {
  const ourClients = [
    {
      id: 1,
      logo: "https://tecnoquim.com.ve/img/media/client-baker.png",
      alt: "Baker Hughes Logo",
    },
    {
      id: 2,
      logo: "https://tecnoquim.com.ve/img/media/client-cerveceria-regional.jpg",
      alt: "Cerveceria Regional Logo",
    },
    {
      id: 3,
      logo: "https://tecnoquim.com.ve/img/media/client-chevron.jpg",
      alt: "Chevron Logo",
    },
    {
      id: 4,
      logo: "https://tecnoquim.com.ve/img/media/client-eni.jpg",
      alt: "Grupo ENI Logo",
    },
    {
      id: 5,
      logo: "https://tecnoquim.com.ve/img/media/client-halliburton.png",
      alt: "Halliburton Logo",
    },
    {
      id: 6,
      logo: "https://tecnoquim.com.ve/img/media/client-mi_swaco.png",
      alt: "Mi Swaco Logo",
    },
  ];
  return (
    <section className="bg-blue-100">
      <div className="space-y-6 text-center py-32">
        <h1 className="text-lg font-semibold tracking-wide text-center text-gray-100 text-opacity-75 uppercase md:mx-10 md:text-gray-600">Algunos de nuestros clientes</h1>
        <div className="w-3/5 p-6 mx-auto bg-white rounded-2xl border border-gray-300 md:bg-opacity-100 md:p-10">
          <div className="flex flex-wrap items-center justify-center flex-shrink -mt-6 -ml-6 space-x-6 space-y-6">
            {ourClients.map((client) => (
              <img key={client.id} className="h-10 md:h-28" src={client.logo} alt={client.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
