import React from "react";
import { Button } from "../../components/Button/Button";
import { Title } from "../../components/Title/Title";
import { TitleBorder } from "../../components/TitleBorder/TitleBorder";
import "./TryNow.scss";

export const TryNow = () => {
  return (
    <section className="try-now">
      <div className="container">
        <div className="try-now__inner">
          <div className="try-now__text-box">
            <TitleBorder c={"try-now__title-border"} text={"Let's"} />
            <Title c={"try-now__title"} text={"Try Now"} />
            <Button href={"#"} c={"try-now__btn"} text={"Explore"} />
          </div>
          <div className="try-now__img-box">
            <img
              src="img/Try-now/1.png"
              alt="try-now-img"
              className="try-now__img"
            />
            <img src="img/decor/decor-dots.png" alt="" className="decor-dots" />
          </div>
        </div>
      </div>
    </section>
  );
};
