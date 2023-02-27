import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "./RainbowHighlight";

function Hero() {
  const colors = ["#90A27F", "#4e7a51"];

  return (
    <section>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg ">
              <RoughNotationGroup show={true}>
                <RainbowHighlight color={colors[0]}>
                  <h1 className="text-4xl md:text-7xl font-bold text-navbarText dark:text-gray-200 my-2">
                    Cynthia Brito-Mena
                  </h1>
                </RainbowHighlight>

                <RainbowHighlight color={colors[1]}>
                  <h1 className="text-4xl md:text-7xl font-bold text-navbarText dark:text-gray-200 my-2">
                    Software Engineer
                  </h1>
                </RainbowHighlight>
              </RoughNotationGroup>
            </div>
          </div>

          <div className="flex items-center justify-center w-full  mt-6 lg:mt-0 lg:w-1/2">
            <div className="relative overflow-hidden border-solid py-2 px-2">
              <img
                className="object-scale-down h-84 rounded-full"
                src="/3.png"
                alt="Cynthia.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
