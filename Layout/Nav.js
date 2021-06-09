import Link from "next/link";

function Nav() {
  return (
    <nav className="p-14">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a href="#" className="text-2xl font-bold font-serif">
            yamankatby
          </a>
        </Link>
        <div className="flex items-center">
          <button className="text-lg">subscribe</button>
          <button className="flex items-center ml-10">
            <span className="text-lg">menu</span>
            <div className="w-7 h-7 ml-7 bg-yellow-200" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start mt-4">
        <div>
          <p className="text-sm opacity-60" style={{ maxWidth: 320 }}>
            Apps developer. Loves good and intuitive UX. Makes fun things to
            watch on YouTube.
          </p>
          <a
            href="mailto:me@yamankatby.com"
            className="inline-block mt-2 font-serif"
          >
            me@yamankatby.com
          </a>
        </div>

        <div className="flex flex-col items-end mr-14">
          <a href="#" className="text-sm">
            work
          </a>
          <a href="#" className="text-sm mt-1">
            resume
          </a>
          <a href="#" className="text-sm text-primary mt-1">
            contact me
          </a>
          <a href="#" className="text-sm mt-1">
            more
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
