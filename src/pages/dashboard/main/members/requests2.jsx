import React, { useState } from 'react'
import { TaskBoxDiv, TaskMenu } from '../tasks/style';
import { Div, SpottrLink } from 'GlobalStyles/spotrrStyles/style';
import { Spacer } from 'components/notification/style';
import { DASHBOARD } from 'utilities/static/routes/routes';
import { TbackAreaContent } from '../tasks/head/style';
import backArrow from "assets/svg/backArrow.svg";
import TasksHead from '../tasks/head';
import ActiveTasks from '../tasks/activeTasks';
import { useHistory } from "react-router-dom";

import CustomersList from './customers_list';
import DynamicModal2 from 'components/modals/dynamicModal/dynamicModal2';
import { Button } from 'react-bootstrap';
import Colors from 'GlobalStyles/appColors';
import RequestsList from './requests_list';

function Requests2() {
    const [taskmenu, setTaskMenu] = useState(3);
    const [input, setInput] = useState("");
    const history = useHistory();

    const [showModal, setShowModal] = React.useState(true);
  
    const handleRedirectToTaskDetail = (i, search) => {
      history.push({
        pathname: `/dashboard/taskdetail/${i}`,
        search: search,
      });
      // history.push(`/dashboard/taskdetail/${i}`);
    };
  
    function handleChangeTaskMenu(num) {
      setTaskMenu(num);
    }

    return (
        <div>
            <TaskBoxDiv>
        <Div display="flex" flexDirection="column">
          <TasksHead setInput={setInput} input={input} />
          <Div>
            <TaskMenu mt="35px" mb="15px">
              <p
                onClick={() => handleChangeTaskMenu(0)}
                className={taskmenu === 0 ? "menu-active" : null}>
                Home
              </p>
              <p
                onClick={() => handleChangeTaskMenu(1)}
                className={taskmenu === 1 ? "menu-active" : null}>
                Members
              </p>
              <p
                onClick={() => handleChangeTaskMenu(2)}
                className={taskmenu === 2 ? "menu-active" : null}>
                Customers
              </p>
              <p
                onClick={() => handleChangeTaskMenu(3)}
                className={taskmenu === 3 ? "menu-active" : null}>
                Requests
              </p>
              
            </TaskMenu>
          </Div>
          <Spacer />
          
          <Div display="flex" wrap="wrap" width="100%" gap="15px">
            <DynamicModal2 width="500px" show={showModal}>
            
            <Div ta="left">
                <Div fs="20px" color="#274B89" fw="bold">
                  Add to List
                </Div>
                <Div fs="13px" color="#000000">
                Select list to add member to
                </Div>
                
                <textarea style={{ width: '100%', backgroundColor:'#ECF7FF', height: '50px', margin: '20px 0', fontSize: '13px', padding: '10px' }} placeholder='Type your message here'></textarea>

                <Div display="flex" justify="space-between">
                <Button
                style={{ width: '100%', margin: '5px'}}
                className='btn btn-light'
                p="10px 8px"
                w="100%"
                
                bc={Colors.white}
                color={Colors.blue}
                
            >
                 Cancel
            </Button>
                <Button
                style={{ width: '100%', margin: '5px', backgroundColor:'#274b89'}}
                p="10px 8px"
                w="100px"
                bc={Colors.grey}
                color={Colors.white}
                
            >
                 Confirm
            </Button>
                </Div>
            </Div>
            </DynamicModal2>
            {taskmenu === 0 ? (
              <CustomersList />
            ) : null}
            {taskmenu === 1 ? (
              <CustomersList />
            ) : null}
            {taskmenu === 2 ? (
              <CustomersList />
            ) : null}
            {taskmenu === 3 ? (
              <RequestsList />
            ) : null}
            
          </Div>
        </Div>
      </TaskBoxDiv>

            
        </div>
        
        );

    }

export default Requests2;