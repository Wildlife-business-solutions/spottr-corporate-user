import React from "react";
import { CategoryItem, CategoryItemImag, CategoryText } from "./style";

const CategoryContent = ({
  index,
  image,
  text,
  textColor,
  backgroundColor,
}) => {
  return (
    <CategoryItem
      className={index < 7 && "selectedCategory"}
      backgroundColor={backgroundColor}>
      <CategoryItemImag src={image} alt={text} />
      <CategoryText color={textColor}>{text}</CategoryText>
    </CategoryItem>
  );
};

export default CategoryContent;
