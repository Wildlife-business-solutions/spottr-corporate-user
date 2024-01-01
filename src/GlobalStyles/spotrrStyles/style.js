import styled from "styled-components/macro";
import { Link, NavLink } from "react-router-dom";
import Colors from "../appColors";

export const SpottrLink = styled(Link)`
  text-decoration: none;
  text-align: ${(textAlign) => (textAlign ? textAlign : "center")} !important;
  color: ${(color) => (color ? color : null)};
`;
export const SpottrNavLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: ${(color) => (color ? color : null)};
`;
export const Input = styled.div`
  width: ${({ wd }) => (wd ? wd : "100%")};
  color: ${({ color }) => (color ? color : "#274b89")};
  position: ${({ pos }) => (pos ? pos : "relative")};

  div {
    display: ${({ dis }) => (dis ? dis : null)};
    margin: 20px 0;
    border: none;
    height: ${({ hg }) => (hg ? hg : "60px")};
    border-radius: 5px;
    background: ${({ bg }) => (bg ? bg : null)};
    cursor: pointer;
    font-size: 16px;
    padding-right: 20px;
  }

  select {
    color: ${({ col }) => (col ? col : "#274b89")}!important;
    border: ${({ brd }) => (brd ? brd : "1px solid transparent")}!important;
    font-weight: ${({ fwt }) => (fwt ? fwt : "null")};
  }

  input,
  textarea {
    display: block;
    width: ${({ wd }) => (wd ? wd : "100%")};
    margin: ${({ mar }) => (mar ? mar : "20px 0")};
    height: ${({ hg }) => (hg ? hg : "60px")};
    border: ${({ brd }) => (brd ? brd : "1px solid transparent")};
    border-radius: ${({ br }) => (br ? br : "5px")};
    font-family: Nunito;
    font-size: ${({ fs }) => (fs ? fs : "16px")};
    padding: ${({ p }) => (p ? p : null)};
    background: ${({ bg }) => (bg ? bg : "#F8F8F8")};
    transition: 0.4s;
    color: ${({ col }) => (col ? col : "#274b89")};
    resize: none;
    text-align: ${({ ta }) => (ta ? ta : null)};

    &::placeholder {
      font-family: Nunito;
      font-size: ${({ pfs }) => (pfs ? pfs : "16px")};
      color: ${({ pcol }) => (pcol ? pcol : "#C4C4C4")};
    }

    &:focus {
      border-color: #274b89;
    }
  }

  p {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    padding-left: 20px;
    color: #c4c4c4;
  }
