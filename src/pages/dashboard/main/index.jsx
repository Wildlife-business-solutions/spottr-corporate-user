import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Menu from "components/dashboard/main/menu";
import DashboardHeader from "./dashboardHeader/dashboard";
import DashboardHome from "./home/DashboardHome";
import InputProductModal from "../../../components/modals/inputProductModal";
import CorporateMenu from "context/corporateMenu";
import Api from "../../../api";
import { dashboardRoutes } from "../../../utilities/static/dashboard-routes";
import { DashboardBody, DashboardContainer } from "./common/style";
import { useDispatch, useSelector } from "react-redux";
import { setAllData, setUserData } from "store/authorize/authorizeReducer";
import { setCategoryDetails } from "store/dashboardCategory/dashboardCategoryReducer";
import DynamicModal from "../../../components/modals/dynamicModal/index";
import { Div } from "GlobalStyles/spotrrStyles/style";
import CountdownTimer from "../../../components/countdownTimer/countdownTimer";
import { clearSecureStorage } from "utilities/js/helpers";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data, token } = useSelector((state) => state.authorize);
  const [showModal, setShowModal] = React.useState(false);
  let timer = React.useRef(null);
  const DAYS_IN_MS = 43 * 23 * 55 * 50 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + DAYS_IN_MS;

  const logout = () => {
    clearSecureStorage();
    dispatch(
      setAllData({ isAuth: false, token: "", refreshToken: "", data: {} })
    );
    // setUser({
    //   ...user,
    //   isAuth: false,
    //   token: "",
    //   refreshToken: "",
    //   data: {},
    // });
  };

  // useEffect(() => {
  //   if (showModal) {
  //     timer.current = setTimeout(() => {
  //       logout();
  //       setShowModal(false);
  //     }, 30000);
  //   }
  //   return () => {
  //     clearTimeout(timer.current);
  //   };
  // }, [showModal, setShowModal]);

  useEffect(() => {
    Api.signin
      .getMyProfile()
      .then((res) => {
        dispatch(setUserData(res.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch, token]);

  useEffect(() => {
    setShowModal(true);

    Api.category
      .getCategories()
      .then((res) => {
        dispatch(setCategoryDetails(res.data));
        // setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      {/* {
        <DynamicModal width="500px" show={showModal}>
          <Div margin="20px 0px">
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          </Div>
          <Div ta="center">
            Coming soon!
            <br />
            January 21st, 2023
            <br />
            🎉🎉🎉
          </Div>
        </DynamicModal>
      } */}
      <DashboardContainer>
        <CorporateMenu>
          <Menu />
        </CorporateMenu>
        <InputProductModal />
        {/* <DashboardHome /> */}
        <DashboardBody>
          <DashboardHeader company={data?.brandName} />
          <Switch>
            {dashboardRoutes.map((route, i) => (
              <Route
                key={i}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </DashboardBody>
      </DashboardContainer>
    </>
  );
}
