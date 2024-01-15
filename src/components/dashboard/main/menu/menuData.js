import savedIcon from "assets/sidemenuicons/saved.svg";
import savedActiveIcon from "assets/sidemenuicons/savedActive.svg";
import opportunitiesIcon from "assets/sidemenuicons/opportunities.svg";
import opportunitiesActiveIcon from "assets/sidemenuicons/opportunitiesActive.svg";
import transcationIcon from "assets/sidemenuicons/transaction.svg";
import transcationActiveIcon from "assets/sidemenuicons/transactionActive.svg";
import settingsIcon from "assets/sidemenuicons/settings.svg";
import settingsActiveIcon from "assets/sidemenuicons/settingsActive.svg";
import helpIcon from "assets/sidemenuicons/help.svg";
import helpActiveIcon from "assets/sidemenuicons/helpActive.svg";
import spottrIcon from "assets/svg/mainIcon.svg"
import membersIcon from "assets/svg/membersIcon.svg"
import customerIcon from "assets/svg/customerIcon.svg"

import {
  DASHBOARDHOME,
  SAVED,
  OPPORTUNITIES,
  SCANBARCODE,
  BUY,
  TRANSACTIONS,
  REFERALS,
  SETTINGS,
  HELP,
  MYTASKS,
  MEMBERS,
} from "utilities/static/route-const";

export const menuData = [
  {
    icon: spottrIcon,
    iconActive: savedActiveIcon,
    text: "Dashboard",
    isActive: true,
    link: DASHBOARDHOME,
  },
  {
    icon: membersIcon,
    iconActive: savedActiveIcon,
    text: "Members",
    isActive: false,
    link: MEMBERS,
  },
  {
    icon: customerIcon,
    iconActive: savedActiveIcon,
    text: "Customers",
    isActive: false,
    link: DASHBOARDHOME,
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
    text: "Help",
    isActive: false,
    link: HELP,
  },
  
  
];
