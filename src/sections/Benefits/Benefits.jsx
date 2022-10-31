import React from "react";
import { Title } from "../../components/Title/Title";
import { TitleBorder } from "../../components/TitleBorder/TitleBorder";
import "./Benefits.scss";

const benefitsCardList = [
  {
    num: "1",
    title: "Full services",
    desc: "Provide the best service and very fast response.",
  },
  {
    num: "2",
    title: "Long warranty.",
    desc: "With a 5-year warranty provided, providing satisfying service.",
  },
  {
    num: "3",
    title: "Modern design",
    desc: "The room looks beautiful with a blend of contemporary and attractive design.",
  },
];

const BenefitsCard = ({ num, title, desc }) => {
  return (
    <div className={`benefits-card benefits-card${num}`}>
      <div className="benefits-card__num">{num}</div>
      <h3 className="benefits-card__title">{title}</h3>
      <div className="benefits-card__description">{desc}</div>
    </div>
  );
};

export const Benefits = () => {
  return (
    <section className="section benefits">
      <div className="container">
        <div className="benefits__header">
          <Title c={"benefits__title"} text={"More value from this"} />
          <TitleBorder c={"benefits__title-border"} text={"Furniture"} />
        </div>
        <div className="benefits__content">
          <img
            src="img/Benefits/1.png"
            alt="benefits-img"
            className="benefits__img"
          />
          <img src="img/decor/decor-dots.png" alt="" className="decor-dots" />
          {benefitsCardList.map((card) => (
            <BenefitsCard
              key={card.num}
              num={card.num}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
