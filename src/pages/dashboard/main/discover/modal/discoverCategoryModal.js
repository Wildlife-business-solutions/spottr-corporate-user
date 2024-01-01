import React, { useState, useEffect } from "react";
import AdminBackdrop from "components/UI/AdminModal";
import ModalContent from "components/UI/ModalContent";
import { Div, SpottrP } from "GlobalStyles/spotrrStyles/style";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductItemMenu from "components/dashboard/main/productMenuitem";
import { useHistory } from "react-router-dom";

const DiscoverCategoryModal = ({ show, close, header, item }) => {
  const [showData, setShowData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    setShowData([1, 2, 3, 4, 5, 323, 6, 7122, 77, 88, 4657, 5678, 9536]);
    return () => {
      setShowData([]);
    };
  }, []);

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in .5 secs
    // setShowData()
    // console.log(Array.from({ length: 7 }));
    setTimeout(() => {
      //   setShowData(...showData, );
      setShowData([...showData, ...Array.from({ length: 15 })]);
    }, 2000);
  };

  const handleRedirect = (i) => {
    history.push({
      key: "ac3df4", // not with HashHistory!
      pathname: `/dashboard/productpage/${i}`,
      search: "?product",
    });
  };

  return (
    <AdminBackdrop showAdminModal={show}>
      <ModalContent
        overflowY={"scroll"}
        bg={""}
        p="30px"
        close={close}
        isClosing={true}
        wd="auto"
        hg="80%"
        // mwd="410px"
        br="10px"
        modalHeader="">
        <Div padding="25px">
          <SpottrP fw={"700"} color="#274B89" fs="20px" tAlign="center">
            {header}
          </SpottrP>
        </Div>
        <InfiniteScroll
          dataLength={showData.length}
          next={fetchMoreData}
          overflowY="scroll"
          height="62vh"
          hasMore={true}
          loader={<h4>Loading...</h4>}>
          <Div display="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {showData?.map((i) => (
              <div onClick={() => handleRedirect(i)}>
                <ProductItemMenu item={item} key={i} />
              </div>
            ))}
          </Div>
        </InfiniteScroll>
      </ModalContent>
    </AdminBackdrop>
  );
};

export default DiscoverCategoryModal;
