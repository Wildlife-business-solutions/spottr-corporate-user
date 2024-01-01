import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { useCorporateProduct } from "context/addProduct";

import Modal from "components/UI/Modal";
import Toast from "components/UI/Toast";
import UploadImages from "./uploadImages";
import ShowUploads from "./showUploads";
import ServiceProduct from "./serviceProduct";
import PriceContent from "./priceContent";
import {
  AddProductDiv,
  ProductButton,
  ProductMainArea,
  RestartDiv,
} from "./style";
import { GETCATEGORIES, UPLOADMULTIPLE } from "utilities/static/routes/backend";
import { useDispatch, useSelector } from "react-redux";
import LocationContent from "./locationContent";
import { useCorporateUser } from "context/userDetails";
import { addCurrentData } from "store/dashboardData/dashboardDataReducer";
import {
  resetCorporateDetails,
  setCorporateData,
} from "store/corporateUserDetails/corporateUserDetailsReducer";

export default function InputProductModal() {
  const history = useHistory();
  const { corporateProduct, setCorporateProduct } = useCorporateProduct();
  const { corporateUser, setCorporateUser } = useCorporateUser();
  const { token } = useSelector((state) => state.authorize);
  const { page, showProductModal, product } = corporateProduct;
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const btnRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState([]);
  const [myFiles, setMyFiles] = useState([]);
  const dispatch = useDispatch();

  function handleChange(e) {
    setCorporateUser({
      ...corporateUser,
      data: {
        ...corporateUser.data,
        [e.target.name]: e.target.value,
      },
    });
    dispatch(setCorporateData({ [e.target.name]: e.target.value }));
  }

  function onRestart() {
    setUrl([]);
    setMyFiles([]);
    setCorporateProduct({
      ...corporateProduct,
      page: 0,
    });
    dispatch(resetCorporateDetails());
  }

  function closeProductModal() {
    setCorporateProduct({
      ...corporateProduct,
      showProductModal: false,
      page: 0,
    });
    setCorporateUser(corporateUser);
    dispatch(resetCorporateDetails());
  }

  function onHandleBack() {
    setCorporateProduct({
      ...corporateProduct,
      page: page - 1,
    });
  }

  function createProduct() {
    setIsLoading(false);
  }

  // function createProduct() {
  //   setIsLoading(true);
  //   btnRef.current["textContent"] = "Uploading Images...";
  //   const myHeaders = new Headers();
  //   myHeaders.append("Authorization", `Bearer ${token}`);
  //   let formdata = new FormData();
  //   for (let i = 0; i < myFiles.length; i++) {
  //     formdata.append("file", myFiles[i], url[i]);
  //   }

  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch(UPLOADMULTIPLE, requestOptions)
  //     .then((response) => response.json())
  //     .then((imageLinks) => {
  //       console.log("imageLinks", imageLinks);
  //       btnRef.current["textContent"] = "Creating Product...";
  //       if (imageLinks.message.includes("uploaded")) {
  //         setCorporateProduct({
  //           ...corporateProduct,
  //           data: {
  //             ...corporateProduct.data,
  //             images: [...imageLinks.data],
  //           },
  //         });
  //         setIsLoading(true);

  //         const productData = {
  //           ...corporateProduct.data,
  //           images: [...imageLinks.data],
  //           product,
  //           currency: "NGN",
  //           amount: Number(corporateProduct.data.amount),
  //         };

  //         Api.product
  //           .createProduct(productData)
  //           .then((res) => {
  //             setIsLoading(false);
  //             if (res.message.includes("Product created")) {
  //               history.push(`/dashboard/product/${res.data.id}`);
  //             }
  //           })
  //           .catch(() => {
  //             btnRef.current["textContent"] = "Create Product";
  //           });
  //         setCorporateProduct({
  //           ...corporateProduct,
  //           showProductModal: false,
  //         });
  //       } else {
  //         setError("Upload Failed");
  //         setShowToast(true);
  //       }
  //     })
  //     .catch(() => {
  //       setIsLoading(false);
  //       setError("Upload Failed");
  //       setShowToast(true);
  //       btnRef.current["textContent"] = "Continue";
  //     });
  // }

  function onContinue() {
    if (page === 0) {
      if (myFiles.length === 0) {
        setError(`Upload product images`);
        setShowToast(true);
        return;
      }
    }

    if (page === 1) {
      setIsLoading(false);
      if (myFiles.length !== 3) {
        setError(`Upload product images`);
        setShowToast(true);
        return;
      }
      btnRef.current["textContent"] = "Create Product";
      setCorporateProduct({
        ...corporateProduct,
        page: page + 1,
      });
      setCorporateUser({
        ...corporateUser,
        data: {
          ...corporateUser.data,
          productImages: url,
        },
      });
      dispatch(setCorporateData({ productImages: url }));

      return;
    }
    if (page === 2) {
      setIsLoading(false);
      createProduct();
      setCorporateProduct({
        ...corporateProduct,
        page: page + 1,
      });
      return;
    }
    if (page === 3) {
      setIsLoading(false);

      setCorporateProduct({
        ...corporateProduct,
        page: page + 1,
      });
      return;
    }

    if (page === 4) {
      setCorporateProduct({
        ...corporateProduct,
        showProductModal: false,
      });
      dispatch(addCurrentData(corporateUser?.data));
      history.push({
        pathname: `/dashboard/productpage/new`,
      });
      return;
    }

    setCorporateProduct({
      ...corporateProduct,
      page: page + 1,
    });
  }

  function handleFile(e) {
    const data = e.target.files;
    if (data.length !== 0) {
      setMyFiles([...myFiles, data[0]]);
      let i = URL.createObjectURL(data[0]);
      setUrl([...url, i]);
    }
  }

  useEffect(() => {
    if (myFiles.length > 3) {
      setError("3 images allowed");
      setShowToast(true);
      setCorporateProduct((prev) => {
        return {
          ...prev,
          page: 0,
        };
      });
    }
    if (myFiles.length === 0) {
      setCorporateProduct((prev) => {
        return {
          ...prev,
          page: 0,
        };
      });
    }

    fetch(GETCATEGORIES)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        // setCategories(data.data);
      })
      .catch((err) => console.log(err));
  }, [myFiles.length]);

  return (
    <Modal
      padding={"40px 50px"}
      show={showProductModal}
      modalClosed={closeProductModal}
      width="fit-content"
      mwidth={"42%"}
      height="auto"
      minHeight="auto"
      page={page}
      top={(page === 2 || page === 3) && "2%"}
      overflowY="auto"
      showClose={true}>
      <Toast
        icon="error"
        description={error}
        showModal={showToast}
        setShowModal={setShowToast}
      />
      <AddProductDiv>
        {page !== 0 && (
          <RestartDiv>
            <h3 onClick={onHandleBack}>Back</h3>
            <h3 onClick={onRestart}>Restart</h3>
          </RestartDiv>
        )}
        <ProductMainArea>
          {page === 0 ? (
            <UploadImages
              setIsDisabled={setIsDisabled}
              myUploads={myFiles}
              handleFile={handleFile}
            />
          ) : null}
          {page === 1 ? (
            <ShowUploads
              setIsDisabled={setIsDisabled}
              myUploads={myFiles}
              images={url}
              handleFile={handleFile}
            />
          ) : null}
          {page === 2 ? (
            <ServiceProduct
              setIsDisabled={setIsDisabled}
              dispatch={dispatch}
              restart={onRestart}
              handleChange={handleChange}
            />
          ) : null}
          {page === 3 ? (
            <LocationContent handleChange={handleChange} restart={onRestart} />
          ) : null}

          {page === 4 ? (
            <PriceContent
              setIsDisabled={setIsDisabled}
              handleChange={handleChange}
              restart={onRestart}
            />
          ) : null}
        </ProductMainArea>
        <ProductButton
          ref={btnRef}
          disabled={isLoading || isDisabled}
          onClick={onContinue}>
          Continue
        </ProductButton>
      </AddProductDiv>
    </Modal>
  );
}
