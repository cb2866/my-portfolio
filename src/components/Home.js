import React from "react";
import Typewriter from "typewriter-effect";

function Home() {
  // let typewriter = document.getElementById("typewriter");
  // new Typewriter(typewriter, {
  //   strings: ["Hello", "World"],
  //   autoStart: true,
  // });

  return (
    <section id="home">
      <div className="container px-6 py-0 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg ">
              <div id="termynal" data-termynal>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hi, I'm Cynthia!")
                      .pauseFor(100)
                      .typeString(
                        " I'm a <strong> Mexican-American</italics> </strong>software engineer from <strong>New York</span>.</strong>"
                      )
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full  mt-6 lg:mt-0 lg:w-1/2">
            <div className="relative overflow-hidden py-2 px-2">
              <img className="lg:max-w-1x" src="/1.png" alt="Cynthia.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
