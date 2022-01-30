import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            cupiditate id veritatis fugiat. Repellat ipsa quisquam neque nostrum
            suscipit ratione.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
