import React, { useState, useEffect } from "react";
import DropDown from "components/onboading/describeForm/dropDown";
import { useCorporateProduct } from "../../../context/addProduct";
import { GETCATEGORIES } from "utilities/static/routes/backend";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { useCorporateUser } from "context/userDetails";
import { setCorporateData } from "store/corporateUserDetails/corporateUserDetailsReducer";
import {
  DescriptionDiv,
  ServiceProductInput,
  ServiceProviderDiv,
  TitleText,
} from "./style";
import { useSelector } from "react-redux";

export default function ServiceProduct({
  dispatch,
  setIsDisabled,
  handleChange,
  restart,
}) {
  const { corporateUser, setCorporateUser } = useCorporateUser();
  const { data } = useSelector((state) => state.corporatUserDetails);
  // const { data } = corporateUser;
  const [categories, setCategories] = useState([]);
  const [textCount, setTextCount] = useState(0);

  useEffect(() => {
    if (
      !!data?.productName &&
      !!data?.description &&
      data?.businessCategory?.length !== 0 &&
      data?.businessTags?.length !== 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [data]);

  function handleCategory(selected) {
    setCorporateUser({
      ...corporateUser,
      data: {
        ...corporateUser.data,
        businessCategories: [...selected],
      },
    });
    dispatch(setCorporateData({ businessCategory: [...selected] }));
  }

  function handleTag(selected) {
    setCorporateUser({
      ...corporateUser,
      data: {
        ...corporateUser.data,
        businessTags: [...selected],
      },
    });
    dispatch(setCorporateData({ businessTags: [...selected] }));
  }

  function onTextChange(e) {
    let letters = e.target.value;
    if (letters.length === 500) {
      alert("Not More Than 500 Characters");
      return;
    }
    setTextCount(letters.length);
    setCorporateUser({
      ...corporateUser,
      data: {
        ...corporateUser.data,
        description: letters,
      },
    });
    dispatch(setCorporateData({ description: letters }));
  }

  useEffect(() => {
    fetch(GETCATEGORIES)
      .then((res) => res.json())
      .then((data) => {
        setCategories([...data.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ServiceProviderDiv>
      <TitleText>Service/Product Name</TitleText>

      <ServiceProductInput
        value={data?.productName || ""}
        name="productName"
        onChange={handleChange}
        placeholder="Type a good name"
      />
      <p
        style={{
          fontSize: "14px",
          maxWidth: "500px",
          margin: "20px 100px 20px 20px",
          color: "#000000",
        }}>
        Use something quite Straight forward to help your users find you
        quickier. E.g: PlayStation 3
      </p>
      <DescriptionDiv style={{ marginTop: "10px" }}>
        <div className="d-flex">
          <TitleText>Description</TitleText>
          <p>{textCount}/500</p>
        </div>
        <textarea
          style={{ padding: "10px" }}
          value={data?.description || ""}
          onChange={onTextChange}
        />
        <p
          style={{
            fontSize: "14px",
            maxWidth: "500px",
            margin: "20px 20px",
            fontWeight: "400",
            color: "#000000",
          }}>
          Make sure you are descriptive and detailed as it assure trust with
          users
        </p>
      </DescriptionDiv>
      <div>
        <TitleText style={{ marginTop: "10px" }}>
          Service/Product Category
        </TitleText>
        <DropDown
          noText
          name="name"
          handleChange={handleCategory}
          data={[
            { name: "category1", id: 1 },
            { name: "category1", id: 2 },
            { name: "category3", id: 2 },
            { name: "category4", id: 2 },
          ]}
          placeHolder="Select Cartegory"
        />
        <p
          style={{
            fontSize: "14px",
            maxWidth: "500px",
            margin: "20px 100px 20px 20px",
            color: "#000000",
          }}>
          Service and product categories helps users with precise search option
          find your products
        </p>
      </div>
      <div>
        <TitleText fs={"12px"} color="black" style={{ marginTop: "10px" }}>
          Add other tags
        </TitleText>
        <DropDown
          noText
          name="tags"
          handleChange={handleTag}
          data={[
            { name: "category1", id: 1 },
            { name: "category1", id: 2 },
            { name: "category3", id: 2 },
            { name: "category4", id: 2 },
          ]}
          placeHolder="Select Tag"
        />
        <p
          style={{
            fontSize: "14px",
            maxWidth: "500px",
            margin: "10px 20px",
            fontWeight: "400",
            color: "#000000",
          }}>
          Adding tags improve search awearnesss for users users
        </p>
      </div>
    </ServiceProviderDiv>
  );
}
