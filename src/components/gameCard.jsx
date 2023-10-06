import React from "react";
import Wrapper from "./atoms/Wrapper";
import mhw from "../imgs/mhw_bg.jpeg";

function GameCard({ name }) {
  return (
    <Wrapper className="w-2/4 h-3/4 dark-wrapper">
      <Wrapper className="wrapper w-full h-full">
        <img
          className="absolute top-0 left-0 w-full h-full opacity-30 rounded-xl"
          src={mhw}
          alt="image"
        />

        <div className="flex w-full h-1/6 justify-center items-start pt-2">
          <span className="big-text dark-wrapper"> Monster Hunter World </span>
        </div>

        <div className="flex w-full h-5/6 justify-center items-start gap-2 overflow-hidden">
          <span className="flex w-1/2 reg-text dark-wrapper">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
          <div className="flex w-1/2 dark-wrapper" />
        </div>
      </Wrapper>
    </Wrapper>
  );
}

export default GameCard;
