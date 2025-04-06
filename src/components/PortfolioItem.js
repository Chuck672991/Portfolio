import React, { useEffect } from "react";
import Close from "../images/cuteClose.png";
import { useState } from "react";
// import "./PortfolioItem.css";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [modal]);

  return (
    <div className="portfolio_item">
      <img src={img} alt="portfolio" className="portfolio_img" />
      <div className="portfolio_hover" onClick={toggleModal}>
        <h2 className="portfolio_title">{title}</h2>
      </div>

      {modal && (
  <div className="portfolio_modal">
    <div className="portfolio_modal-content animate_modal">
      <img
        src={Close}
        alt="close"
        className="modal_close"
        onClick={toggleModal}
      />
      <h3 className="modal_title">{title}</h3>
      <ul className="modal_list grid">
        {details.map(({ icon, title, desc }, index) => (
           title.toLowerCase().includes("link") ? (
            <div key={`link-${index}`} className="visit_link_wrapper">
              <a
                href={desc}
                target="_blank"
                rel="noopener noreferrer"
                className="visit_link"
              >
                Visit
              </a>
            </div>
          ) :  <li className="modal_item" key={index}>
          <span className="item_icon">{icon}</span>
          <div>
            <span className="item_title">{title}</span>
            <span className="item_details">{desc}</span>
          </div>
        </li>
         
        ))}
      </ul>

      {/* Conditional Visit Link */}
      {/* {details.map(({ title, desc }, index) =>
        title.toLowerCase().includes("link") ? (
          <div key={`link-${index}`} className="visit_link_wrapper">
            <a
              href={desc}
              target="_blank"
              rel="noopener noreferrer"
              className="visit_link"
            >
              Visit
            </a>
          </div>
        ) : null
      )} */}

      <img src={img} alt="modal-pic" className="modal_img" />
    </div>
  </div>
)}

    </div>
  );
};

export default PortfolioItem;
