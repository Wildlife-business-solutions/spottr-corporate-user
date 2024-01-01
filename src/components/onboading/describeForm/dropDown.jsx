// import SelectInput from '@material-ui/core/Select/SelectInput'
import React from "react";
import { DropdownDiv } from "./style";
import { Multiselect } from "multiselect-react-dropdown";

export default function DropDown(props) {
  return (
    <DropdownDiv>
      <Multiselect
        options={props.data}
        placeholder={props.placeHolder}
        displayValue="name"
        onSelect={props.handleChange}
        id="css_custom"
        style={{
          fontSize: "14px",
          chips: {
            background: "white",
            color: "grey",
            border: "1px solid #C2E0FF",
          },
          searchBox: {
            border: "none",
            borderRadius: "0px",
            height: "50px",
            background: "#ECF7FF",
            padding: "12px",
            color: "#C4C4C4",
            fontSize: "16px",
          },
          optionContainer: {
            // To change css for option container
            border: "1px solid",
          },
          option: {
            // To change css for dropdown options
            color: "black",
            // background: '#ECF7FF'
          },
        }}
      />
    </DropdownDiv>
  );
}
