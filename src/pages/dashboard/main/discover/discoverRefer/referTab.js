import React, { useState } from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { Button } from "GlobalStyles/spotrrStyles/style";

const ReferTab = () => {
  const [tab, setTab] = useState("New");
  return (
    <Div display="flex" width="100%" margin="24px 0px">
      <Button
        className={tab === "New" && "activeTab"}
        onClick={() => setTab("All")}
        h="50px "
        w="33.3%">
        New
      </Button>
      <Button
        className={tab === "Active" && "activeTab"}
        onClick={() => setTab("Credit")}
        w="33.3%">
        Active
      </Button>
      <Button
        className={tab === "Complete" && "activeTab"}
        onClick={() => setTab("Debit")}
        w="33.3%">
        Complete
      </Button>
    </Div>
  );
};

export default ReferTab;
