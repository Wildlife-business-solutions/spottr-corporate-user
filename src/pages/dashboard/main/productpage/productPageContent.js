import React from "react";
import { Div } from "GlobalStyles/spotrrStyles/style";
import { SpottrP } from "GlobalStyles/spotrrStyles/style";
import Colors from "GlobalStyles/appColors";
import { Button } from "GlobalStyles/spotrrStyles/style";
import { Img } from "GlobalStyles/spotrrStyles/style";

import EditPostImage from "assets/svg/editpost.svg";
import CallImage from "assets/svg/call.svg";
import MessageImage from "assets/svg/message.svg";
import InfoImage from "assets/svg/info.svg";

const ProductPageContent = ({
  currentData,
  handleInfo,
  handleCall,
  handleMesssage,
  handlePayLater,
  search,
  id,
  btnPost,
  handleDraft,
  handleUnpublish,
  handlepublish,
  handlePost,
  page,
}) => {
  return (
    <>
      <Div width="70%" margin="35px auto 0px auto">
        <h4>Description:</h4>
        <SpottrP className="m-0" color={Colors.grey} m="20px 0">
          {search === "?product" ? (
            <>
              {" "}
              For regular goods for good exchange, the exchange area shows a
              list of goods that have been indicated for trading and then any
              user who has a new good to be traded for another comes to the
              exchange and indicates their good.
            </>
          ) : (
            <>{currentData?.description}</>
          )}
        </SpottrP>
      </Div>
      <Div display="flex" justify="center" alignI="center">
        <h1 style={{ color: Colors.primary }}>
          {id === "?product" ? "N10,000" : currentData?.price}
        </h1>
        <h3 style={{ margin: "10px", color: Colors.grey }}>/kg</h3>
      </Div>
      {search !== "?product" ? (
        <>
          <Div
            display="flex"
            justify="center"
            alignI="center"
            margin="20px 0 0 0">
            {search !== "?publish" && search !== "?draft" && (
              <Button
                ref={btnPost}
                bc={Colors.primary}
                color={Colors.white}
                w="300px"
                h="50px"
                m="0 auto"
                onClick={handleDraft}>
                Add to draft
              </Button>
            )}
          </Div>

          <Div
            display="flex"
            justify="center"
            alignI="center"
            margin="20px 0 0 0">
            {search === "?publish" ? (
              <Button
                bc={Colors.primary}
                color={Colors.white}
                w="300px"
                h="50px"
                m="0 auto"
                onClick={handleUnpublish}>
                Unpublish
              </Button>
            ) : (
              <Button
                ref={btnPost}
                bc={Colors.primary}
                color={Colors.white}
                w="300px"
                h="50px"
                m="0 auto"
                onClick={handlePost}>
                Post
              </Button>
            )}
          </Div>
          {page === 0 ? (
            <Div display="flex" justify="center" alignI="center">
              <Button
                bc="#00000000"
                color={Colors.primary}
                w="300px"
                h="50px"
                m="0 auto">
                <span>
                  <Img src={EditPostImage} />
                </span>
                Edit post
              </Button>
            </Div>
          ) : (
            <Div>
              <Div display="flex" justify="center" alignI="center">
                <Button
                  bc={Colors.white}
                  color={Colors.primary}
                  w="300px"
                  h="50px"
                  m="0 auto"
                  onClick={handlePayLater}>
                  Buy Now Pay Later
                </Button>
              </Div>
              <Div display="flex" justify="center" alignI="center">
                <Button
                  bc={Colors.white}
                  color={Colors.primary}
                  w="150px"
                  h="50px"
                  m="0 10px"
                  onClick={handleCall}>
                  <Img src={CallImage} />
                </Button>
                <Button
                  bc={Colors.white}
                  color={Colors.primary}
                  w="150px"
                  h="50px"
                  m="0 10px"
                  onClick={handleMesssage}>
                  <Img src={MessageImage} />
                </Button>
                <Button
                  bc={Colors.white}
                  color={Colors.primary}
                  w="150px"
                  h="50px"
                  m="0 10px"
                  onClick={handleInfo}>
                  <Img src={InfoImage} />
                </Button>
              </Div>
            </Div>
          )}
        </>
      ) : (
        <>
          <Div className="mt-3" display="flex" justify="center">
            <Button
              ref={btnPost}
              bc={Colors.primary}
              color={Colors.white}
              w="300px"
              h="50px"
              m="0 auto"
              onClick={handleDraft}>
              Send Request
            </Button>
          </Div>
          <Div className="mt-4" display="flex" justify="center" alignI="center">
            <Button
              bc={Colors.white}
              color={Colors.primary}
              w="150px"
              h="50px"
              m="0 10px"
              onClick={handleCall}>
              <Img src={CallImage} />
            </Button>
            <Button
              bc={Colors.white}
              color={Colors.primary}
              w="150px"
              h="50px"
              m="0 10px"
              onClick={handleMesssage}>
              <Img src={MessageImage} />
            </Button>
            <Button
              bc={Colors.white}
              color={Colors.primary}
              w="150px"
              h="50px"
              m="0 10px"
              onClick={handleInfo}>
              <Img src={InfoImage} />
            </Button>
          </Div>
        </>
      )}
    </>
  );
};

export default ProductPageContent;
