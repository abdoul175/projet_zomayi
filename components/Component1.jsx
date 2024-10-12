import React from "react";

const Component1 = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 w-full text-center lg:mb-20">
              <span className="mb-8 block text-3xl font-bold text-primary">
                Sobre nosotros
              </span>
              <p className="mb-8 text-justify text-lg">
                Club Cervantes Togo es una asociación sin ánimo de lucro basada
                en la Universidad de Lomé, regida por la ley n.º 40-484 de 1 de
                julio de 1901 registrada con el número 551 de 08/06/2022 en el
                Ministerio de Administración Territorial, Descentralización y
                Desarrollo Territorial (MATDDT) Lomé-Togo.
              </p>
              <p className="text text-justify text-lg">
                La asociación tiene como metas promover el aprendizaje del
                castellano, crear un marco de integración y de promoción
                cultural, promover las lenguas y culturas afro- iberoamericanas,
                ayudar a los miembros a mejorar su nivel de expresión y conducir
                acciones y proyectos de desarrollo sostenible. Siendo la única
                institución cultural promoviendo el español en Togo, el Club
                Cervantes Togo interviene sobre todo el territorio togolés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component1;
