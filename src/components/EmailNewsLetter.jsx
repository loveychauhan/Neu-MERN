import React from "react";

export default function EmailNewsLetter() {
  return (
    <section className="flex  flex-col  max-w-[480px] mx-auto ">
      <h3 className="text-3xl font-semibold my-8">
        Subscribe now & get 20% off*
      </h3>
      <form className=" flex flex-col sm:flex-row items-center justify-stretch ">
        <input
          className="outline-0 border-[1px] self-stretch flex-1 p-4"
          type="text"
          placeholder="email@gmal.com"
        />
        <button className="px-8 border-[1px] border-black my-4 self-stretch sm:my-0  py-4 bg-black text-white">
          Subscribe
        </button>
      </form>
    </section>
  );
}
