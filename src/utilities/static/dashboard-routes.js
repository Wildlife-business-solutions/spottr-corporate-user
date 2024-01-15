import {
  DASHBOARDHOME,
  SAVED,
  OPPORTUNITIES,
  SCANBARCODE,
  BUY,
  REFERALS,
  SETTINGS,
  HELP,
  LOGOUT,
  DISCOVER,
  WALLET,
  REQUESTS,
  PROFILE,
  PROFILE2,
  PROFILE3,
  TRANSACTIONS,
  TASKS,
  ANALYSIS,
  SEARCHREQUEST,
  MESSAGES,
  PRODUCTPAGE,
  MYTASKS,
  TASKDETAILS,
  MEMBERS,
} from "./route-const";
import SavedPage from "../../pages/dashboard/main/saved";
import OpportunitiesPage from "../../pages/dashboard/main/opportunities";
import ScanBarCodePage from "../../pages/dashboard/main/scanbarcode";
import BuycoinsPage from "../../pages/dashboard/main/buy";
import TransactionsPage from "../../pages/dashboard/main/transactions";
import ReferralsPage from "../../pages/dashboard/main/referrals";
import SettingsPage from "../../pages/dashboard/main/settings";
import HelpPage from "../../pages/dashboard/main/help";
import DiscoverPage from "../../pages/dashboard/main/discover";
import RequestsPage from "../../pages/dashboard/main/requests";
import TasksPage from "../../pages/dashboard/main/tasks";
import LogoutPage from "../../pages/dashboard/main/logout";
import ProfilePage from "../../pages/dashboard/main/profile";
import Profile2 from "pages/dashboard/main/profile/profile2";
import Profile3 from "pages/dashboard/main/profile/profile3";
import AnalyticsPage from "../../pages/dashboard/main/settings/dashboardanalysis";
import SearchRequestPage from "../../pages/dashboard/main/searchrequests";
import MessagePage from "../../pages/dashboard/main/messages";
import ProductPage from "../../pages/dashboard/main/productpage";
import WalletPage from "../../pages/dashboard/main/transactions/wallet";
import MyTasks from "pages/dashboard/main/myTasks";
import TaskDetails from "pages/dashboard/main/tasks/taskDetails";
import Members from "pages/dashboard/main/members";
// import WalletPage from "pages/dashboard/main/wallet";

export const dashboardRoutes = [
  {
    path: DASHBOARDHOME,
    component: DiscoverPage,
    exact: true,
    protected: true,
    type: "navbar",
  },
  {
    path: MEMBERS,
    component: Members,
    exact: true,
    protected: true,
    type: "navbar",
  },
  {
    path: PROFILE,
    component: ProfilePage,
    exact: true,
    protected: true,
    type: "profile",
  },
  {
    path: PROFILE2,
    component: Profile2,
    exact: true,
    protected: true,
    type: "profile",
  },
  {
    path: PROFILE3,
    component: Profile3,
    exact: true,
    protected: true,
    type: "profile",
  },
  {
    path: SAVED,
    component: SavedPage,
    exact: true,
    protected: true,
    type: "section",
  },
  {
    path: OPPORTUNITIES,
    component: OpportunitiesPage,
    exact: true,
    protected: true,
    type: "section",
  },
  {
    path: MYTASKS,
    component: MyTasks,
    exact: true,
    protected: true,
    type: "section",
  },
  {
    path: SCANBARCODE,
    component: ScanBarCodePage,
    exact: true,
    protected: true,
    type: "section",
  },
  {
    path: BUY,
    component: BuycoinsPage,
    exact: true,
    protected: true,
    type: "section",
  },
  {
    path: TRANSACTIONS,
    component: TransactionsPage,
    exact: true,
    protected: true,
    type: "section",
  },
  {
    path: REFERALS,
    component: ReferralsPage,
    exact: true,
    protected: true,
    type: "section",
  },
  {
    path: SETTINGS,
    component: SettingsPage,
    exact: true,
    protected: true,
    type: "section",
  },
  {
    path: HELP,
    component: HelpPage,
    exact: true,
    protected: true,
    type: "section",
  },
  {
    path: LOGOUT,
    component: LogoutPage,
    exact: true,
    protected: true,
    type: "logout",
  },
  {
    path: DISCOVER,
    component: DiscoverPage,
    exact: true,
    protected: true,
    type: "navbar",
  },
  {
    path: WALLET,
    component: WalletPage,
    exact: true,
    protected: true,
    type: "navbar",
  },

  {
    path: REQUESTS,
    component: RequestsPage,
    exact: true,
    protected: true,
    type: "navbar",
  },
  {
    path: TASKS,
    component: TasksPage,
    exact: true,
    protected: true,
    type: "navbar",
  },
  {
    path: ANALYSIS,
    component: AnalyticsPage,
    exact: true,
    protected: true,
    type: "navbar",
  },
  {
    path: SEARCHREQUEST,
    component: SearchRequestPage,
    exact: true,
    protected: true,
    type: "navbar",
  },
  {
    path: MESSAGES,
    component: MessagePage,
    exact: true,
    protected: true,
    type: "navbar",
  },
  {
    path: PRODUCTPAGE,
    component: ProductPage,
    exact: true,
    protected: true,
    type: "section",
  },
  {
    path: TASKDETAILS,
    component: TaskDetails,
    exact: true,
    protected: true,
    type: "section",
  },
];
