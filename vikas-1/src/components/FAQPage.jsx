import React from "react";
import ArrowIcon from "../assets/images/icons/Arrow.svg";
import Footer from "./Footer";
import Header from "./Header";

const FAQPage = () => {
    
  const openAccordion = (event) => {
    console.log('inside', event)
    var selected = event.target.id;
    var allCheckboxes = document.querySelectorAll("[type='checkbox']");
    allCheckboxes.forEach( (checkbox) => {
        checkbox.id !== selected ? checkbox.checked = false : true
    });

  };
  
  return (
    <>
      <div className="faq-content">
        <h3 className="faq-headline">FAQ</h3>
        <div className="faq-question">
          <input
            id="q1"
            type="checkbox"
            className="panel"
            onChange={openAccordion}
          />
          <div className="plus">
            <img alt="Expand Icon" src={ArrowIcon} />
          </div>
          <label for="q1" className="panel-title">
            What is an NFT?
          </label>
          <div className="panel-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
            Risus at ultrices mi tempus imperdiet nulla malesuada.
          </div>
        </div>

        <div className="faq-question">
          <input
            id="q2"
            type="checkbox"
            className="panel"
            onChange={openAccordion}
          />
          <div className="plus">
            <img alt="Expand Icon" src={ArrowIcon} />
          </div>
          <label for="q2" className="panel-title">
            What do I do with an NFT?
          </label>
          <div className="panel-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
            Risus at ultrices mi tempus imperdiet nulla malesuada.
          </div>
        </div>

        <div className="faq-question">
          <input
            id="q3"
            type="checkbox"
            className="panel"
            onChange={openAccordion}
          />
          <div className="plus">
            <img alt="Expand Icon" src={ArrowIcon} />
          </div>
          <label for="q3" className="panel-title">
            Is there a cost to redeeming my NFT?
          </label>
          <div className="panel-content">
            Certain questions are better left &nbsp;
            <a
              href="https://en.wikipedia.org/wiki/The_Unanswered_Question"
              target="_blank"
            >
              unanswered
            </a>
          </div>
        </div>

        <div className="faq-question">
          <input
            id="q4"
            type="checkbox"
            className="panel"
            onChange={openAccordion}
          />
          <div className="plus">
            <img alt="Expand Icon" src={ArrowIcon} />
          </div>
          <label for="q4" className="panel-title">
            What are the rules of the sweep stakes?
          </label>
          <div className="panel-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
            Risus at ultrices mi tempus imperdiet nulla malesuada.
          </div>
        </div>

        <div className="faq-question">
          <input
            id="q5"
            type="checkbox"
            className="panel"
            onChange={openAccordion}
          />
          <div className="plus">
            <img alt="Expand Icon" src={ArrowIcon} />
          </div>
          <label for="q5" className="panel-title">
            Do I have to be from US to enter the sweep stakes?
          </label>
          <div className="panel-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
            Risus at ultrices mi tempus imperdiet nulla malesuada.
          </div>
        </div>

        <div className="faq-question">
          <input
            id="q6"
            type="checkbox"
            className="panel"
            onChange={openAccordion}
          />
          <div className="plus">
            <img alt="Expand Icon" src={ArrowIcon} />
          </div>
          <label for="q6" className="panel-title">
            Can I trade or send my NFTs?
          </label>
          <div className="panel-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
            Risus at ultrices mi tempus imperdiet nulla malesuada.
          </div>
        </div>

        <div className="faq-question">
          <input
            id="q7"
            type="checkbox"
            className="panel"
            onChange={openAccordion}
          />
          <div className="plus">
            <img alt="Expand Icon" src={ArrowIcon} />
          </div>
          <label for="q7" className="panel-title">
            Can I trade or send my NFTs?
          </label>
          <div className="panel-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
            Risus at ultrices mi tempus imperdiet nulla malesuada.
          </div>
        </div>

        <div className="faq-question">
          <input
            id="q8"
            type="checkbox"
            className="panel"
            onChange={openAccordion}
          />
          <div className="plus">
            <img alt="Expand Icon" src={ArrowIcon} />
          </div>
          <label for="q8" className="panel-title">
            Can I trade or send my NFTs?
          </label>
          <div className="panel-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.
            Risus at ultrices mi tempus imperdiet nulla malesuada.
          </div>
        </div>
      </div>

    </>
  );
};

export default FAQPage;
