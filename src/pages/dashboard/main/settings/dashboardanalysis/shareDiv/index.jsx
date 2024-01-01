import React from 'react'
import { SharedDiv, SharedText } from './style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Share({color, title}) {
    return (
        <SharedDiv>
            <SharedText color={color}>{title} <FontAwesomeIcon icon={faAngleRight}/></SharedText>
            {/* <SharedText color={color}></SharedText> */}
        </SharedDiv>
    )
}
