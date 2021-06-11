import { CSSTransition } from "react-transition-group";

function Popup({ isPopupIn, setIsPopupIn }) {
  return (
    <CSSTransition
      in={isPopupIn}
      classNames="popup"
      timeout={300}
      unmountOnExit
    >
      <div
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40"
        onClick={() => setIsPopupIn(false)}
      >
        <div
          className="popup-container h-full sm:h-auto p-6 md:p-8 lg:p-10 xl:p-14 bg-white"
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    </CSSTransition>
  );
}

export default Popup;
