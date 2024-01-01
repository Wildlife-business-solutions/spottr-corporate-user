import Colors from "GlobalStyles/utils/appColors";
import styled from "styled-components/macro";
import media from "GlobalStyles/utils/media";

export const CategoryItem = styled.div`
  &.selectedCategory {
    border: 1px solid green;
  }
  width: 80px;
  background: ${({ backgroundColor }) => backgroundColor || Colors.white};
  border: 1px solid rgba(154, 159, 191, 0.25);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 15px;

  ${media.tablet`
        margin-right: 15px;
    `}
  ${media.mobile`
        margin-right: 20px;
        `}
    ${media.smallMobile`
        margin-right: 25px;
`}
`;
export const CategoryItemImag = styled.img`
  width: 24px;
  height: 24px;
`;
export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: space-between;

  ${media.tablet`
        width: 100%; 
    `}
  ${media.mobile`
        width: 100vw; 
        justify-items: center;
        over-flow:hidden;
        `}
    ${media.smallMobile`
        width: 100vw; 
        justify-items: center;
        over-flow:hidden;
`}
`;
export const CategoryText = styled.p`
  color: ${({ color }) => color || null};
  margin-top: 10px;
  font-size: 8px;
`;

export const CategoryButton = styled.button`
  color: ${({ color }) => color || null};
  padding: 10px 20px 10px 20px;
  border: 1px solid ${({ borderColor }) => borderColor || borderColor};
  box-sizing: border-box;
  border-radius: 5.82659px;
  margin-right: 15px;
  cursor: pointer;
`;

export const CategoryButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow-x: hidden;
`;

export const CbottomButton = styled.button`
  border: 1px solid #3670d5;
  border-radius: 4px;
  padding: 10px 20px;
  margin-right: 20px;
  color: ${Colors.ligterGrey};
  cursor: pointer;
  &:hover {
    background: ${Colors.lightGreen};
  }
`;

export const CbottomButton2 = styled.button`
  background: ${Colors.ligterGrey};
  border: 1px solid ${Colors.ligterGrey};
  box-shadow: 0px 9px 20px rgba(171, 180, 189, 0.148862);
  color: ${Colors.white};
  border-radius: 4px;
  padding: 10px 20px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background: ${Colors.lightGreen};
  }
`;

export const HeightSpacer = styled.div`
  height: ${({ h }) => h || null};
  width: ${({ w }) => w || null};
`;
export const CategoryButtonContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
export const ImagePicker = styled.input`
  width: "100%";
  height: "10%";
  opacity: 0;
`;
