import { DISCOVER, REQUESTS, WALLET, TASKS } from "../../../../utilities/static/route-const";
import spottrIcon from "assets/svg/mainIcon.svg"
import wallet from "assets/svg/wallet.svg"
import tasks from "assets/svg/tasks.svg"
import requests from "assets/svg/requests.svg"
export const headerMenuData = [
  {
    icon:spottrIcon,
    text: "Discover",
    isActive: true,
    link: DISCOVER,
  },
  {
    icon:requests,
    text: "Requests",
    isActive: false,
    link: REQUESTS,
  },
  {
    icon:wallet,
    text: "Wallet",
    isActive: false,
    link: WALLET
  },
  {
    icon:tasks,
    text: "Tasks",
    isActive: false,
    link: TASKS,
  },
];
