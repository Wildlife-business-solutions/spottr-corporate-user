import React, { useState } from "react";

import TasksHead from "./head";
import NewTasks from "./newTasks";
import ActiveTasks from "./activeTasks";
import CompletedTasks from "./completedTasks";
import Colors from "GlobalStyles/utils/appColors";

import { Button, Div } from "GlobalStyles/spotrrStyles/style";
import { TaskBoxDiv, TaskMenu } from "./style";
import { Spacer } from "components/notification/style";
import { useHistory } from "react-router-dom";

function TasksPage() {
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
                New
              </p>
              <p
                onClick={() => handleChangeTaskMenu(1)}
                className={taskmenu === 1 ? "menu-active" : null}>
                Active
              </p>
              <p
                onClick={() => handleChangeTaskMenu(2)}
                className={taskmenu === 2 ? "menu-active" : null}>
                Completed
              </p>
            </TaskMenu>
          </Div>
          <Spacer />
          {/* <Div margin="15px 0px">
            <Button
              color={Colors.primary}
              bc={Colors.white}
              border={Colors.lightGreen}
              p="10px 20px"
              br="3px"
              fw="bold">
              {"Create a new task  +"}{" "}
            </Button>
            <Button
              color={Colors.danger}
              bc={Colors.white}
              border={Colors.danger}
              m="0px 20px"
              p="10px 20px"
              br="3px"
              fw="bold">
              Delete Task x{" "}
            </Button>
          </Div> */}

          {/* {opportunitiesMenu} */}
          <Div display="flex" wrap="wrap" width="100%" gap="15px">
            {taskmenu === 0 ? (
              <NewTasks
                handleRedirectToTaskDetail={handleRedirectToTaskDetail}
              />
            ) : null}
            {taskmenu === 1 ? (
              <ActiveTasks
                handleRedirectToTaskDetail={handleRedirectToTaskDetail}
              />
            ) : null}
            {taskmenu === 2 ? (
              <CompletedTasks
                handleRedirectToTaskDetail={handleRedirectToTaskDetail}
              />
            ) : null}
          </Div>
        </Div>
      </TaskBoxDiv>
    </div>
  );
}

export default TasksPage;
