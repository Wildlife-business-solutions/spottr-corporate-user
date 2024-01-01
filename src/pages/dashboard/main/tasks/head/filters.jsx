import React from "react";
import { TFiltersDiv } from "./style";

export default function Filters({ title, options }) {
  return (
    <TFiltersDiv>
      <p>{title}</p>
      <select>
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
    </TFiltersDiv>
  );
}
