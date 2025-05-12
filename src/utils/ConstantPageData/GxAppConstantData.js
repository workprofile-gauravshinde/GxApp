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
  sectionOneHead: "Trading",
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
  sectionFiveDesc: "At Sports GameX INC, we believe that investing in player stocks should be as easy as cheering for your favorite team. That's why we've designed our platform to offer a seamless and hassle-free trading experience.",
  sectionSixHead: "Got questions?",
  sectionSixHeadTwo: "We've got answers",
};

const GX_FAQS = [
  {
    key: "1",
    label: "What is the GX App?",
    children: "GX is a sports stock trading app where users can buy and sell virtual shares of athletes across six major sports. You can use your owned or market-bought players to participate in free fantasy contests, turning your portfolio into your game roster. GX also offers Strike and Options trading, letting you predict future athlete stock prices and profit from performance — combining fantasy sports with real financial strategy.",
  },
  {
    key: "2",
    label: "What sports are available on GX, and what future sports will be included?",
    children: `GX currently features Football, Basketball, Baseball, Hockey, Soccer, and Cricket, all available for athlete stock trading, fantasy contests, and Strike/Options trading. Users can predict price movements, compete using their portfolios, and trade based on real-world performance. Upcoming sports include Tennis, Golf, Mixed Martial Arts (MMA), and Esports.`,
  },
  {
    key: "3",
    label: "How do I buy and sell athlete stocks on GX?",
    children: `Simply search for a player, view their stock profile, and place a buy or sell order at the current market or limit price. You can also track performance charts and recent activity before making a trade.`,
  },
  {
    key: "4",
    label: "How are player prices determined?",
    children: "Player prices on GX are driven by real-world performance, user demand, and market activity — just like a stock market. At IPO, players are priced based on their category (A to F), sport, and regional popularity.",
  },
  {
    key: "5",
    label: "What is the Strike/Options feature?",
    children: "The Strike/Options feature lets you predict whether an athlete's stock price will go up or down within a set time period. If your prediction is right, you earn a payout based on your accuracy and stake — similar to short-term options trading.",
  },
  {
    key: "6",
    label: "Can I use the same players for both trading and fantasy?",
    children: "Absolutely. Once you own a player’s stock, you can hold it for long-term value or use it to compete in fantasy contests at no extra cost.",
  },
  {
    key: "7",
    label: "How is GX Fantasy different from other fantasy sports platforms?",
    children: "GX Fantasy is built around your athlete stock portfolio. Instead of redrafting teams weekly, you use players you own or buy from the market. Most contests are free if you own the required stocks, creating a seamless and strategic experience.",
  },
  {
    key: "8",
    label: "What happens if I sell a player who is in an active fantasy contest?",
    children: "If you sell a player during an active contest, you won’t receive any fantasy points from them. To earn points, you must hold the player’s stock until the game ends.",
  },
  {
    key: "9",
    label: "How is fantasy scoring calculated on GX?",
    children: "Fantasy points are based on live game stats like goals, assists, touchdowns, wickets, etc., and vary by sport. Each contest shows its scoring breakdown before you join.Is real money involved in GX trading and contests? Yes. You use real money to buy athlete stocks and enter premium contests. Funds are securely handled through verified payment gateways.",
  },
  {
    key: "10",
    label: "Is real money involved in GX trading and contests?",
    children: "Yes. You use real money to buy athlete stocks and enter premium contests. Funds are securely handled through verified payment gateways.",
  }, 
  {
    key: "11",
    label: "Can I withdraw my earnings? If yes, how?",
    children: "Yes. You can withdraw profits from trades or fantasy winnings through your linked bank account or payment method after standard verification.",
  },
  {
    key: "12",
    label: "Are there any fees or charges for trading or entering contests?",
    children: "GX charges small transaction fees on trades and entry fees for premium contests. Most contests are free if you own the required player stock.",
  },
  {
    key: "13",
    label: "How does GX ensure fair play and prevent manipulation?",
    children: "GX uses trusted sports data providers, monitors activity for suspicious behavior, and enforces strict contest rules to ensure fairness for all users.",
  },
  {
    key: "14",
    label: "Is my data and payment information safe on GX?",
    children: "Yes. GX uses advanced encryption, secure payment processors, and follows global data protection practices to safeguard your information.",
  },
  {
    key: "15",
    label: "Is the GX App legal in the USA?",
    children: "Yes. GX operates within the legal frameworks of most U.S. states by offering skill-based contests. Fantasy sports are considered legal under the UIGEA, but laws vary by state — please check your local regulations.",
  },
  {
    key: "16",
    label: "Is the GX App legal in India?",
    children: "GX is designed as a skill-based platform in line with Indian laws that permit games of skill. However, state regulations vary, and some regions may restrict such platforms. Users are advised to review local laws before participating.",
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
