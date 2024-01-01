import React from 'react'
import goBack from 'assets/svg/goBack.svg'
import { Img, SpottrP } from 'GlobalStyles/spotrrStyles/style';
import Colors from 'GlobalStyles/utils/appColors';
import { GobackContenyt } from './style';
function Goback({handleGoback}) {
    return (
        <GobackContenyt onClick={handleGoback}>
            <Img src={goBack} alt="go back"/>
            <SpottrP color={Colors.primary} ml="10px">Go back</SpottrP>
        </GobackContenyt>
    )
}

export default Goback;
