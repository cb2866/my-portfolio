function Home() {
  return (
    <div className="grid grid-rows-1 grid-cols-2 justify-items-center flex items-center">
      <div className="px-2 py-2 mt-6">
        <img alt="Cynthia" src="cat2.jpg" className="w-150 h-96" />
      </div>
      <div className="container py-2 px-2 mt-6">
        <h1 className="underline font-bold font-shine text-3xl pb-2">
          ABOUT ME
        </h1>
        <p className="font-shine">
          Hi, I'm Cynthia, a Full-Stack Software Engineer and recent graduate of
          Fullstack Academy's Future Code Fellowship program. Before pivoting to
          tech, I worked in the non-profit space for over six years. Over that
          period, I worked in volunteer management developing and implementing
          volunteer programs serving youth across the country, as well as
          recruiting and training volunteers to lead those programs. Most
          recently, I worked in the social services space as site supervisor for
          an after-school and day camp program working with youth experiencing
          homelessness.
        </p>
        <br />
        <p className="font-shine">
          As a native New Yorker and recent graduate, I am excited to explore
          opportunities that empower youth and directly impact the lives of NYC
          residents.
        </p>
        <br />

        <h1 className="underline font-bold font-shine text-3xl pb-2">SKILLS</h1>
        <div className="grid grid-flow-col auto-cols-max gap-2">
          <img
            alt="Javascript"
            style={{ width: "35px", height: "35px", backgroundColor: "white" }}
            src={"https://cdn.worldvectorlogo.com/logos/javascript-1.svg"}
          />
          <img
            alt="HTML"
            style={{ width: "35px", height: "35px", backgroundColor: "white" }}
            src={"https://cdn-icons-png.flaticon.com/512/732/732212.png"}
          />
          <img
            alt="CSS"
            style={{ width: "35px", height: "35px", backgroundColor: "white" }}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
            }
          />
          <img
            alt="React"
            style={{ width: "35px", height: "35px", backgroundColor: "white" }}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            }
          />
          <img
            alt="React"
            style={{ width: "35px", height: "35px", backgroundColor: "white" }}
            src={
              "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
