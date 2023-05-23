import React from "react";
import { ebazon, FitnessTracker, StrangersThings } from "../assets";

const Projects = () => {
  const linkClick = (address) => {
    console.log(address);
  };

  return (
    <div>
      <div className="card w-96 bg-gray-300 shadow-xl p-0">
        <figure>
          <img src={ebazon} alt="ebazon e-commerce site home page" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Ebazon</h2>
          <p className="text-left">
            E-commerce site that allows users to post or browse products for
            sale. Utilizes the Stripe API for transactions.
          </p>
          <div className="card-actions justify-end">
            <a href="https://ebazon.netlify.app/" target="_blank">
              <button className="btn btn-primary">Site -&gt;</button>
            </a>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-gray-300 shadow-xl p-0">
        <figure>
          <img src={FitnessTracker} alt="Fitness tracker site home page" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Fitness Tracker</h2>
          <p className="text-left">
            Site that allows you to create and post exercise routines and view
            or follow other users' routines.
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://fitness-tracker-andrew-miguel.netlify.app/"
              target="_blank"
            >
              <button className="btn btn-primary">Site -&gt;</button>
            </a>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-gray-300 shadow-xl p-0">
        <figure>
          <img src={StrangersThings} alt="craigslist-style site home page" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Stranger's Things</h2>
          <p className="text-left">
            Craigslist-style site that allows users to post and browse listings
            for products.
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://strangers-things-andrew-emilio.netlify.app/"
              target="_blank"
            >
              <button className="btn btn-primary">Site -&gt;</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
