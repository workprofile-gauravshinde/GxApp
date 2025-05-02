import playerStats from "../../assets/icons/PerformanceStatsIcon.svg";
import playerInfo from "../../assets/icons/PlayerInfoIcon.svg";
import playerBookmark from "../../assets/icons/BookmarkIcon.svg";
import transactionStats from "../../assets/icons/TransactionIcon.svg";
import transactionFilter from "../../assets/icons/FilterIcon.svg";
import transactionOrder from "../../assets/icons/OrderIcon.svg";
import analyticsOverView from "../../assets/icons/InvestmentIcon.svg";
import analyticsSports from "../../assets/icons/SportsAllocation.svg";
import analyticsShare from "../../assets/icons/ShareAnalysisIcon.svg";

const FantasyConst = {
    sectionOneHead: "Fantasy",
    sectionOneDesc: "GX Fantasy is an innovative fantasy sports experience that integrates player investments with fantasy gameplay.",
    sectionOnePlayStore: "",
    sectionOneAppleStore: "",
    sectionTwoHead: "Recommended Lineups",
    sectionTwoDesc: "GX auto-builds your contest lineup using players from your portfolio—quick, smart, and hassle-free.",
    sectionThreeHead: "Select Players",
    sectionThreeDesc: "Build your lineup by selecting players from your portfolio or the market.",
    sectionFourHead: "Rewards",
    sectionFourDesc: "Claim your rewards with ease and filter contests based on the prize you're aiming for.",
    sectionFiveHead: "How GX Fantasy works?",
  };

  const RECOMMENDED_LINEUPS_ARR = [
    {
      key: "1",
      label: "Personalization",
      children:
        "The player's current stock price, accompanied by a graphical representation of its performance over time, allows you make informed trading decisions.",
      icon: playerStats,
    },
    {
      key: "2",
      label: "Edit Easily",
      children: "A brief player bio helps you get to know the player better.",
      icon: playerInfo,
    },
    {
      key: "3",
      label: "Assign Roles",
      children: "Ability to bookmark favorite players for quick and easy access",
      icon: playerBookmark,
    },
  ];
  
  const SELECT_PLAYERS_ARR = [
    {
      key: "1",
      label: "Select Players Easily",
      children:
        "Instantly check the status of your orders to see if they’re pending, completed, or cancelled",
      icon: transactionStats,
    },
    {
      key: "2",
      label: "Pick From Both Teams",
      children:
        "Filter transactions by status, order type, or sports category to focus on the exact data you need.",
      icon: transactionFilter,
    },
    {
      key: "3",
      label: "View Key Stats",
      children:
        "Get a clear view of all your transactions in one place, helping you make informed decisions",
      icon: transactionOrder,
    },
  ];
  
  const REWARDS_ARR = [
    {
      key: "1",
      label: "Win Exciting Prizes",
      children:
        "Keep track of your total invested amount and current investment value",
      icon: analyticsOverView,
    },
    {
      key: "2",
      label: "Easy Claim Process",
      children:
        "See exactly what percentage of your investments is dedicated to each sport",
      icon: analyticsSports,
    },
    {
      key: "3",
      label: "Prize Filter",
      children:
        "View the total shares held in each category and identify opportunities to diversify",
      icon: analyticsShare,
    },
  ];

  const GX_FANTASY_WORKS = [
    {
      key: "1",
      label: "Portfolio Check",
      children: "Begin by checking your current portfolio to see if you already own the required number of playersfrom the participating teams. GX also offers a recommended lineup based on your holdings forseamless contest entry.",
      icon: playerStats,
    },
    {
      key: "2",
      label: "Player Acquisition",
      children: "A brief player bio helps you get to know the player better.",
      icon: playerInfo,
    },
    {
      key: "3",
      label: "Compete & Win",
      children: "Ability to bookmark favorite players for quick and easy access",
      icon: playerBookmark,
    },
  ];

  export {
    FantasyConst,
    RECOMMENDED_LINEUPS_ARR,
    SELECT_PLAYERS_ARR,
    REWARDS_ARR,
    GX_FANTASY_WORKS,
  };
  