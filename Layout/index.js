import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MenuModal from "./MenuModal";
import SubscribeModal from "./SubscribeModal";
import ResumeModal from "./ResumeModal";

function Layout({ children }) {
  const [isMenuModalIn, setIsMenuModalIn] = useState(false);
  const [isResumeModalIn, setIsResumeModalIn] = useState(false);
  const [isSubscribeModalIn, setIsSubscribeModalIn] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Nav
          setIsMenuModalIn={setIsMenuModalIn}
          setIsResumeModalIn={setIsResumeModalIn}
          setIsSubscribeModalIn={setIsSubscribeModalIn}
        />
        <main className="flex-1">{children}</main>
        <Footer setIsResumeModalIn={setIsResumeModalIn} />
      </div>
      <MenuModal
        isMenuModalIn={isMenuModalIn}
        setIsMenuModalIn={setIsMenuModalIn}
      />
      <SubscribeModal
        isSubscribeModalIn={isSubscribeModalIn}
        setIsSubscribeModalIn={setIsSubscribeModalIn}
      />
      <ResumeModal
        isResumeModalIn={isResumeModalIn}
        setIsResumeModalIn={setIsResumeModalIn}
      />
    </>
  );
}

export default Layout;
