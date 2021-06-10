import Link from "next/link";

function Nav() {
  return (
    <nav className="2xl:container 2xl:mx-auto m-6 md:m-8 lg:m-10 xl:m-14">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a href="#" className="text-2xl font-bold font-serif">
            yamankatby
          </a>
        </Link>
        <div className="flex items-center">
          <button className="hidden sm:inline-block text-lg">subscribe</button>
          <button className="flex items-center ml-14">
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
          >
            me@yamankatby.com
          </a>
        </div>

        <div className="hidden sm:flex flex-col items-end mr-14">
          <a href="#" className="text-sm font-medium">
            work
          </a>
          <a href="#" className="text-sm font-medium mt-1">
            resume
          </a>
          <a href="#" className="text-sm font-medium text-primary mt-1">
            contact me
          </a>
          <a href="#" className="text-sm font-medium mt-1">
            more
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
