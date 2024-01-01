import { Div, SpottrP } from 'GlobalStyles/spotrrStyles/style';
import React from 'react'
import { CustomisedCheckInput, CheckImg, CustomCheckWrapper } from './style'

function CustomCheckBox({handleCheck, checkedSrc}) {
    return (
        <CustomCheckWrapper>
            <CustomisedCheckInput type="checkbox" onChange={handleCheck} />
            <Div display="flex">
                <CheckImg src={checkedSrc}  alt="Custom Check" w="30px" height="30px"/>
                <SpottrP>Heloo motor to the cuse</SpottrP>
            </Div>
        </CustomCheckWrapper>
    )
}

export default CustomCheckBox;
