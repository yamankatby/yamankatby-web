import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Popup from "./Popup";

function Layout({ children }) {
  const [isMoreModalIn, setIsMoreModalIn] = useState(false);
  const [isResumeModalIn, setIsResumeModalIn] = useState(false);
  const [isSubscribeModalIn, setIsSubscribeModalIn] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Nav
          setIsMoreModalIn={setIsMoreModalIn}
          setIsResumeModalIn={setIsResumeModalIn}
          setIsSubscribeModalIn={setIsSubscribeModalIn}
        />
        <main className="flex-1">{children}</main>
        <Footer setIsResumeModalIn={setIsResumeModalIn} />
      </div>
      <Popup isPopupIn={isMoreModalIn} setIsPopupIn={setIsMoreModalIn} />
    </>
  );
}

export default Layout;
