import React from "react";
import "./Intro.scss";

export const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <div className="intro__text-box">
            <img src="img/decor/decor-grid.png" alt="" className="decor-grid" />
            <h3 className="intro__subtitle section__subtitle">DECORATE HOME</h3>
            <h2 className="intro__title section__title">
              Feel your home
              <br />
              with a modern design
              <br />
              space
            </h2>
            <div className="intro__btn-box">
              <a href="#" className="intro__btn btn">
                Discover
              </a>
              <div className="intro__btn-video">
                <span>
                  <img src="img/icon/triangle.svg" alt="" />
                </span>
                Watch video
              </div>
            </div>
          </div>
          <div className="intro__img-box">
            <img src="img/Intro/1.png" alt="intro-img" />
            <img src="img/decor/decor-dots.png" alt="" className="decor-dots" />
          </div>
        </div>
      </div>
    </section>
  );
};
