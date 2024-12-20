import playerStats from "../../assets/icons/PerformanceStatsIcon.svg";
import playerInfo from "../../assets/icons/PlayerInfoIcon.svg";
import playerBookmark from "../../assets/icons/BookmarkIcon.svg";
import transactionStats from "../../assets/icons/TransactionIcon.svg";
import transactionFilter from "../../assets/icons/FilterIcon.svg";
import transactionOrder from "../../assets/icons/OrderIcon.svg";
import analyticsOverView from "../../assets/icons/InvestmentIcon.svg";
import analyticsSports from "../../assets/icons/SportsAllocation.svg";
import analyticsShare from "../../assets/icons/ShareAnalysisIcon.svg";

const GxAppConst = {
  sectionOneHead: "GX App",
  sectionOneDesc:
    "GX is a real-time sports trading app that allows users to buy and sell shares in athletes ",
  sectionOnePlayStore: "",
  sectionOneAppleStore: "",
  sectionTwoHead: "Player Profiles",
  sectionTwoDesc:
    "Elevate your knowledge and trading decisions with our comprehensive player profiles.",
  sectionThreeHead: "Transactions",
  sectionThreeDesc:
    "Track your financial journey, detailing pending, completed, and canceled transactions at a glance.",
  sectionFourHead: "Analytics",
  sectionFourDesc:
    "Unlock the power of your portfolio with our comprehensive analytics dashboard.",
  sectionFiveHead: "Invest",
  sectionFiveHeadTwo: "with Ease",
  sectionFiveDesc:
    "At SportsGameX, we believe that investing in player stocks should be as easy as cheering for your favorite team. That's why we've designed our platform to offer a seamless and hassle-free trading experience.",
  sectionSixHead: "Got questions?",
  sectionSixHeadTwo: "We've got answers",
};

const GX_FAQS = [
  {
    key: "1",
    label: "Is my personal and financial information secure on Sports GameX?",
    children:
      "Yes, Sports GameX uses encryption technology to ensure the security and privacy of your personal and financial information.",
  },
  {
    key: "2",
    label: "How can I track the status of my orders?",
    children: `You can easily track your orders on the "Transaction Screen" in the app. This screen shows the status of each transaction (Pending, Completed, or Cancelled), and you can apply filters to sort by factors like order status, type, and sport.`,
  },
  {
    key: "3",
    label: "How do I start investing in player stocks?",
    children: `To start investing, create an account, complete the verification steps, and add funds. Once you're set-up, navigate to the "Explore" tab where you can view available player stocks and make your first purchase.`,
  },
  {
    key: "4",
    label: "Can I sell my player stocks at any time?",
    children:
      "Yes, you can sell your player stocks anytime through the app. Go to your portfolio, select the stock you wish to sell, and proceed with the sale.",
  },
  {
    key: "5",
    label: "Are there any restrictions on trading hours?",
    children:
      "GX allows trading 24/7, providing flexibility for users in different time zones. Users can engage in sports trading at any time, even outside traditional sports event hours.",
  },
  {
    key: "6",
    label: "Can I trade stocks during live sports events?",
    children:
      "Yes, GX allows users to trade stocks in real-time, even during live sports events. This feature adds excitement and the opportunity to react to unfolding game situations.",
  },
  {
    key: "7",
    label: "What sports can I trade on GX?",
    children:
      "The available sports include Basketball, Soccer, Baseball, Cricket, Hockey, and Football. You can purchase player stocks from any of these sports.",
  },
];

const PLAY_PROFILE = [
  {
    key: "1",
    label: "Performance stats",
    children:
      "The player's current stock price, accompanied by a graphical representation of its performance over time, allows you make informed trading decisions.",
    icon: playerStats,
  },
  {
    key: "2",
    label: "Player information",
    children: "A brief player bio helps you get to know the player better.",
    icon: playerInfo,
  },
  {
    key: "3",
    label: "Bookmark Player",
    children: "Ability to bookmark favorite players for quick and easy access",
    icon: playerBookmark,
  },
];

const TRANSACTION_ARR = [
  {
    key: "1",
    label: "Transaction Status",
    children:
      "Instantly check the status of your orders to see if they’re pending, completed, or cancelled",
    icon: transactionStats,
  },
  {
    key: "2",
    label: "Filter Options",
    children:
      "Filter transactions by status, order type, or sports category to focus on the exact data you need.",
    icon: transactionFilter,
  },
  {
    key: "3",
    label: "Order Overview",
    children:
      "Get a clear view of all your transactions in one place, helping you make informed decisions",
    icon: transactionOrder,
  },
];

const ANALYTICS_ARR = [
  {
    key: "1",
    label: "Investment Overview",
    children:
      "Keep track of your total invested amount and current investment value",
    icon: analyticsOverView,
  },
  {
    key: "2",
    label: "Sports Allocation",
    children:
      "See exactly what percentage of your investments is dedicated to each sport",
    icon: analyticsSports,
  },
  {
    key: "3",
    label: "Share Analysis",
    children:
      "View the total shares held in each category and identify opportunities to diversify",
    icon: analyticsShare,
  },
];

const InvestWithEaseObj = {
  orders: {
    title: "Orders",
    desc: "With SportsGameX, investing in player stocks is fast and efficient.",
  },
  analyze: {
    title: "Analyze",
    desc: "Dive into detailed player stats, performance trends to make informed investment decisions.",
  },
  status: {
    title: "Status",
    desc: "Dive deeper into your transaction history for a comprehensive overview of your trading activity.",
  },
  multiple: "Multiple Sports",
};

export {
  GxAppConst,
  GX_FAQS,
  PLAY_PROFILE,
  TRANSACTION_ARR,
  ANALYTICS_ARR,
  InvestWithEaseObj,
};
