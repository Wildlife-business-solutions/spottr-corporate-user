import React from "react";
import { Div, SpottrP, Button, Input } from "GlobalStyles/spotrrStyles/style";

const Ownership = () => {
  return (
    <Div
      width="430px"
      backgroundColor="#fff"
      br="8px"
      padding="40px 40px"
      margin="0px 10px">
      <Div display="flex" justify="space-between">
        <Div></Div>
        <Button bc="#274B89" color="#fff" p="5px 25px" br="4px">
          Done
        </Button>
      </Div>

      <Div>
        <SpottrP color="#274b89" fs="20px" fw="600">
          Confirm Ownership
        </SpottrP>
        <SpottrP
          p="20px 0 0 0"
          fs="16px"
          fw="400"
          color="#274B89"
          padding="20px 55px 0px 10px">
          Type in your correct name and use a good photo, make sure it is clear
          so that it will increases your chance of getting good gigs :)
        </SpottrP>
        <Input
          bg="#F8F8F8"
          dis="none"
          p="0 20px"
          pcol="#C4C4C4"
          mar="25px 0 10px 0"
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
            placeholder="re-Enter new Password"
          />
        </Input>

        <SpottrP mt="30px" fs="20px" color="#274b89">
          Kindly let us know why...
        </SpottrP>

        <Input
          bg="#F8F8F8"
          dis="none"
          pcol="#C4C4C4"
          mar="15px 0"
          hg="163px"
          p="10px 0 0 20px"
          fs="14px">
          <textarea placeholder="Write Feedback"></textarea>
        </Input>
      </Div>
    </Div>
  );
};

export default Ownership;
