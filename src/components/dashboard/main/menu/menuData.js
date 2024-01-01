import savedIcon from "assets/sidemenuicons/saved.svg";
import savedActiveIcon from "assets/sidemenuicons/savedActive.svg";
import opportunitiesIcon from "assets/sidemenuicons/opportunities.svg";
import opportunitiesActiveIcon from "assets/sidemenuicons/opportunitiesActive.svg";
import scanIcon from "assets/sidemenuicons/scan.svg";
import scanActiveIcon from "assets/sidemenuicons/scanActive.svg";
import buyIcon from "assets/sidemenuicons/buy.svg";
import buyActiveIcon from "assets/sidemenuicons/buyActive.svg";
import transcationIcon from "assets/sidemenuicons/transaction.svg";
import transcationActiveIcon from "assets/sidemenuicons/transactionActive.svg";
import referIcon from "assets/sidemenuicons/user-refer.svg";
import referActiveIcon from "assets/sidemenuicons/user-referActive.svg";
import settingsIcon from "assets/sidemenuicons/settings.svg";
import settingsActiveIcon from "assets/sidemenuicons/settingsActive.svg";
import helpIcon from "assets/sidemenuicons/help.svg";
import helpActiveIcon from "assets/sidemenuicons/helpActive.svg";
import spottrIcon from "assets/svg/mainIcon.svg"

import {
  SAVED,
  OPPORTUNITIES,
  SCANBARCODE,
  BUY,
  TRANSACTIONS,
  REFERALS,
  SETTINGS,
  HELP,
  MYTASKS,
} from "utilities/static/route-const";

export const menuData = [
  {
    icon: spottrIcon,
    iconActive: savedActiveIcon,
    text: "Dashboard",
    isActive: true,
    link: SAVED,
  },
  {
    icon: savedIcon,
    iconActive: savedActiveIcon,
    text: "Saved",
    isActive: false,
    link: SAVED,
  },
  {
    icon: opportunitiesIcon,
    iconActive: opportunitiesActiveIcon,
    text: "Manage Opportunities",
    isActive: false,
    link: OPPORTUNITIES,
  },
  {
    icon: opportunitiesIcon,
    iconActive: opportunitiesActiveIcon,
    text: "My Tasks",
    isActive: false,
    link: MYTASKS,
  },
  {
    icon: scanIcon,
    iconActive: scanActiveIcon,
    text: "Scan Barcode",
    isActive: false,
    link: SCANBARCODE,
  },
  // {
  //   icon: buyIcon,
  //   iconActive: buyActiveIcon,
  //   text: "Buy Coins",
  //   isActive: false,
  //   link: BUY,
  // },
  {
    icon: transcationIcon,
    iconActive: transcationActiveIcon,
    text: "Transaction Activity",
    isActive: false,
    link: TRANSACTIONS,
  },
  {
    icon: referIcon,
    iconActive: referActiveIcon,
    text: "Refer and Earn",
    isActive: false,
    link: REFERALS,
  },
  {
    icon: settingsIcon,
    iconActive: settingsActiveIcon,
    text: "Settings",
    isActive: false,
    link: SETTINGS,
  },
  {
    icon: helpIcon,
    iconActive: helpActiveIcon,
    text: "Help/Feedback",
    isActive: false,
    link: HELP,
  },
];
