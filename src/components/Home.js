function Home() {
  return (
    <div className="grid grid-rows-1 grid-cols-2 justify-items-center flex items-center">
      <div className="px-2 py-2 mt-6">
        <img alt="Cynthia" src="cat2.jpg" className="w-150 h-96" />
      </div>
      <div className="container py-2 px-2 mt-6">
        <h1 className="text-center underline font-bold font-shine text-3xl pb-2">
          ABOUT ME
        </h1>
        <p className="indent-8 font-shine">
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
        <p className="indent-8 font-shine">
          As a native New Yorker and recent graduate, I am excited to explore
          opportunities that allow me to create and support web applications
          that empower youth and directly impact the lives of NYC residents.
        </p>
      </div>
    </div>
  );
}

export default Home;
