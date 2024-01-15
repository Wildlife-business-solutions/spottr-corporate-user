import { Div, Img, SpottrP } from "GlobalStyles/spotrrStyles/style";
import React from "react";
import SingleTaskItemActive from "../tasks/taskItem/singleTaskActive";
import { TableDiv, TableRowDiv } from "../transactions/style";
import depositIcon from  'assets/deposit.png'
import Avatar from 'assets/avatarBoy.png'
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { SwitchInput } from "components/dashboard/main/switch/style";
import Star from "assets/svg/blueStar.svg";

function CustomersList() {


  return (
    <>
      

        <Div
          display="contents"
          width="100%"
          >
          <TableDiv>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Verification</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
        <tbody>

            <TableRowDiv bg="#fff">
                <td classname="tdstyle">
                    <input type="checkbox" />                
                </td>
                <td  classname="tdstyle"><img src={Avatar} alt='dep' width={30} /></td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>@username</small>
                </td>
                
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>member@gmail.com</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#3670D4' }}>Verified</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#39B54A' }}>Active</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>15-08-2020 10-35-54</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '20px', color: '#929AA7' }}>...</small>
                </td>
                
            </TableRowDiv>
            <TableRowDiv bg="#fff">
                <td classname="tdstyle">
                    <input type="checkbox" />                
                </td>
                <td  classname="tdstyle"><img src={Avatar} alt='dep' width={30} /></td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>@username</small>
                </td>
                
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>member@gmail.com</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#3670D4' }}>Verified</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#39B54A' }}>Active</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>15-08-2020 10-35-54</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '20px', color: '#929AA7' }}>...</small>
                </td>
                
            </TableRowDiv>
            <TableRowDiv bg="#fff">
                <td classname="tdstyle">
                    <input type="checkbox" />                
                </td>
                <td  classname="tdstyle"><img src={Avatar} alt='dep' width={30} /></td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>@username</small>
                </td>
                
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>member@gmail.com</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#3670D4' }}>Verified</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#39B54A' }}>Active</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>15-08-2020 10-35-54</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '20px', color: '#929AA7' }}>...</small>
                </td>
                
            </TableRowDiv>
            <TableRowDiv bg="#fff">
                <td classname="tdstyle">
                    <input type="checkbox" />                
                </td>
                <td  classname="tdstyle"><img src={Avatar} alt='dep' width={30} /></td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>@username</small>
                </td>
                
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>member@gmail.com</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#3670D4' }}>Verified</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#39B54A' }}>Active</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>15-08-2020 10-35-54</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '20px', color: '#929AA7' }}>...</small>
                </td>
                
            </TableRowDiv>
            <TableRowDiv bg="#fff">
                <td classname="tdstyle">
                    <input type="checkbox" />                
                </td>
                <td  classname="tdstyle"><img src={Avatar} alt='dep' width={30} /></td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>@username</small>
                </td>
                
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>member@gmail.com</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#3670D4' }}>Verified</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#39B54A' }}>Active</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>15-08-2020 10-35-54</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '20px', color: '#929AA7' }}>...</small>
                </td>
                
            </TableRowDiv>
            <TableRowDiv bg="#fff">
                <td classname="tdstyle">
                    <input type="checkbox" />                
                </td>
                <td  classname="tdstyle"><img src={Avatar} alt='dep' width={30} /></td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>@username</small>
                </td>
                
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>member@gmail.com</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#3670D4' }}>Verified</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#39B54A' }}>Active</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>15-08-2020 10-35-54</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '20px', color: '#929AA7' }}>...</small>
                </td>
                
            </TableRowDiv>
            <TableRowDiv bg="#fff">
                <td classname="tdstyle">
                    <input type="checkbox" />                
                </td>
                <td  classname="tdstyle"><img src={Avatar} alt='dep' width={30} /></td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>@username</small>
                </td>
                
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>member@gmail.com</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#3670D4' }}>Verified</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#39B54A' }}>Active</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '15px', color: '#929AA7' }}>15-08-2020 10-35-54</small>
                </td>
                <td className="tdstyle">
                    <small style={{ fontSize: '20px', color: '#929AA7' }}>...</small>
                </td>
                
            </TableRowDiv>
            
            
        </tbody>

    </TableDiv>
        </Div>
    </>
  );
}

export default CustomersList;
