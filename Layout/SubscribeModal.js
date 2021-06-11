import Modal from "./Modal";

function SubscribeModal({ isSubscribeModalIn, setIsSubscribeModalIn }) {
  return (
    <Modal isModalIn={isSubscribeModalIn} setIsModalIn={setIsSubscribeModalIn}>
      <h2>Subscribe Modal</h2>
    </Modal>
  );
}

export default SubscribeModal;
