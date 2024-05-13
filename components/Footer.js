export default function Footer() {
  return (
    <footer className="pt-16 pb-12 bg-gray-900 md:pt-20">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="flex justify-center text-gray-400">
          <div className="grid grid-cols-2 gap-8 mb-20 md:gap-28 md:grid-cols-4">
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">BGF | Solutions</li>
              <li>
                <a href="#aboutus">Nosotros</a>
              </li>
              <li>
                <a href="#clients">Cientes</a>
              </li>
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <a href="#contacts">Contactos</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">Productos</li>
              <li>
                <a href="#features">Generales</a>
              </li>
              <li>
                <a href="#">Aisladores para oleoductos y gasoductos</a>
              </li>
              <li>
                <a href="#">Línea Refractaria</a>
              </li>
              <li>
                <a href="#">Otros</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">Contactos</li>
              <li>
                <a href="#">Contáctenos</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Teléfono</a>
              </li>
              <li>
                <a href="#">Dirección</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">Recursos</li>
              <li>
                <a href="#">Póliticas de calidad</a>
              </li>
              <li>
                <a href="#">Póliticas SIAHO</a>
              </li>
              <li>
                <a href="#">Descargue Brochure</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="-mt-8 mb-12 text-center text-gray-300">
          Todos los derechos reservados &copy; 2024 |
          <a href="https://bgf-solutions.com/?utm_source=website" className="ml-2 underline">
            bgf-solutions.com
          </a>
        </p>
      </div>
    </footer>
  );
}
