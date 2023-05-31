import React from "react";
import ArrowIcon from "../assets/images/icons/Arrow.svg";
import classnames from "classnames";

const questions = [
  {
    question:
      "Where can I find more out about Deloitte’s Unlimited Reality practice?",
    answer: (
      <>
        Visit our&nbsp;
        <a
          href="https://www2.deloitte.com/us/en/pages/consulting/solutions/enterprise-metaverse-consulting.html"
          target="_blank"
        >
          Unlimited Reality
        </a>
        &nbsp;website to learn about Deloitte’s offerings and thought leadership in
        this emerging area. <br />
        To learn more, connect with an Unlimited Reality leader at&nbsp;
        <a href="mailto:unlimitedreality@deloitte.com" target="_blank">
          unlimitedreality@deloitte.com
        </a>
        .
      </>
    ),
    id: "q1",
  },
  {
    question: 'What is "Mirror World"?',
    answer:
      "Mirror World is an immersive experience which acts as a companion to the 2023 Mobile World Congress. Deloitte’s Unlimited team invites you and your clients to join us at our virtual booth, where you can engage with demos and use cases and view real-time live streams of MWC presentations. You can also have in one-on-one conversations with peers and Deloitte subject matter experts. Finally, you will have the ability to collect a series of AI-generated artwork, via digital collectibles, that increase your odds of winning cool prizes via a sweepstakes (see below for eligibility rules).",
    id: "q2",
  },
  {
    question: "During what dates is this immersive world open?",
    answer:
      "The immersive MWC event will last from 12:00 a.m. Eastern Time on Monday, February 27th, and end on Thursday, March 2nd at 11:59 p.m. Eastern Time.",
    id: "q3",
  },
  {
    question: "What is The Vatom Wallet?",

    answer:
      "It’s a digital wallet where you can store the digital collectibles that you collect. They provide easy, safe, secure storage across devices. Your digital collectibles are kept safe using a unique address that only your wallet has.",
    id: "q4",
  },
  {
    question: "Who is eligible to participate in the sweepstakes?",
    answer: (
      <>
        All users can participate in the scavenger hunt to find digital
        collectibles but only legal U.S. residents 18 and over who are
        participating virtually in the United States are eligible to win a
        prize*. Each digital collectible includes beautiful custom artwork and
        insights into Deloitte’s Unlimited Reality practice.
        <br />
        <br />
        <i>Some restrictions apply. </i>
      </>
    ),
    id: "q5",
  },
  {
    question: "What are the rules of the Mirror World sweepstakes?",
    answer: (
      <>
        Eligible participants who register for the Vatom wallet account, will
        automatically receive one (1) entry into the sweepstakes. Once you
        register and enter the sweepstakes, you’ll want to complete the
        following tasks to increase your odds of a winning a prize:
        <br />
        <ol>
          <li>
            Explore the virtual space and collect all (6) digital collectibles{" "}
          </li>
          <li>
            Finding the (3) collectibles located in the Unlimited Reality, 3D
            Content Factory, and Advanced Connectivity rooms will unlock access
            to a secret room, where you can then collect the (1) special Easter
            Egg digital collectible
          </li>
        </ol>
        Each additional digital collectible you collect awards you one
        additional entry, whereas the Easter Egg counts as two additional
        entries. The Unlimited Reality-themed prizes will include: a Magic Leap®
        2 headset, a Meta Quest™ Pro headset, and two Meta Quests 2 headsets.
        <br />
        Learn more about the official rules for the Mirror World&nbsp;
        <a
          href="https://resources.vatom.com/a8BxS4bNj9/Sweepstakes_rules_Form_Non-employee_5-4-20_MWC_Event.pdf"
          target="_blank"
        >
          Sweepstakes here (PDF)
        </a>
      </>
    ),
    id: "q6",
  },
  {
    question: "Am I able to sell or trade my digital collectibles?",
    answer:
      "At this time, digital collectibles cannot be sold or traded. The digital collectibles are for personal, non-commercial use only.",
    id: "q7",
  },
  {
    question: "Who do I contact if I have issues?",
    answer: (
      <>
        Please visit&nbsp;
        <a href="https://support.vatom.com/hc/en-us " target="_blank">
          https://support.vatom.com/hc/en-us
        </a>
        &nbsp;for troubleshooting support.
      </>
    ),
    id: "q8",
  }
];

const FAQPage = () => {
  const [openedQuestion, setOpenedQuestion] = React.useState(null);

  const openAccordion = (event) => {
    if (event.target.id === openedQuestion) {
      setOpenedQuestion(null);
      return;
    }
    setOpenedQuestion(event.target.id);
  };

  return (
    <div className="faq-content">
      <h3 className="faq-headline">FAQ</h3>

      {questions.map((question) => (
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          id={question.id}
          onChange={openAccordion}
          isOpen={openedQuestion === question.id}
        />
      ))}
    </div>
  );
};

const Question = (props) => {
  const { question, answer, id, isOpen, onChange } = props;
  return (
    <div className="faq-question">
      <input
        onChange={onChange}
        id={id}
        type="checkbox"
        className="panel"
        defaultChecked={isOpen}
      />
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <img
          className={classnames("panel-icon", { "panel-icon-open": isOpen })}
          alt="Expand Icon"
          style={{
            height: "30px",
          }}
          onClick={onChange}
          id={id}
          src={ArrowIcon}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            marginLeft: "20px",
          }}
        >
          <label for={id} className="panel-title">
            {question}
          </label>
          <div
            className={classnames("panel-content", {
              "panel-content-open": isOpen,
            })}
          >
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
