import React from "react";
import Slider from "react-slick";
import { Title } from "../../components/Title/Title";
import { TitleBorder } from "../../components/TitleBorder/TitleBorder";
import "slick-carousel/slick/slick.css";
import "./Product.scss";

const productList = [
  {
    href: "#",
    src: "img/Product/1.png",
    title: "Modern lamp study",
    price: "$258",
  },
  {
    href: "#",
    src: "img/Product/2.png",
    title: "Modern lamp study",
    price: "$135",
  },
  {
    href: "#",
    src: "img/Product/3.png",
    title: "Classic lamp",
    price: "$425",
  },
  {
    href: "#",
    src: "img/Product/4.png",
    title: "Clock cute",
    price: "$331",
  },
  {
    href: "#",
    src: "img/Product/4.png",
    title: "Clock cute",
    price: "$331",
  },
];

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow-prev" onClick={onClick}>
      <img src="img/icon/arrow.svg" alt="arrow-prev" />
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow-next" onClick={onClick}>
      <img src="img/icon/arrow.svg" alt="arrow-next" />
    </div>
  );
};

const ProductCard = ({ href, src, title, price }) => {
  return (
    <div className="product-card">
      <a href={href} className="product-card__img">
        <img src={src} alt={title} />
      </a>
      <a href={href} className="product-card__title">
        {title}
      </a>
      <div className="product-card__prise">{price}</div>
    </div>
  );
};

export const Product = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section product">
      <div className="container">
        <div className="product__header">
          <div className="product__header-box">
            <Title c={"product__title"} text={"Our you have to buy"} />
            <TitleBorder c={"product__title-border"} text={"Product"} />
          </div>
        </div>
        <Slider {...settings}>
          {productList.map((card) => (
            <ProductCard
              key={card.src}
              href={card.href}
              src={card.src}
              title={card.title}
              price={card.price}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

// $(".product__cards").slick();
