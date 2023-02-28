import React from "react";

function About() {
  return (
    <section id="about-section">
      <div className="max-w-6xl mx-auto h-40 dark:bg-gray-800 antialiased">
        <h1 className="text-7xl md:text-9xl font-bold py-10 text-center text-header md:text-left">
          About Me
        </h1>
      </div>
      <div className="rounded-md shadow-md bg-componentBackground p-4 md:p-10 lg:p-20 max-w-7xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <p className="text-grid text-l">
              Hi, I'm Cynthia, a Software Engineer and recent graduate of
              Fullstack Academy's{" "}
              <a
                className="underline"
                href="https://www.fullstackacademy.com/programs/future-code"
              >
                Future Code Fellowship.
              </a>{" "}
              Before pivoting to tech, I worked in the non-profit space for over
              six years. Over that period, I worked in volunteer management
              developing and implementing volunteer programs serving youth
              across the country, as well as recruiting and training volunteers
              to lead those programs. Most recently, I worked in the social
              services space as site supervisor for an after-school and day camp
              program working with youth experiencing homelessness. I am excited
              to explore opportunities that empower youth and positively impact
              the lives of New Yorkers.
            </p>
            <br />
            <p className="text-grid text-l">
              When I'm not coding, you can probably find me listening to music
              (check out my current favorite playlist), replaying my favorite pop
              culture podcast episodes, or catching up on reality tv.
            </p>
          </div>
          <div className="w-full mx-auto gap-4 bg-component">
            <iframe
              title="spotify playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/2II9AuwrR3B3WDHFenBjlo?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}

export default About;
