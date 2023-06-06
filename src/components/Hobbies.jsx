import React from "react";
import { Running, Camping, flappyBird } from "../assets";

const Hobbies = () => {
  return (
    <div id="Hobbies" className="bg-blue-100 pt-8">
      <h1 className="font-bold text-5xl pb-6">Hobbies</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={flappyBird} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Game Development</h1>
            <p className="py-6">
              In my spare time I like to create video games to hone my design
              and C# skills. I've made several game copies such as Snake and
              Flappy Bird alongside creations of my own.
            </p>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Running} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Running</h1>
            <p className="py-6">
              I do distance running to stay in shape and keep up with long-term
              goals. I've completed a number of races including several 10k's
              and one half marathon.
            </p>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Camping} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Camping</h1>
            <p className="py-6">
              Camping has been a part of my life since I was a child. Spending
              time outdoors is a great hobby that balances out the time I spend
              in front of a desk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
