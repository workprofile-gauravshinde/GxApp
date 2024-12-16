const BackgroundGraphics = () => {
  return (
    <>
      <div className="absolute -bottom-40 -left-28 -z-10 h-[400px] w-[400px] rounded-full bg-neonYellow opacity-50 blur-[300px]  md:bottom-6 md:left-40"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[570px] w-[1370px] -rotate-45  bg-[radial-gradient(ellipse_at_center,_#000000_0%,_#0A1832_100%)] opacity-10 blur-3xl"></div>
      <div className="absolute -right-36 -top-20 -z-10 h-[200px] w-[400px] -rotate-45 bg-[radial-gradient(ellipse_at_center,_#4C736C_0%,_#0A1832_100%)] opacity-50 blur-3xl md:-right-10"></div>
    </>
  );
};

export default BackgroundGraphics;
