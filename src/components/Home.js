import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "./RainbowHighlight";

function Home() {
  const colors = ["#893168", "#4A1942", "#2E1C2B", "#3B82F6"];

  return (
    <div className="flex flex-row justify-center items-center overflow-hidden py-10">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-10">
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
      <div className="w-full mx-auto lg:p-10">
        <img alt="Cynthia" src="/cynthia.png" />
      </div>
    </div>
  );
}

export default Home;
