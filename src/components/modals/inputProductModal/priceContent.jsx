import React from "react";

import {
  CurrencyProductInput,
  ServiceProductInput,
  ServiceProviderDiv,
  TitleText,
  UploadImagesDiv,
} from "./style";
import Form from "react-bootstrap/Form";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { Button, InputGroup } from "react-bootstrap";
import { useCorporateUser } from "context/userDetails";
import { setCorporateData } from "store/corporateUserDetails/corporateUserDetailsReducer";
import { useDispatch, useSelector } from "react-redux";

const options = [
  // {
  //   locale: "de-DE",
  //   currency: "EUR",
  // },
  // {
  //   locale: "en-US",
  //   currency: "USD",
  // },
  // {
  //   locale: "en-GB",
  //   currency: "GBP",
  // },
  // {
  //   locale: "ja-JP",
  //   currency: "JPY",
  // },
  // {
  //   locale: "en-IN",
  //   currency: "INR",
  // },
  {
    locale: "",
    currency: "NGN",
    symbol: "N",
  },
  {
    locale: "",
    currency: "CT",
    symbol: "CT",
  },
];

export default function PriceContent({ restart, setIsDisabled, handleChange }) {
  const [intlConfig, setIntlConfig] = React.useState(options[0]);
  const { data } = useSelector((state) => state.corporatUserDetails);
  const { corporateUser, setCorporateUser } = useCorporateUser();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!!data.price) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [data]);

  const handleIntlSelect = (event) => {
    const config = options[Number(event.target.value)];
    if (config) {
      setIntlConfig(config);
    }
  };
  const handleOnValueChange = (value) => {
    setCorporateUser({
      ...corporateUser,
      data: {
        ...corporateUser.data,
        price: `${intlConfig.symbol} ${value}`,
      },
    });
    dispatch(setCorporateData({ price: `${intlConfig.symbol} ${value}` }));
  };

  return (
    <ServiceProviderDiv>
      <TitleText style={{ marginTop: "10px" }}>Price (₦)</TitleText>

      <Form>
        <InputGroup className="my-3" controlId="formBasicEmail">
          <Form.Select onChange={handleIntlSelect}>
            {options.map((config, i) => {
              if (config) {
                const { locale, currency, symbol } = config;
                return (
                  <option key={`${locale}${currency}`} value={i}>
                    {symbol}
                  </option>
                );
              }
            })}
          </Form.Select>
          <CurrencyProductInput
            name="price"
            width="85%"
            height="50px"
            // intlConfig={intlConfig}
            placeholder="Product Price"
            className={`form-control`}
            onValueChange={handleOnValueChange}
            decimalsLimit={6}
            // value={priceValue}
            step={1}
          />
        </InputGroup>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <ServiceProductInput
            name="price"
            id="validationCustom04"
            height="50px"
            intlConfig={intlConfig}
            placeholder="Product Price"
            className={`form-control`}
            onValueChange={handleChange}
            decimalsLimit={6}
            // value={priceValue}
            step={1}
          />
        </Form.Group> */}
      </Form>
    </ServiceProviderDiv>
  );
}
