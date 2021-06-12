import Modal from "./Modal";

function SubscribeModal({ isSubscribeModalIn, setIsSubscribeModalIn }) {
  return (
    <Modal isModalIn={isSubscribeModalIn} setIsModalIn={setIsSubscribeModalIn}>
      <form className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="text-4xl font-serif">Subscirbe</h2>
          <p className="text-text font-medium mt-1">
            Subscribe to my newsletter to be instantly informed about the new
            content I make.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-8">
          <input
            placeholder="First Name"
            className="py-2 text-xl font-serif placeholder-text border-b-2 border-black border-opacity-5 focus:outline-none"
          />
          <input
            placeholder="Last Name"
            className="py-2 text-xl font-serif placeholder-text border-b-2 border-black border-opacity-5 focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail * - Required"
            className="py-2 text-xl font-serif placeholder-text border-b-2 border-black border-opacity-5 focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-end">
          <input
            type="submit"
            value="Subscribe"
            className="px-4 py-2 text-xl font-serif text-white bg-black"
          />
          <p className="text-text text-right mt-3">
            I will not spam you and you can <br /> unsubscribe at any time.
          </p>
        </div>
      </form>
    </Modal>
  );
}

export default SubscribeModal;
