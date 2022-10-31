import React from "react";
import "./Footer.scss";

const footerText = [
  {
    title: "Get's your discount",
    links: [{ text: "Check now !", href: "#" }],
  },
  {
    title: "Our services",
    links: [
      { text: "Collection", href: "#" },
      { text: "How its work", href: "#" },
      { text: "Estimats", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "Terms of use", href: "#" },
      { text: "Privacy policy", href: "#" },
      { text: "Careers", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        text: "Furniutr2@furniture.com",
        href: "mailto:Furniutr2@furniture.com",
      },
      { text: "(888) 315-500", href: "tel:+(888) 315-500" },
      { text: "St. VIllage, New York", href: "#" },
    ],
  },
];

const FooterCol = ({ col, title }) => {
  return (
    <div className="footer__col">
      <div className="footer__title">{title}</div>
      <ul className="footer__list">
        {col.links.map((data) => (
          <FooterLink key={data.text} links={data} />
        ))}
      </ul>
    </div>
  );
};
const FooterLink = ({ links }) => {
  return (
    <li className="footer__list-item">
      <a href={links.href} className="footer__list-link">
        {links.text}
      </a>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {footerText.map((data) => (
            <FooterCol key={data.title} col={data} title={data.title} />
          ))}
        </div>
      </div>
    </footer>
  );
};