`;

export const Div = styled.div`
  width: ${({ width }) => (width ? width : null)};
  z-index:${({ zIndex }) => (zIndex ? zIndex : null)};
  min-width: ${({ min_width }) => (min_width ? min_width : null)};
  grid-template-rows: ${({ grid_rows }) => (grid_rows ? grid_rows : null)};
  grid-template-columns: ${({ grid_column }) =>
    grid_column ? grid_column : null};
  height: ${({ height }) => (height ? height : null)};
  margin: ${({ margin }) => (margin ? margin : null)};
  padding: ${({ padding }) => (padding ? padding : null)};
  display: ${({ display }) => display};
  flex: ${({ flex }) => flex || null};
  gap: ${({ gap }) => (gap ? gap : null)};
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  flex-wrap: ${({ wrap }) => wrap};
  align-items: ${({ alignI }) => alignI};
  align-self: ${({ align }) => (align ? align : null)};
  justify-content: ${({ justify }) => (justify ? justify : null)};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : null};
  background: ${({ background }) => (background ? background : null)};
  background-image: ${({ image }) => (image ? `url(${image})` : null)};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : null)};
  box-sizing: ${({ boxSizing }) => (boxSizing ? boxSizing : null)};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : null)};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : null)};
  overflow: ${({ ov }) => (ov ? ov : null)};
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ color }) => (color ? color : null)};
  border: ${({ border }) => (border ? border : null)};
  border-radius: ${({ br }) => (br ? br : null)};
  border-top:${({ bbt }) => (bbt ? bbt : null)};
  border-bottom: ${({ bbm }) => (bbm ? bbm : null)};
  position: ${({ pos }) => (pos ? pos : null)};
  text-align: ${({ ta }) => (ta ? ta : null)};
  font-weight: ${({ fw }) => (fw ? fw : null)};
  font-size: ${({ fs }) => (fs ? fs : null)};
  cursor: ${({ cursor }) => (cursor ? "pointer" : null)};
  transition: .4s;

  &.dot_menu{
    z-index:1;
    cursor: pointer;
    top:20px;
    right:50px;
    .dropdown{
      .dropdown-toggle::after {
        display: none!important;
      }
    }
  }

  &.country_input{
    input{
      background-color: #f0f0f0;
  border: none;
  box-sizing: border-box;
  font-size: 16px;
  height: 50px;
  border-radius: 5px;
width:100%;
  padding: 10px 25px;
    }
    ul{
          background-color: #f0f0f0;
    position: absolute;
    width: 100%;
    padding: 0px 15px 15px 15px!important;
    list-style: none;
    margin: 0px;
    z-index: 10000;
    padding: 0px 15px 15px 15px;

      list-style: none;
      margin:0px;
    }
    li{
      cursor:pointer;
      :hover{
        background-color: blue;
        color: white;
      }
    }
  }

  &.opportunity_cards{
    display:flex;
    flex-wrap:wrap;
    width:1100px;
    overflow:auto;
    height:64h;
    justify-content:space-between;
    align-items:center;
    background-color:rgba(255,255,255,0.5);
    padding:20px 30px;
    margin:30px 0px;
  }

  // &.opportunity_cards{
  //   display:grid;
  //   grid-template-rows:repeat(8,auto);
  //   grid-template-columns:repeat(3,auto);
  //   flex-wrap:wrap;
  //   width:1100px;
  //   overflow:auto;
  //   height:64h;
  //   justify-content:space-between;
  //   align-items:center;
  //   background-color:rgba(255,255,255,0.5);
  //   padding:20px 30px;
  //   margin:30px 0px;
  // }

  h4{
    font-family: Nunito;
    font-style: normal;
    color: #274b89;
    cursor: pointer;
  }
  
  .qstyle::placeholder{
    font-size: 13px;
  }

  .promote_post_btn{
    padding: 14px 25px;
    border-radius: 36px;
    color: #39B54A;
    box-shadow: 8px 26px 45px rgb(95 193 70 / 25%);
    border-radius: 29px;
    background:none!important;
    border:none!important;
  }

  .tipstext{
    cursor: pointer;
    color: #3670D4;
    border-bottom: 1px solid #3670D4;
  }

  .tipstext:hover{
    color: #3670D4;
    border-bottom: 1px solid #3670D4;
  }

  .trxnitems{
    cursor: pointer;
    margin:auto!important;
    width:100%;
    &:hover{
      color: #274b89;
    }

    &:hover div{
      border-color: #274b89;
    }
`;

export const Img = styled.img`
  width: ${({ w }) => (w ? w : null)};
  height: ${({ h }) => (h ? h : null)};
  margin: ${({ m }) => (m ? m : null)};
  padding: ${({ p }) => (p ? p : null)};
  border-radius: ${({ br }) => (br ? br : null)};
  align-self: ${({ align }) => (align ? align : null)};
  object-fit: ${({ of }) => (of ? of : null)};
  cursor: ${({ cursor }) => (cursor ? "pointer" : null)};
`;

export const Button = styled.button`
  background: ${({ bc }) => (bc ? bc : null)};
  width: ${({ w }) => (w ? w : null)};
  height: ${({ h }) => (h ? h : null)};
  padding: ${({ p }) => (p ? p : null)};
  border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
  border-radius: ${({ br }) => (br ? br : null)};
  outline: none;
  font-weight: ${({ fw }) => (fw ? fw : null)};
  font-size: ${({ fs }) => (fs ? fs : null)};
  display: ${({ display }) => display};
  align-items: ${({ alignI }) => alignI || null};
  cursor: pointer;
  font-family: "Nunito";
  box-shadow: ${({ bs }) => (bs ? bs : null)};
  box-sizing: ${({ bSizing }) => (bSizing ? bSizing : null)};
  color: ${({ color }) => (color ? color : null)};
  margin: ${({ m }) => (m ? m : null)};
  margin-top: ${({ mt }) => (mt ? mt : null)};
  margin-left: ${({ ml }) => (ml ? ml : null)};
  margin-right: ${({ mr }) => (mr ? mr : null)};
  margin-bottom: ${({ mb }) => (mb ? mb : null)};
  justify-content: ${({ justify }) => (justify ? justify : null)};
  position: ${({ position }) => (position ? position : null)};
  bottom: ${({ bottom }) => (bottom ? bottom : null)};
`;

export const SpottrInput = styled.input`
  width: ${({ w }) => (w ? w : null)};
  height: ${({ h }) => (h ? h : null)};
  font-weight: ${({ fw }) => (fw ? fw : null)};
  color: ${({ color }) => (color ? color : null)};
  background: ${({ bg }) => (bg ? bg : null)};
  display: ${({ display }) => display};
  margin: ${({ m }) => (m ? m : null)};
  outline: ${({ o }) => (o ? o : null)};
  border: ${({ border }) => (border ? `1px solid ${border}` : `none`)};
  padding: ${({ p }) => (p ? p : null)};
`;

export const SpottrP = styled.p`
  font-weight: ${({ fw }) => (fw ? fw : null)};
  color: ${({ color }) => (color ? color : null)} !important;
  background: ${({ bg }) => (bg ? bg : null)};
  display: ${({ display }) => display};
  margin: ${({ m }) => (m ? m : null)};!important;
  margin-left: ${({ ml }) => (ml ? ml : null)};
  margin-right: ${({ mr }) => (mr ? mr : null)};
  margin-top: ${({ mt }) => (mt ? mt : null)};
  margin-bottom: ${({ mb }) => (mb ? mb : null)};
  text-transform: ${({ tr }) => (tr ? tr : null)};
  font-size: ${({ fs }) => (fs ? fs : null)};
  font-family: ${({ ff }) => (ff ? ff : null)};
  padding: ${({ p }) => (p ? p : null)};
  text-align: ${({ tAlign }) => (tAlign ? tAlign : null)};
  cursor: ${({ cursor }) => (cursor ? "pointer" : null)};
`;
export const SpottrH = styled.h5`
  font-weight: ${({ fw }) => (fw ? fw : null)};
  color: ${({ color }) => (color ? color : null)};
  background: ${({ bg }) => (bg ? bg : null)};
  display: ${({ display }) => display};
  margin: ${({ m }) => (m ? m : null)};
  margin-left: ${({ ml }) => (ml ? ml : null)};
  margin-right: ${({ mr }) => (mr ? mr : null)};
  margin-top: ${({ mt }) => (mt ? mt : null)};
  margin-bottom: ${({ mb }) => (mb ? mb : null)};
  text-transform: ${({ tr }) => (tr ? tr : null)};
  font-size: ${({ fs }) => (fs ? fs : null)};
  padding: ${({ p }) => (p ? p : null)};
`;
export const HeightSpacer = styled.div`
  height: ${({ h }) => h || null};
  width: ${({ w }) => w || null};
`;

export const ModalSubTitle = styled.p`
  color: ${Colors.primary} !important;
  font-size: 12px;
  font-weight: normal;
  margin: 10px 0;
`;
