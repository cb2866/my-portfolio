function Home() {
  return (
    <>
      <div
        className="container mx-auto px-2 py-2 mt-6"
        style={{ backgroundColor: "white" }}
      >
        <img alt="Cynthia"></img>
      </div>
      <div
        className="container mx-auto px-2 py-2 mt-6"
        style={{ backgroundColor: "white" }}
      >
        <h1 className="text-white text-center underline font-bold font-signika text-3xl pb-2">
          ABOUT ME
        </h1>
        <p className="indent-8 font-signika">
          Hi, I'm Cynthia, a Full-Stack Software Engineer and recent graduate of
          Fullstack Academy's Future Code Fellowship program. Before pivoting to
          tech, I worked in the non-profit space for over six years. Over that
          period, I worked in volunteer management developing and implementing
          volunteer programs serving youth across the country, as well as
          recruiting and training volunteers to lead those programs. Most
          recently, I worked in the education / social services space as site
          supervisor for an after-school and day camp program working with youth
          experiencing homelessness.
        </p>
        <br />
        <p className="indent-8 font-signika">
          As a native New Yorker and recent graduate, I am excited to explore
          opportunities that allow me to create and support web applications
          that empower youth and directly impact the lives of NYC residents. I
          am currently looking for my first role as a Software Engineer and
          would like to apply my skills in support of a mission-driven
          organization.
        </p>
      </div>
    </>
  );
}

export default Home;
