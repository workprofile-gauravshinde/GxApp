import playerGraph from "../../assets/icons/Graph.svg";
import playerMoments from "../../assets/icons/Movements.svg";
import playerContracts from "../../assets/icons/contract.svg";
import topAthletesUp from "../../assets/icons/UpandDown.svg";
import topAthletesFilter from "../../assets/icons/filter.svg";

const STRIKE_CONST = {
  sectionOneHead: "Strike & Options",
  sectionOneDesc: "Predict whether an athlete’s value will go up or down, trade options on their performance, and turn your sports knowledge into daily profit.",
  sectionOnePlayStore: "",
  sectionOneAppleStore: "",
  sectionTwoHead: "Player Profile",
  sectionTwoDesc: "Track real-time movement with interactive charts, and set Target and Stop markers for precision control",
  sectionThreeHead: "Top Athletes",
  sectionThreeDesc: "Select top athletes from the list for your options trading strategy.",
};

const PLAYER_PROFILE = [
  {
    key: "1",
    label: "Interactive Graph",
    children: "The interactive graph displays live stock performance, allowing you to set precise Target and Stop levels to manage your risk and reward.",
    icon: playerGraph,
  },
  {
    key: "2",
    label: "Predict Movements",
    children: "Make your move by choosing the direction you believe the stock's value will take and earn based on your prediction.",
    icon: playerMoments,
  },
  {
    key: "3",
    label: "Buy or Sell Contracts",
    children: "Lock in your prediction by buying or selling contracts based on an athlete’s performance.",
    icon: playerContracts,
  },
];

const TOP_ATHLETES = [
  {
    key: "1",
    label: "Up and Down",
    children: "Make your move by choosing the direction you believe the stock's value will take and earn based on your prediction.",
    icon: topAthletesUp,
  },
  {
    key: "2",
    label: "Filter",
    children: "Use the sports filter to quickly select players from a specific sport.",
    icon: topAthletesFilter,
  },
];

export {
  STRIKE_CONST,
  PLAYER_PROFILE,
  TOP_ATHLETES,
};
