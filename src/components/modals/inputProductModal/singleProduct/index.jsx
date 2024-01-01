import React, { useEffect, useState } from "react";
import GoogleMaps from "components/dashboard/main/GoogleMap";
import QRCode from "react-qr-code";
// import product from 'assets/svg/product.svg'
import pencil from "assets/svg/pencil.svg";
import {
  AdDiv,
  BarcodeArea,
  BottomData,
  DescriptionArea,
  EditDiv,
  MainArea,
  MapContainer,
  PriceAndButtonDiv,
  ProductArea,
  ProductData,
  ProductDetailsDiv,
  ProductImagesDiv,
  SingleProductContainer,
} from "./style";
import { GETSINGLEPRODUCT } from "utilities/static/routes/backend";
import addCommas from "comma-number";
import { ReactComponent as Spinner } from "assets/svg/spinner.svg";
import { useSelector } from "react-redux";

export default function SingleProduct({ match }) {
  const id = match.params.id;
  const { token } = useSelector((state) => state.authorize);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(GETSINGLEPRODUCT(id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((product) => {
        console.log("product", product);
        setProductData(() => {
          return { ...product.data };
        });
      })
      .catch((err) => console.log(err));
  }, [token, id]);

  return (
    <SingleProductContainer>
      {productData.length === 0 ? (
        <Spinner />
      ) : (
        <MainArea>
          <ProductArea>
            <MapContainer>
              <GoogleMaps
                center={{
                  lat: productData.location?.coordinates[1],
                  lng: productData.location?.coordinates[0],
                }}></GoogleMaps>
              <ProductDetailsDiv>
                <ProductData>
                  <img src={productData.images[0]} alt="prod" />
                  <div
                    style={{
                      width: "70%",
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <h1>{productData.productName}</h1>
                    <h2>{productData.category[0].name}</h2>
                    <h3>Coker & Sons Ltd.</h3>
                    <BottomData>
                      <p>{productData.address}</p>
                      <button>N{addCommas(productData.amount)}</button>
                    </BottomData>
                  </div>
                </ProductData>
              </ProductDetailsDiv>
            </MapContainer>
            <ProductImagesDiv>
              {productData.images.map((image, i) => (
                <img src={image} alt="prod" />
              ))}
            </ProductImagesDiv>
            <DescriptionArea>
              <p>
                <span>Description:</span>
                <br />
                <br />
                {productData.description}
              </p>
            </DescriptionArea>
            <PriceAndButtonDiv>
              <h2>N{addCommas(productData.amount)}</h2>
              <button>Post</button>
              <EditDiv>
                <img src={pencil} alt="pen" />
                <p>Edit Post</p>
              </EditDiv>
            </PriceAndButtonDiv>
          </ProductArea>
          <BarcodeArea>
            <QRCode
              bgColor="#ffffff"
              fgColor="#274B89"
              value={`https://thespottrapp.com/product/${id}`}
              size={200}
            />

            <AdDiv>
              <div>AD</div>
              <p>Promote Post</p>
            </AdDiv>
          </BarcodeArea>
        </MainArea>
      )}
    </SingleProductContainer>
  );
}
