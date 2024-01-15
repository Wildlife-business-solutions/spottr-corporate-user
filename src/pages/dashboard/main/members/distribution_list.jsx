import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import SingleTaskItemActive from "../tasks/taskItem/singleTaskActive";
import { TableDiv, TableRowDiv } from "../transactions/style";
import depositIcon from 'assets/deposit.png'
import Avatar from 'assets/avatarBoy.png'
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { SwitchInput } from "components/dashboard/main/switch/style";
import Star from "assets/svg/blueStar.svg";
import { Button } from "react-bootstrap";
import Divider from "GlobalStyles/dividerLine";

function DistributionList() {


    let content = [];

    for (let i = 0; i < 7; i++) {
        
        content.push(<Div width="100%" display='flex' margin="20px 0">
        <Div width="50%">
            <Div display='flex' alignI='center' width="">
                <img src={Avatar} alt='dep' width={40} />
                <p style={{ fontSize: '15px', color: '#929AA7', margin: "0 10px" }}>Adewale Adedamola <br /> @adedamola456</p>

                <p style={{ margin: "0 10px" }}>
                    <small style={{ fontSize: '25px', fontWeight: "bold", color: '#929AA7' }}>...</small>
                    <br />
                    <small style={{ fontSize: '15px', color: '#929AA7' }}><Img src={Star} alt="go back" /> 4.5</small>

                </p>
            </Div>
            <Divider />
        </Div>
        <Div width="50%">
            <Div display='flex' alignI='center' width="">
                <img src={Avatar} alt='dep' width={40} />
                <p style={{ fontSize: '15px', color: '#929AA7', margin: "0 10px" }}>Adewale Adedamola <br /> @adedamola456</p>

                <p style={{ margin: "0 10px" }}>
                    <small style={{ fontSize: '25px', fontWeight: "bold", color: '#929AA7' }}>...</small>
                    <br />
                    <small style={{ fontSize: '15px', color: '#929AA7' }}><Img src={Star} alt="go back" /> 4.5</small>

                </p>
            </Div>
            <Divider />
        </Div>

    </Div>);
      }

    return (
        <>

            <Div width="100%" display='flex'>
            <Div padding="20px" width="50%">
                <h5>Distribution List 1</h5>
                <Div padding="15px" backgroundColor="#f6f6f6" br="5px">
                    {content}                    
                </Div>

            </Div>
            <Div padding="20px" width="50%">
                <h5>Distribution List 2</h5>
                <Div padding="15px" backgroundColor="#f6f6f6" br="5px">
                    {content}                    
                </Div>

            </Div>

            </Div>
        </>
    );
}

export default DistributionList;