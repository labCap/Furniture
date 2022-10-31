import React from "react";
import { Button } from "../../components/Button/Button";
import { Description } from "../../components/Description/Description";
import { Title } from "../../components/Title/Title";
import { TitleBorder } from "../../components/TitleBorder/TitleBorder";

import "./About.scss";

export const About = () => {
  return (
    <section className="section about">
      <div className="container">
        <div className="about__inner">
          <div className="about__text-box">
            <Title c={"about__title"} text={"About"} />
            <TitleBorder c={"about__title-border"} text={"Furniture"} />
            <Description
              c={"about__description"}
              text={
                "People have been using natural objects, such as tree stumps, rocks and moss, as furniture since the beginning of human civilisation. "
              }
            />
            <Button href={"#"} c={"about__btn"} text={"Read more"} />
          </div>
          <div className="about__img-box">
            <img src="img/About/1.png" alt="intro-img" className="about__img" />
            <img src="img/decor/decor-dots.png" alt="" className="decor-dots" />
            <div className="decor-rectangle1"></div>
            <div className="decor-rectangle2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
