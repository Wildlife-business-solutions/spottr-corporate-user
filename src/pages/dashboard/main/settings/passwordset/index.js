import React from "react";
import { Div, SpottrP, Button, Input } from "GlobalStyles/spotrrStyles/style";

const PasswordSettings = () => {
  return (
    <Div
      width="100%"
      min_width="450px"
      height="480px"
      backgroundColor="#fff"
      br="8px"
      padding="40px 25px">
      <Div display="flex" justify="space-between">
        <Div></Div>
        <Button bc="#274B89" color="#fff" p="5px 25px" br="4px">
          Done
        </Button>
      </Div>

      <Div>
        <SpottrP color="#274b89" fs="15px" fw="bold" ml="20px" mr="20px">
          Create a password
        </SpottrP>
        <Input
          bg="#F8F8F8"
          dis="none"
          p="0 20px"
          pcol="#C4C4C4"
          mar="15px 0 10px 0"
          hg="54px">
          <input
            type="password"
            // value={lastname}
            // onChange={handlelastname}
            placeholder="Password"
          />
        </Input>
        <Input
          bg="#F8F8F8"
          dis="none"
          p="0 20px"
          pcol="#C4C4C4"
          mar="15px 0 10px 0"
          hg="54px">
          <input
            type="password"
            // value={lastname}
            // onChange={handlelastname}
            placeholder="New Password"
          />
        </Input>

        <Input
          bg="#F8F8F8"
          dis="none"
          p="0 20px"
          pcol="#C4C4C4"
          mar="15px 0 10px 0"
          hg="54px">
          <input
            type="password"
            // value={lastname}
            // onChange={handlelastname}
            placeholder="Confirm Password"
          />
        </Input>
      </Div>
    </Div>
  );
};

export default PasswordSettings;
