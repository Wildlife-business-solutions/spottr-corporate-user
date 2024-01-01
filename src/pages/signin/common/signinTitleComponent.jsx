import React from 'react'
import {useHistory} from 'react-router-dom'
import {Div} from "../../../GlobalStyles/spotrrStyles/style";
import {BackText} from "./style";
import {LoginText} from "../Login/style";
import backArrow from "../../../assets/svg/backArrow.svg";

export default function SigninTitleComponent({title}) {
    const history = useHistory()
    const onPrev = () => {
        history.goBack()
    }
    return(
        <>
            <Div onClick={onPrev} margin='0 0 50px 0' display='flex'>
                <img src={backArrow} alt='arrow'/>
                <BackText>Go Back</BackText>
            </Div>
            <LoginText>{title}</LoginText>
        </>

    )
}