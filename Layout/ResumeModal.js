import Modal from "./Modal";

function ResumeModal({ isResumeModalIn, setIsResumeModalIn }) {
  return (
    <Modal isModalIn={isResumeModalIn} setIsModalIn={setIsResumeModalIn}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="text-4xl font-serif">Resume / CV</h2>
          <p className="text-text font-medium mt-1">
            Like every design in 2021, choose a theme.
          </p>
        </div>

        <div className="flex mt-14">
          <div className="flex-1 h-24 flex justify-between bg-black bg-opacity-5">
            <div className="flex flex-col m-4 justify-between">
              <Paragraph color="black" />
              <Arrow color="black" />
            </div>
            <span
              className="text-3xl font-serif self-end"
              style={{ marginBottom: "-0.6rem" }}
            >
              Light
            </span>
          </div>

          <div className="ml-14 flex-1 h-24 flex justify-between bg-black">
            <div className="flex flex-col m-4 justify-between">
              <Paragraph color="white" />
              <Arrow color="white" />
            </div>
            <span
              className="text-3xl font-serif self-end text-white"
              style={{ marginBottom: "-0.6rem" }}
            >
              Dark
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function Paragraph({ color }) {
  return (
    <svg
      width={38}
      height={19}
      viewBox="0 0 38 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={color} d="M0 0h38v1H0zM0 9h38v1H0zM0 18h19v1H0z" />
    </svg>
  );
}

function Arrow({ color }) {
  return (
    <svg
      width={15}
      height={21}
      viewBox="0 0 15 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={color} d="M7.5 0v20h-1V0z" />
      <path
        fill={color}
        d="M14.124 13.725l-7.071 7.071-.708-.707 7.071-7.071z"
      />
      <path fill={color} d="M.707 13l7.071 7.071-.707.707L0 13.708z" />
    </svg>
  );
}

export default ResumeModal;
