import React from "react";
import "./introduction.scss";
import developer from "../../../../assets/images/developer.png";

export const Introduction = () => {
  return (
    <section className="introduction">
      <div className="introductionContainer">
        <div className="introduction__textContainer">
          <h6>WEB DEVELOPER</h6>
          <h2>Victor Mouza</h2>
          <p>
            {" "}
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt.
          </p>
          <div className="introduction__contactButton">
            <a href="/">Contact Me</a>
          </div>
        </div>
        <div className="introduction__imageContainer">
          <img src={developer} alt="person codding" />
        </div>
      </div>
      <a href="#about" className="introduction__arrowDown">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9993 2C16.2645 2 16.5189 2.10536 16.7064 2.29289C16.894 2.48043 16.9993 2.73478 16.9993 3V26.586L23.2913 20.292C23.4791 20.1042 23.7338 19.9987 23.9993 19.9987C24.2649 19.9987 24.5195 20.1042 24.7073 20.292C24.8951 20.4798 25.0006 20.7344 25.0006 21C25.0006 21.2656 24.8951 21.5202 24.7073 21.708L16.7073 29.708C16.6144 29.8011 16.5041 29.875 16.3826 29.9254C16.2611 29.9758 16.1308 30.0018 15.9993 30.0018C15.8678 30.0018 15.7375 29.9758 15.616 29.9254C15.4946 29.875 15.3842 29.8011 15.2913 29.708L7.29131 21.708C7.10354 21.5202 6.99805 21.2656 6.99805 21C6.99805 20.7344 7.10354 20.4798 7.29131 20.292C7.47908 20.1042 7.73376 19.9987 7.99931 19.9987C8.26486 19.9987 8.51954 20.1042 8.70731 20.292L14.9993 26.586V3C14.9993 2.73478 15.1047 2.48043 15.2922 2.29289C15.4797 2.10536 15.7341 2 15.9993 2Z"
            fill="#D7E5EC"
          />
        </svg>
      </a>
    </section>
  );
};
