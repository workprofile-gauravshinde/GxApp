import playerStats from "../../assets/icons/PerformanceStatsIcon.svg";
import playerInfo from "../../assets/icons/PlayerInfoIcon.svg";
import playerBookmark from "../../assets/Fantasy/assign_roles.svg";
import editPlayer from "../../assets/Fantasy/edit.svg";
import transactionStats from "../../assets/Fantasy/select.svg";
import transactionFilter from "../../assets/icons/FilterIcon.svg";
import transactionOrder from "../../assets/icons/OrderIcon.svg";
import analyticsOverView from "../../assets/Fantasy/prize.svg";
import analyticsSports from "../../assets/Fantasy/easy_claim_process.svg";

const FantasyConst = {
    sectionOneHead: "Fantasy",
    sectionOneDesc: "GX Fantasy is an innovative fantasy sports experience that integrates player investments with fantasy gameplay.",
    sectionOnePlayStore: "",
    sectionOneAppleStore: "",
    sectionTwoHead: "Recommended Lineups",
    sectionTwoDesc: "GX App auto-builds your contest lineup using players from your portfolio—quick, smart, and hassle-free.",
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
      children: "Get a personalized lineup automatically generated from your existing portfolio, optimized for the best performance.",
      icon: playerInfo,
    },
    {
      key: "2",
      label: "Edit Easily",
      children: "Swap any player with one from your portfolio or the market to create your perfect lineup.",
      icon: editPlayer,
    },
    {
      key: "3",
      label: "Assign Roles",
      children: "Boost your score by assigning key roles with special multipliers to your top players.",
      icon: playerBookmark,
    },
  ];
  
  const SELECT_PLAYERS_ARR = [
    {
      key: "1",
      label: "Select Players Easily",
      children: "Select players you already own or discover new talent from the player market",
      icon: transactionStats,
    },
    {
      key: "2",
      label: "Pick From Both Teams",
      children: "Select players from either participating team for maximum flexibility.",
      icon: transactionFilter,
    },
    {
      key: "3",
      label: "View Key Stats",
      children: "Easily view player positions, key stats, and season match history",
      icon: transactionOrder,
    },
  ];
  
  const REWARDS_ARR = [
    {
      key: "1",
      label: "Win Exciting Prizes",
      children: "Earn amazing rewards like MacBooks, iPhones, or cash prizes.",
      icon: analyticsOverView,
    },
    {
      key: "2",
      label: "Easy Claim Process",
      children: "Claim your rewards effortlessly with a simple and straightforward process.",
      icon: analyticsSports,
    },
    {
      key: "3",
      label: "Prize Filter",
      children: "Your rewards, your way. Select any prize to discover all the contests where you can win it.",
      icon: transactionFilter,
    },
  ];

  const GX_FANTASY_WORKS = [
    {
      key: "1",
      label: "Portfolio Check",
      children: "Begin by checking your current portfolio to see if you already own the required number of players from the participating teams. GX also offers a recommended lineup based on your holdings for seamless contest entry.",
      icon: playerStats,
    },
    {
      key: "2",
      label: "Player Acquisition",
      children: "Missing a few players? Head to the GX Market to invest in them. Once acquired, these players become a permanent part of your portfolio and can be traded anytime.",
      icon: playerInfo,
    },
    {
      key: "3",
      label: "Compete & Win",
      children: "Join the fantasy match with your finalized lineup and compete for exciting rewards. Win or lose, the players you’ve added remain in your portfolio—ready for future contests or trades.",
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
  