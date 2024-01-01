import React, { useState } from "react";
import { Button, Div, SpottrP } from "GlobalStyles/spotrrStyles/style";
import "./index.css";
import TransactionTable from "./transactionTable";

const DiscoveryTransactionActivity = () => {
  const [tab, setTab] = useState("All");
  return (
    <div>
      <SpottrP color={"#274B89"} fw="bold" p="0 0 15px">
        Transaction Activity
      </SpottrP>
      <Div display="flex" width="100%" margin="10px 0px">
        <Button
          className={tab === "All" && "activeTab"}
          onClick={() => setTab("All")}
          h="50px "
          w="33.3%">
          All
        </Button>
        <Button
          className={tab === "Credit" && "activeTab"}
          onClick={() => setTab("Credit")}
          w="33.3%">
          Credit
        </Button>
        <Button
          className={tab === "Debit" && "activeTab"}
          onClick={() => setTab("Debit")}
          w="33.3%">
          Debit
        </Button>
      </Div>
      <TransactionTable />
    </div>
  );
};

export default DiscoveryTransactionActivity;
