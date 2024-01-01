import React from 'react'
import { Div, SpottrP, Img } from "GlobalStyles/spotrrStyles/style";
import recent from 'assets/svg/recent.svg';
import peoplej from 'assets/svg/users.svg';

const Recentitem = ({item, time, people}) => {
    return (
        <Div boxShadow="0px 2.76261px 13.8131px rgba(0, 0, 0, 0.07)" padding="10px 15px" height="76px" margin="15px 0" backgroundColor="#fff" width="100%"  display="flex" justify="space-between" alignI="center">
            <Div display="flex">
                <Img src={recent} w="30px" h="30px" />
                <Div padding="0 0 0 10px">
                    <SpottrP tr="capitalize" fw="bold" fs="14px">{item}</SpottrP>
                    <SpottrP fs="10px" color="#929AA7" p="5px 0 0 0">{time} mins ago</SpottrP>
                </Div>
            </Div>
            <Div display="flex" alignI="center" align="flex-around" fs="10px" color="#929AA7">
                <Img src={peoplej} w="15px" h="15px"/>
                <SpottrP p="0 0 0 6px">{people} people joined</SpottrP>
            </Div>
        </Div>
    )
}

export default Recentitem
