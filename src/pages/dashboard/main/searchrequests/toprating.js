import React from "react";
import {
  BestRatingContainer,
  RatingImage,
  RatingPin,
  RatingPinDiv,
  RatingText,
  RatingNumbers,
  StarDiv,
  NameText,
} from "./style";
import pin from "assets/svg/rate.svg";
import LadyPic from "assets/svg/lady.svg";
import Star from "assets/svg/whiteStar.svg";

export default function BestRating({
  image = { pin },
  rating = 4.3,
  bg = "blues",
  name = "John Tommy",
  location = "Lagos, Nigeria",
  total = "4,509",
}) {
  return (
    <BestRatingContainer>
      <RatingImage src={LadyPic} alt="" />
      <RatingPinDiv>
        <RatingPin src={pin} alt="rating" />
        <StarDiv src={Star} alt="star" />
        <RatingText>{rating}</RatingText>
        <NameText>{name}</NameText>
        <small>{location}</small>
        <RatingNumbers>
          <p>{total} people rated</p>
        </RatingNumbers>
      </RatingPinDiv>
    </BestRatingContainer>
  );
}
