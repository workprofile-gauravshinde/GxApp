import { Outlet } from "react-router-dom";
import BackgroundGraphics from "./components/BackgroundGraphics";
import DashboardNav from "./components/DashboardNav";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { getWithExpiry } from "./utils/localStorageWithExpiry";
import DashboardLoginModal from "./components/DashboardLoginModal";

const Dashboard = () => {
  const [showLoginModal, setShowLoginModal] = useState(null);

  const openLoginModal = () => {
    setShowLoginModal(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (!getWithExpiry("user")) {
      openLoginModal();
    } else {
      closeLoginModal();
    }
  }, [showLoginModal]);

  return (
    <div className="relative h-full w-full overflow-clip font-body text-white">
      <BackgroundGraphics />
      <DashboardNav />
      <Outlet />
      <Footer />
      <DashboardLoginModal show={showLoginModal} onVerify={closeLoginModal} />
    </div>
  );
};

export default Dashboard;
