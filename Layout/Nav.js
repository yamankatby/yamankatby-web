import Link from "next/link";

function Nav({ setIsMenuModalIn, setIsResumeModalIn, setIsSubscribeModalIn }) {
  return (
    <nav className="2xl:container 2xl:mx-auto m-6 md:m-8 lg:m-10 xl:m-14">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold font-serif" title="About Me">
            yamankatby
          </a>
        </Link>
        <div className="flex items-center">
          <button
            className="hidden sm:inline-block text-lg"
            title="Subscribe to my newsletter"
            onClick={() => setIsSubscribeModalIn(true)}
          >
            subscribe
          </button>
          <button
            className="flex items-center ml-14"
            title="Menu..."
            onClick={() => setIsMenuModalIn(true)}
          >
            <span className="hidden sm:inline text-lg mr-7">menu</span>
            <div className="burger w-7 h-7" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start mt-4">
        <div>
          <p
            className="text-sm font-medium text-text"
            style={{ maxWidth: 360 }}
          >
            Apps developer. Loves good and intuitive UX. Makes fun things to
            watch on YouTube.
          </p>
          <a
            href="mailto:me@yamankatby.com"
            className="inline-block mt-2 text-sm font-serif"
            title="Get in touch with me"
          >
            me@yamankatby.com
          </a>
        </div>

        <div className="hidden sm:flex flex-col items-end mr-14">
          <Link href="/work">
            <a className="text-sm font-medium" title="Work">
              work
            </a>
          </Link>
          <button
            className="text-sm font-medium mt-1"
            title="Resume / CV"
            onClick={() => setIsResumeModalIn(true)}
          >
            resume
          </button>
          <Link href="/contact-me">
            <a
              className="text-sm font-medium text-primary mt-1"
              title="Contact Me"
            >
              contact me
            </a>
          </Link>
          <button
            className="text-sm font-medium mt-1"
            title="More..."
            onClick={() => setIsMenuModalIn(true)}
          >
            more
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
