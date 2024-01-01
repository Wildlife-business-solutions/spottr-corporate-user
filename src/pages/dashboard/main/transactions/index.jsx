import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loading-skeleton";
import TransactionHeader from "../search/Search";
import Walletcards from "./wallet/walletcards";
import TransactionActivities from "./wallet/transactionactivity";
import { Div, SpottrLink } from "GlobalStyles/spotrrStyles/style";
import { DASHBOARDHOME } from "../../../../utilities/static/route-const";
import backArrow from "assets/svg/backArrow.svg";
import { useSelector } from "react-redux";
import { walletData } from "utilities/constant/walletData";
import Dropdown from "react-bootstrap/Dropdown";

const Transactions = () => {
  // const [walletData, setUserWallet] = useState(null);
  const { token } = useSelector((state) => state.authorize);
  const [isLoading, setIsLoading] = useState(true);
  let [userTransaction, setUserTransaction] = useState([]);
  const [showTransactionType, setShowTransactionType] = useState("Fiat Wallet");

  useEffect(() => {
    // axios
    //   .get(GETWALLET, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     setTimeout(() => {
    //       setUserWallet(res.data.data);
    //       setIsLoading(false);
    //     }, 5000);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    showUserTransaction("Fiat Wallet");
  }, []);

  const showUserTransaction = async (name) => {
    setUserTransaction(
      walletData.find((walletType) => walletType.name === name)
    );
    setShowTransactionType(name);
  };

  return (
    <>
      <Div margin="30px 0px">
        <SpottrLink to={DASHBOARDHOME}>
          <Div width="100px" display={"flex"}>
            <img src={backArrow} alt="icon" />
            <p
              style={{
                fontSize: "15px",
                color: "#274889",
                marginLeft: "15px",
              }}>
              Go back
            </p>
          </Div>
        </SpottrLink>

        <Div
          margin="20px 0px 0px 0px"
          height="100%"
          padding="20px 40px"
          width="90%"
          backgroundColor="#fff"
          br="6px">
          <Div display="flex" width="100%" alignI="center" padding="20px 0px">
            <Div width="30%">
              {"Wallet "} {" > "}
              {showTransactionType}
            </Div>
            <Div width="40%">
              <TransactionHeader searchtitle="Search" showSearchFilter={true} />
            </Div>
            <Div width="30%">
              {/* <Filters
                wd="100%"
                show="none"
                title="Filter"
                options={["None", "Name", "Location", "Rating", "List"]}
              /> */}
              <Dropdown className="text-end">
                <Dropdown.Toggle
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    background: "none",
                    color: "#274B89",
                    border: "none",
                  }}>
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Location</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">List</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Div>
          </Div>
          <Div display="flex" width="100%" gap="30px">
            <Div gap="20px" display="flex" width="30%" flexDirection="column">
              {!isLoading ? (
                <>
                  <Loader count={1} width={346} height={157} />
                  <Loader count={1} width={346} height={157} />
                  <Loader count={1} width={346} height={157} />
                </>
              ) : (
                walletData?.map((walletType, index) => (
                  <Walletcards
                    key={index}
                    type={walletType.name}
                    image={walletType.image}
                    amount={walletType.balance}
                    activity={walletType.transactions}
                    bg={walletType.color}
                    hasActivity={false}
                    hasBrd={
                      showTransactionType === walletType.name ? true : false
                    }
                    showUserTransaction={() =>
                      showUserTransaction(walletType.name)
                    }
                  />
                ))
              )}
            </Div>
            {
              <Div
                width="70%"
                padding="10px 20px 40px"
                maxHeight="500px"
                height="500px"
                ov="scroll"
                border="1px solid #e5e5e5"
                br="6px">
                {userTransaction?.transactions?.map((transaction, index) => (
                  <TransactionActivities
                    key={index}
                    user={transaction.user}
                    amount={transaction.amount}
                    date={transaction.createdAt}
                    id={transaction._id}
                    activity={userTransaction}
                  />
                ))}
              </Div>
            }
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Transactions;
