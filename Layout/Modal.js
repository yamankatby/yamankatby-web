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
          className="modal-container relative h-full sm:h-auto p-6 md:p-8 lg:p-10 xl:p-14 bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modal-x absolute top-6 md:top-8 lg:top-10 xl:top-14 right-6 md:right-8 lg:right-10 xl:right-14 w-7 h-7"
            onClick={() => setIsModalIn(false)}
          />
          {children}
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
