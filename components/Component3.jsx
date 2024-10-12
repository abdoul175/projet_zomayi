import React from "react";

const Component3 = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 w-full lg:mb-20">
              <span className="mb-8 block text-center text-3xl font-bold text-primary">
                ¿Cómo formar parte de nosotros?
              </span>
              <div class="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-lg">
                <ul class="list-inside list-disc space-y-2">
                  <li class="bg-gray-200 hover:bg-gray-300 rounded p-2 text-lg font-semibold transition duration-200">
                    2 copias ( carnet de identidad/ estudiante/ pasaporte)
                  </li>
                  <li class="bg-gray-200 hover:bg-gray-300 rounded p-2 text-lg font-semibold transition duration-200">
                    2 copias fotos tamaño pasaporte
                  </li>
                  <li class="bg-gray-200 hover:bg-gray-300 rounded p-2 text-lg font-semibold transition duration-200">
                    1000 FCFA para la tarjeta de miembro
                  </li>
                  <li class="bg-gray-200 hover:bg-gray-300 rounded p-2 text-lg font-semibold transition duration-200">
                    Respecta las normas internas dando un{" "}
                    <span className="cursor-pointer font-extrabold text-dark">
                      click aquí
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component3;
