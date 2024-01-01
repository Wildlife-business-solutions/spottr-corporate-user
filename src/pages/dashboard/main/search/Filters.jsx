import React from "react";
import { FiltersDiv } from "./style";
import dropdown from "assets/mem/membertype.svg";
import { Input } from "GlobalStyles/spotrrStyles/style";

const Filters = ({
  title,
  options,
  col,
  scol,
  color,
  hg,
  pos,
  bg,
  show,
  wd,
  pr,
  pl,
  brd,
  lt,
  action,
  swd,
  fw,
}) => {
  return (
    <FiltersDiv
      col={col}
      pos={pos}
      bg={bg}
      show={show}
      wd={wd}
      lt={lt}
      hg={hg}
      pl={pl}
      pr={pr}
      swd={swd}
      fw={fw}
      scol={scol}>
      <p style={{ display: title === "" ? "none" : "block", fontSize: "16px" }}>
        {title}
      </p>
      <Input brd={brd} col={color}>
        <select onChange={action}>
          {options.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </select>
      </Input>

      {show === "none" && (
        <img src={dropdown} className="dropdown_style" alt="filter dropdown" />
      )}
    </FiltersDiv>
  );
};

export default Filters;
