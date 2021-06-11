import Link from "next/link";
import Modal from "./Modal";
import { DRIBBBLE_URL, GITHUB_URL, LINKEDIN_URL, YOUTUBE_URL } from "./SEO";

function MenuModal({ isMenuModalIn, setIsMenuModalIn }) {
  return (
    <Modal isModalIn={isMenuModalIn} setIsModalIn={setIsMenuModalIn}>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
          <div className="flex flex-col">
            <Link href="/">
              <a className="text-5xl font-serif" title="About Me">
                About Me
              </a>
            </Link>
            <Link href="/work">
              <a className="text-5xl font-serif mt-7" title="Work">
                Work
              </a>
            </Link>
            <button
              className="text-5xl font-serif text-left mt-7"
              title="Resume"
            >
              Resume
            </button>
            <Link href="/contact-me">
              <a
                className="text-5xl font-serif text-primary mt-7"
                title="Contact Me"
              >
                Contact Me
              </a>
            </Link>
          </div>
          <div className="flex sm:flex-col items-end mt-8 sm:mt-0">
            <a href={LINKEDIN_URL}>
              <span className="hidden sm:inline-block text-xl font-medium">
                LinkedIn
              </span>
              <img src="/linkedin.svg" className="sm:hidden" />
            </a>
            <a href={GITHUB_URL}>
              <span className="hidden sm:inline-block text-xl font-medium mt-2">
                GitHub
              </span>
              <img src="/github.svg" className="sm:hidden ml-4" />
            </a>
            <a href={DRIBBBLE_URL}>
              <span className="hidden sm:inline-block text-xl font-medium mt-2">
                Dribbble
              </span>
              <img src="/dribbble.svg" className="sm:hidden ml-4" />
            </a>
            <a href={YOUTUBE_URL}>
              <span className="hidden sm:inline-block text-xl font-medium mt-2">
                YouTube
              </span>
              <img src="/youtube.svg" className="sm:hidden ml-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-12">
          <span className="text-text font-medium">Get in touch</span>
          <a href="mailto:me@yamankatby.com" className="font-serif">
            me@yamankatby.com
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default MenuModal;
