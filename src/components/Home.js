import React from "react";
import TypeWriting from "typewriting";

// const termynal = new Termynal("#termynal");

function Home() {
  return (
    <section id="home">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg ">
              <div
                id="termynal"
                data-termynal
                data-ty-startdelay="600"
                data-ty-cursor="▋"
              >
                <span data-ty="input">npm install intro</span>
                <span data-ty>Successfully installed Cynthia</span>

                <span data-ty></span>
                <span data-ty="input" data-ty-prompt=">>>">
                  Hello World
                </span>
                <span data-ty="input" data-ty-prompt=">>>">
                  I'm Cynthia Brito-Mena
                </span>
                <span data-ty="input" data-ty-prompt=">>>">
                  Bronx Native, Proud Mexican-American, Software Engineer
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full  mt-6 lg:mt-0 lg:w-1/2">
            <div className="relative overflow-hidden py-2 px-2">
              <img
                className="w-full lg:max-w-1x"
                src="/1.png"
                alt="Cynthia.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
