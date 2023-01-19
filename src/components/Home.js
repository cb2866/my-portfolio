import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "./RainbowHighlight";

function Home() {
  const colors = ["#893168", "#4A1942", "#2E1C2B", "#3B82F6"];

  return (
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg text-center">
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[0]}>
                <h1 className="text-4xl md:text-7xl font-bold text-navbarText dark:text-gray-200 my-2">
                  Cynthia Brito-Mena.
                </h1>
              </RainbowHighlight>

              <RainbowHighlight color={colors[1]}>
                <h1 className="text-4xl md:text-7xl font-bold text-navbarText dark:text-gray-200 my-2">
                  Podcast Enthusiast.
                </h1>
              </RainbowHighlight>

              <RainbowHighlight color={colors[2]}>
                <h1 className="text-4xl md:text-7xl font-bold text-navbarText dark:text-gray-200 my-2">
                  Software Engineer.
                </h1>
              </RainbowHighlight>
            </RoughNotationGroup>
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            class="w-full h-full lg:max-w-3xl"
            src="/cynthia.png"
            alt="Cynthia.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
