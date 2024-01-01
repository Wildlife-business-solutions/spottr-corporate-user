import React from "react";
import { Button } from "styles/availableStyles/style";
import { Container } from "./style";

const LoadingButton = ({
  width,
  color,
  text,
  m,
  border,
  p,
  loading,
  ...rootDOMAttributes
}) => (
  <Container>
    <Button
      dashboard
      w={width}
      color={color}
      m={m}
      border={border}
      p={p}
      disabled={loading}
      {...rootDOMAttributes}
    >
      {" "}
      {loading ? (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      ) : (
        <p> {text}</p>
      )}
    </Button>
  </Container>
);

export default LoadingButton;
