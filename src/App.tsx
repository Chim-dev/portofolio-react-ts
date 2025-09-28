import { useEffect, useState } from "react";
import "./index.css";
import { listTools,listProyek } from "./data";

function App() {
  const images: string[] = [
    "/assets/download.png",
    "/assets/carte1 (1).png",
    "/assets/carte1 (2).png",
    "/assets/carte aset (1).png",
    "/assets/carte aset (2).png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
        <div className="hero px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-10">
            <div>
              <h1 className="text-5xl/tight font-bold mb-6 bg-gradient-to-r from-[#36a5f0] to-[#fab700] text-transparent bg-clip-text">
                Hi, I'm CarteChia
              </h1>
              <p className="text-xl/relaxed mb-6 opacity-80 drop-shadow-md">
                I'm an aspiring Full-Stack Software Engineer with a passion for
                building scalable and user-friendly applications. This website
                showcases my project documentation, from early experiments to more
                polished works, reflecting my growth and learning journey.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="bg-blue-500/40 backdrop-blur-md rounded-lg p-3 hover:bg-blue-700/50 transition-all duration-300 text-white font-medium border border-blue-300/30"
                >
                  Download CV <i className="ri-download-line ri-lg"></i>
                </a>
                <a
                  href="#"
                  className="bg-yellow-300/40 backdrop-blur-md rounded-lg p-3 hover:bg-yellow-500/50 transition-all duration-300 text-white font-medium border border-yellow-300/30"
                >
                  View Projects <i className="ri-code-view ri-lg"></i>
                </a>
              </div>
            </div>

            <div className="flex justify-center ml-20">
              <div className="relative w-[300px] h-[300px] overflow-hidden rounded-full border-2 border-white/30 shadow-2xl backdrop-blur-sm">
                <div className="absolute z-0 w-[90%] h-[90%] bg-gradient-to-tr from-[#868585] to-[#2E2E2E] blur-2xl rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Image ${i}`}
                    className={`absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-700 ease-in-out ${
                      i === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="About mt-32 py-10 px-4">
          <div className="xl:w-2/3 lg:w-full mx-auto p-7 bg-zinc-800/80 backdrop-blur-md rounded-lg border border-zinc-600/50 shadow-xl">
            <img
              src="/assets/logo.png"
              alt="myCutiePie"
              className="w-12 rounded-md mb-10 sm:hidden"
            />
            <p className="text-xl/loose mb-1 text-white opacity-90">
              Hi, My Name is CarteChia. I'm an Undergraduate Institute Technology
              of Kalimantan's student, I'm a Full Stack Web Developer and Machine
              Learning Enthusiast... You will get to know me in the near future as
              I will update this Portofolio as often as possible ;D
            </p>
            <div className="flex items-center justify-between">
              <img
                src="/assets/logo.png"
                alt="myCartePie"
                className="w-[100px] rounded-md sm:block hidden"
                loading="lazy"
              />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1 text-white">
                    5 <span className="text-amber-400">+</span>
                  </h1>
                  <p className="text-white/80">Finished Projects</p>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="text-4xl mb-1 text-white">
                    1 <span className="text-amber-400">+</span>
                  </h1>
                  <p className="text-white/80">Year of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4 text-white drop-shadow-lg">Tech Stacks</h1>
            <p className="xl:w-2/5 lg:2/4 md:2/3 sm:3/4 w-full text-base/loose text-white/70 drop-shadow-md">
              Tech Stacks I usually use to build projects
            </p>

            {/* Grid container */}
            <div className="tools-box mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {listTools.map((tool) => (
                <div 
                  className="flex items-center gap-4 p-4 border border-zinc-600/50 rounded-md hover:bg-zinc-800/60 group backdrop-blur-md bg-zinc-900/40 transition-all duration-300" 
                  key={tool.id}
                >
                  <img
                    src={tool.gambar}
                    alt="Tools img"
                    className="w-14 h-14 object-contain bg-zinc-800/80 p-2 rounded-md group-hover:bg-zinc-900/80"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{tool.nama}</h4>
                    <p className="text-sm text-white/60">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Project */}
        <div className="project mt-32 py-10">
          <h1 className="text-center text-4xl font-bold mb-2">Projects</h1>
          <p className="text-base/loose text-center opacity-50">Projects List History</p>
          <div className="projects-box mt-14 grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1 ">
              {listProyek.map((project) => (
                <div key={project.id} className="p-4 bg-zinc-800/50 backdrop-opacity-35 rounded-xl border border-amber-200">
                  <img src={project.gambar} alt="project image" loading="lazy"/>
                  <div>
                    <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                    <p className="text-base/loose mb-4">{project.desk}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <p key={index} className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold">{tool}</p>
                      ))}
                    </div>
                    <div className="mt-5 text-center">
                      <a href="#" className="rounded-lg p-3 block bg-[#00000023] border border-amber-400 text-amber-400 font-semibold hover:bg-amber-400 hover:text-black transition">View Projects</a>
                    </div>
                  </div>
                </div>
              ))}
          </div>   
        </div>
    </>
  );
}

export default App;
