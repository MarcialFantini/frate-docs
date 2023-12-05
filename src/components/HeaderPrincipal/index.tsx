import { ImagesHeader } from "../ImagesHeader";

export function HeaderPrincipal() {
  return (
    <header className=" min-h-[90vh] w-full relative overflow-hidden flex flex-col items-center justify-center">
      <ImagesHeader></ImagesHeader>

      <div className=" w-[80%]">
        <h2 className=" text-[5rem]">Frate</h2>
        <p className=" text-[1.2rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          culpa fuga! Obcaecati nihil, ipsa odit omnis beatae blanditiis harum
          totam praesentium sequi molestias quia sunt reiciendis nam debitis
          ipsum dignissimos!
        </p>
      </div>
    </header>
  );
}
