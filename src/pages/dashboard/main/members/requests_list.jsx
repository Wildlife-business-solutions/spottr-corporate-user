import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import SingleTaskItemActive from "../tasks/taskItem/singleTaskActive";
import { TableDiv, TableRowDiv } from "../transactions/style";
import depositIcon from  'assets/deposit.png'
import Avatar from 'assets/avatarBoy.png'
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { SwitchInput } from "components/dashboard/main/switch/style";
import Star from "assets/svg/blueStar.svg";
import Check from "assets/svg/check.svg";
import Cancel2 from "assets/svg/cancel2.svg";
import Divider from "GlobalStyles/dividerLine";

function RequestsList() {

    let content = [];

    for (let i = 0; i < 7; i++) {
        
        content.push(
            <Div
          display="flex"
          justify="space-between"
          width="100%"
          >
          <Div>
                <Div display='flex' alignI='center' width="">
                    <img src={Avatar} alt='dep' width={40} />
                    <p style={{ fontSize: '15px', color: '#929AA7', margin: "0 10px" }}>Adewale Adedamola <br /> @adedamola456</p>
                </Div>


                <Div display='flex'  style={{ padding:'10px', borderRadius:'20px', backgroundColor:'#FFF', boxShadow: '0px 2.303797483444214px 11.518986701965332px 0px rgba(0, 0, 0, 0.07)'}} margin="15px 0" justify="space-between" bc="#FFF" width="">
                    <img src={Check} alt='dep' width={70} />
                    <img src={Cancel2} alt='dep' width={70} />
                </Div>

                <Divider />
          </Div>
          <Div>
                <Div display='flex' alignI='center' width="">
                    <img src={Avatar} alt='dep' width={40} />
                    <p style={{ fontSize: '15px', color: '#929AA7', margin: "0 10px" }}>Adewale Adedamola <br /> @adedamola456</p>
                </Div>


                <Div display='flex'  style={{ padding:'10px', borderRadius:'20px', backgroundColor:'#FFF', boxShadow: '0px 2.303797483444214px 11.518986701965332px 0px rgba(0, 0, 0, 0.07)'}} margin="15px 0" justify="space-between" bc="#FFF" width="">
                    <img src={Check} alt='dep' width={70} />
                    <img src={Cancel2} alt='dep' width={70} />
                </Div>

                <Divider />
          </Div>
          <Div>
                <Div display='flex' alignI='center' width="">
                    <img src={Avatar} alt='dep' width={40} />
                    <p style={{ fontSize: '15px', color: '#929AA7', margin: "0 10px" }}>Adewale Adedamola <br /> @adedamola456</p>
                </Div>


                <Div display='flex'  style={{ padding:'10px', borderRadius:'20px', backgroundColor:'#FFF', boxShadow: '0px 2.303797483444214px 11.518986701965332px 0px rgba(0, 0, 0, 0.07)'}} margin="15px 0" justify="space-between" bc="#FFF" width="">
                    <img src={Check} alt='dep' width={70} />
                    <img src={Cancel2} alt='dep' width={70} />
                </Div>

                <Divider />
          </Div>
          <Div>
                <Div display='flex' alignI='center' width="">
                    <img src={Avatar} alt='dep' width={40} />
                    <p style={{ fontSize: '15px', color: '#929AA7', margin: "0 10px" }}>Adewale Adedamola <br /> @adedamola456</p>
                </Div>


                <Div display='flex'  style={{ padding:'10px', borderRadius:'20px', backgroundColor:'#FFF', boxShadow: '0px 2.303797483444214px 11.518986701965332px 0px rgba(0, 0, 0, 0.07)'}} margin="15px 0" justify="space-between" bc="#FFF" width="">
                    <img src={Check} alt='dep' width={70} />
                    <img src={Cancel2} alt='dep' width={70} />
                </Div>

                <Divider />
          </Div>
          <Div>
                <Div display='flex' alignI='center' width="">
                    <img src={Avatar} alt='dep' width={40} />
                    <p style={{ fontSize: '15px', color: '#929AA7', margin: "0 10px" }}>Adewale Adedamola <br /> @adedamola456</p>
                </Div>


                <Div display='flex'  style={{ padding:'10px', borderRadius:'20px', backgroundColor:'#FFF', boxShadow: '0px 2.303797483444214px 11.518986701965332px 0px rgba(0, 0, 0, 0.07)'}} margin="15px 0" justify="space-between" bc="#FFF" width="">
                    <img src={Check} alt='dep' width={70} />
                    <img src={Cancel2} alt='dep' width={70} />
                </Div>

                <Divider />
          </Div>
        </Div>
        )
    }

  return (
    <>
      
        { content }
        
    </>
  );
}

export default RequestsList;
