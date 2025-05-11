import SportsGamesXOne from "../../assets/Home/Dollar_icon.svg";
import SportsGamesXTwo from "../../assets/Home/idea_icon.svg";
import SportsGamesXThree from "../../assets/Home/strategy_icon.svg";
import howItWorksIcon from "../../assets/icons/Icon_Fantasy.svg";
import howItWorksIconTwo from "../../assets/icons/Icon_Trading.svg";
import howItWorksIconThree from "../../assets/icons/Icon_StrikeOption.svg";

const homeData = {
  SectionOneHead: "Sports GameX INC",
  SectionOneDesc: "Sports GameX Inc, headquartered in Philadelphia, PA, proudly presents the GX App – a groundbreaking sports platform where fans don't just watch the game, they invest and trade in it.",
  SectionOneDescTwo: "GX App offers a powerful blend of real-time trading, fantasy contests, and strike/options feature. It’s where sports passion meets market strategy — all in one seamless app.",
  SectionOneBtnText: "About Us",
  SectionTwoHeadOneText: "About",
  SectionTwoHeadTwoText: "Us",
  SectionTwoDesc: "GX App is more than just a platform—it’s a movement to reshape how fans interact with sports. For decades, sports fandom has been about passion, support, and loyalty. But what if it could also be about growth, empowerment, and financial opportunities?",
  SectionThreeHeadOneText: "Why",
  SectionThreeHeadTwoText: "GX App?",
  SectionThreeDesc: "At GX, we are not just reimagining the sports industry—we’re creating an entirely new way for fans to be part of the action.",
  SectionFourHeadOneText: "Our",
  SectionFourHeadTwoText: "Mission",
  SectionFourDesc: "Our mission is to empower sports fans, both seasoned and newcomers, with a cutting-edge Sports Trading App that transforms their interaction with sports into a thoughtful and skill-based activity.",
  SectionFiveHeadOneText: "Innovating",
  SectionFiveHeadTwoText: "Sports",
  SectionFiveHeadThreeText: "Investments",
  SectionFiveDesc: "By combining technology, passion, and innovation, we aim to create an ecosystem where fans can actively participate in the journey of their favorite athletes",
  SectionSixHeadOneText: "How",
  SectionSixHeadTwoText: "It Works",
  SectionSixDesc:
    "Head over to our Preview Page to explore detailed app screens and see how SportsGameX will bring sports trading to life.",
  SectionSixBtnText: "App Preview",
};

const InnovatingSportsObj = {
  box1Head: "Trade like a Pro",
  box1SubDesc: "Buy, sell, and trade  shares of athletes, just like the stock market.",
  box2Head: "Fantasy, Reimagined",
  box2SubDesc: "Build your fantasy lineup using the players you've invested in from your portfolio.",
  box3Head: "Strike and Options",
  box3SubDesc: "Predict whether an athlete’s value will go up or down, trade options on their performance",
  box4Head: "Transparency & Trust",
  box4SubDesc: "We are committed to providing secure, transparent, and reliable services.",
};

const SectionFourHeadArr = [
  {
    id: 1,
    num: "01.",
    title: "Redefine Sports Engagement",
    description: "We aim to bridge the gap between fans and athletes by enabling users to own shares in the players they love.",
  },
  {
    id: 2,
    num: "02.",
    title: "Promote Financial Literacy Through Sports",
    description: "Introduce sports enthusiasts to the principles of trading, fantasy, and strike & options in a way that is simple, engaging, and rewarding.",
  },
  {
    id: 3,
    num: "03.",
    title: "Fostering Responsible Engagement",
    description: "Promoting a culture of smart, responsible trading for both seasoned traders and newcomers.",
  },
];

const homeSliderContentArr = [
  {
    id: 0,
    title: "Our Vision",
    desc: "To empower sports fans worldwide by providing a platform that merges passion, strategy, and financial literacy. We’re transforming how fans engage with the games they love.",
  },
  {
    id: 1,
    title: "Accessible To Everyone",
    desc: "Whether you’re a seasoned trader or a die-hard fan new to investing, our platform is built to be user-friendly and intuitive.",
  },
  {
    id: 2,
    title: "Real Athlete Stocks",
    desc: "Just like the stock market, we’ve created a system where market demand, and career potential determine their value.",
  },
  {
    id: 3,
    title: "Our Vision",
    desc: "To empower sports fans worldwide by providing a platform that merges passion, strategy, and financial literacy. We’re transforming how fans engage with the games they love.",
  },
  {
    id: 4,
    title: "Accessible To Everyone",
    desc: "Whether you’re a seasoned trader or a die-hard fan new to investing, our platform is built to be user-friendly and intuitive.",
  },
  {
    id: 5,
    title: "Real Athlete Stocks",
    desc: "Just like the stock market, we’ve created a system where market demand, and career potential determine their value.",
  },
];

const homeWhySportsGameXArr = [
  {
    id: 0,
    imgSrc: SportsGamesXOne,
    title: "Turn Your Passion into Profits",
    desc: "Sports are more than entertainment; they’re an opportunity. With GX App, your passion for the  game translates into a potential for financial growth.",
  },
  {
    id: 1,
    imgSrc: SportsGamesXTwo,
    title: "A First-of-Its-Kind Concept",
    desc: "GX App bridges the worlds of sports fandom and financial trading, opening up a unique opportunity for fans to actively participate in the success of their favorite players.",
  },
  {
    id: 2,
    imgSrc: SportsGamesXThree,
    title: "Build Your Own Strategy",
    desc: "Customize your portfolio, experiment with trading, fantasy, and strike & options strategies, and grow as both a fan and an investor. The platform provides all the tools and insights you need to succeed.",
  },
];

const howItWorks = [
  {
    id: 1,
    icon: howItWorksIconTwo,
    title: "Trading",
    desc: "GX lets fans trade athlete shares, turning sports knowledge into investment opportunities.",
    route: "gxapp"
  },
  {
    id: 2,
    icon: howItWorksIcon,
    title: "Fantasy",
    desc: "In fantasy, you can create your lineup using players from your portfolio and compete to win exciting prizes.",
    route: "fantasy"
  },
  {
    id: 3,
    icon: howItWorksIconThree,
    title: "Strike & Options",
    desc: "Predict athlete performance, trade options, and turn your sports knowledge into profit.",
    route: "strike_options"
  },
]

export {
  homeData,
  SectionFourHeadArr,
  homeSliderContentArr,
  homeWhySportsGameXArr,
  InnovatingSportsObj,
  howItWorks,
};
