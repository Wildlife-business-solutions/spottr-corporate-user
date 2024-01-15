import React from "react";
import Filters from "./filters";
import { REQUESTS } from "../../../../../utilities/static/route-const";
import {
  TaskheaderDiv,
  TasksHeadDiv,
  TbackAreaContent,
  TSearch,
} from "./style";
import { Div, SpottrLink, SpottrP } from "GlobalStyles/spotrrStyles/style";
import { Spacer } from "components/notification/style";
import backArrow from "assets/svg/backArrow.svg";

export default function TasksHead({ input, setInput }) {
  console.log(input);
  return (
    <TasksHeadDiv>
      <TbackAreaContent>
        <SpottrLink to={REQUESTS}>
          <Div width="100px" display="flex">
            <img src={backArrow} alt="icon" />
            <p>Go Back</p>
          </Div>
        </SpottrLink>
      </TbackAreaContent>
      <TaskheaderDiv display="flex" w="100%">
        <Spacer />
        <TSearch
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search Members"
        />
        <Filters
          title="Select"
          options={["None", "Name", "Location", "Rating", "List"]}
        />
        <Filters
          title="Filter"
          options={["None", "Name", "Location", "Rating", "List"]}
        />
      </TaskheaderDiv>
    </TasksHeadDiv>
  );
}
