import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  const backImg = { backgroundImage: "url(./card2.jpg)" };
  return (
    <div
      style={backImg}
      className="h-[88.6vh] relative  bg-center bg-no-repeat bg-cover mt-12 md:mt-[4.5rem] before:content-[''] before:bg-gradient-to-br before:from-gray-900/100 before:absolute before:block before:h-full before:w-full"
    >
      <div className="absolute left-1/4  top-[15%]  w-1/2 z-40 text-white md:absolute md:left-[10%] md:top-[20%]  md:w-1/2 md:z-40 md:text-white">
        <h2 className="font-semibold text-center tracking-wider text-teal-400 lette text-4xl md:text-5xl italic">
          Sparks Bank App
        </h2>
        <div
          className="text-2xl capitalize mt-10 text-center
        "
        >
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("welcome to the sparks bank! experiance the fastest transaction service with us!")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
