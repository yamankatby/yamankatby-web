import Modal from "./Modal";

function ResumeModal({ isResumeModalIn, setIsResumeModalIn }) {
  return (
    <Modal isModalIn={isResumeModalIn} setIsModalIn={setIsResumeModalIn}>
      <h2>Resume / CV Modal</h2>
    </Modal>
  );
}

export default ResumeModal;
