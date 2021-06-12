import Layout from "../Layout";

function ContactMe() {
  return (
    <Layout>
      <div className="mx-6 md:mx-8 lg:mx-10 xl:mx-14 mb-6 md:mb-8 lg:mb-10 xl:mb-14 flex">
        <div className="flex-1">
          <h2 className="text-3xl font-serif">Drop me a line</h2>
          <div className="flex flex-col bg-yellow-200bg-red-600">
            <input
              placeholder="Name"
              className="py-2 mt-14 text-xl font-serif placeholder-text border-b-2 border-black border-opacity-5 focus:outline-none"
            />
            <input
              placeholder="E-mail"
              className="py-2 mt-6 text-xl font-serif placeholder-text border-b-2 border-black border-opacity-5 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="py-2 mt-6 text-xl font-serif placeholder-text border-b-2 border-black border-opacity-5 focus:outline-none"
            />

            <input
              type="submit"
              value="Send"
              className="bg-black text-white text-2xl self-end mt-14 px-4 py-2 font-serif"
            />
          </div>
        </div>
        <div className="flex-1 ml-14">
          <h1 className="text-7xl font-serif font-medium">I'd ❤️️ to help.</h1>
          <p className="text-2xl mt-5">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            vision.
          </p>
          <div className="flex mt-14">
            <a href="#" className="text-2xl text-text">
              LinkedIn
            </a>
            <a href="#" className="text-2xl text-text ml-6">
              GitHub
            </a>
            <a href="#" className="text-2xl text-text ml-6">
              Dribbble
            </a>
            <a href="#" className="text-2xl text-text ml-6">
              YouTube
            </a>
          </div>
          <a
            href="mailto:me@yamankatby.com"
            className="text-2xl font-serif inline-block mt-14"
          >
            me@yamankatby.com
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default ContactMe;
