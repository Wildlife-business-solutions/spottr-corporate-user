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
import MembersList from './members_list';
import DistributionList from './distribution_list';

function Members() {
    const [taskmenu, setTaskMenu] = useState(0);
    const [input, setInput] = useState("");
    const history = useHistory();
  
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
                Members
              </p>
              <p
                onClick={() => handleChangeTaskMenu(1)}
                className={taskmenu === 1 ? "menu-active" : null}>
                Distribution List
              </p>
              
            </TaskMenu>
          </Div>
          <Spacer />
          
          <Div display="flex" wrap="wrap" width="100%" gap="15px">
            {taskmenu === 0 ? (
              <MembersList
                handleRedirectToTaskDetail={handleRedirectToTaskDetail}
              />
            ) : null}
            {taskmenu === 1 ? (
              <DistributionList />
            ) : null}
            
          </Div>
        </Div>
      </TaskBoxDiv>

            
        </div>
        
        );

    }

export default Members;