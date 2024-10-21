import Image from "next/image";

const Hero = () => {
  return (
    <>
      <main className="max-w-screen flex h-screen items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <h1 className="text-shadow text-4xl font-bold text-dark">
          Bienvenido a Togo
        </h1>
      </main>
    </>
  );
};

export default Hero;
