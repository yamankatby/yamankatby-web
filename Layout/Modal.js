import { CSSTransition } from "react-transition-group";

function Modal({ isModalIn, setIsModalIn, children }) {
  return (
    <CSSTransition
      in={isModalIn}
      classNames="modal"
      timeout={300}
      unmountOnExit
    >
      <div
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40"
        onClick={() => setIsModalIn(false)}
      >
        <div
          className="modal-container h-full sm:h-auto p-6 md:p-8 lg:p-10 xl:p-14 bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
