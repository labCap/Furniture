import React from "react";
import { Button } from "../Button/Button";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";
import "./Intro.scss";

export const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <div className="intro__text-box">
            <img src="img/decor/decor-grid.png" alt="" className="decor-grid" />
            <Subtitle c={"intro__subtitle"} text={"DECORATE HOME"} />
            <Title
              c={"intro__title"}
              text={"Feel your home with a modern design space"}
            />
            <div className="intro__btn-box">
              <Button href={"#"} c={"intro__btn"} text={"Discover"} />
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
