import Modal from "./Modal";

function MenuModal({ isMenuModalIn, setIsMenuModalIn }) {
  return (
    <Modal isModalIn={isMenuModalIn} setIsModalIn={setIsMenuModalIn}>
      <h2>Menu Modal</h2>
    </Modal>
  );
}

export default MenuModal;
