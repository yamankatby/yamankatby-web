function Footer() {
  return (
    <footer className="2xl:container 2xl:mx-auto mx-6 md:mx-8 lg:mx-10 xl:mx-14 border-t">
      <div className="my-6 md:my-8 lg:my-10 xl:my-14">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <a href="mailto:me@yamankatby.com" className="text-xl font-serif">
              me@yamankatby.com
            </a>
            <p
              className="mt-4 text-sm font-medium text-text"
              style={{ maxWidth: 360 }}
            >
              Apps developer. Loves good and intuitive UX. Makes fun things to
              watch on YouTube.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-lg text-text font-medium mt-6 md:mt-0">
              looking for?
            </span>
            <div className="flex items-center">
              <a
                href="#"
                className="text-2xl md:text-3xl font-serif font-medium"
              >
                yaman<span className="text-primary">akademi</span>
              </a>
              <div className="arrow w-7 h-7 ml-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-14">
          <div>
            <a href="#" className="md:text-lg">
              About Me
            </a>
            <a href="#" className="md:text-lg ml-6 md:ml-8">
              Work
            </a>
            <a href="#" className="md:text-lg ml-6 md:ml-8">
              Resume
            </a>
            <a href="#" className="md:text-lg ml-6 md:ml-8 text-primary">
              Contact Me
            </a>
          </div>

          <div className="flex mt-4 md:mt-0">
            <a href="#">
              <span className="hidden lg:inline text-lg">LinkedIn</span>
              <img src="/linkedin.svg" className="lg:hidden" />
            </a>
            <a href="#" className="ml-8">
              <span className="hidden lg:inline text-lg">GitHub</span>
              <img src="/github.svg" className="lg:hidden" />
            </a>
            <a href="#" className="ml-8">
              <span className="hidden lg:inline text-lg">Dribbble</span>
              <img src="/dribbble.svg" className="lg:hidden" />
            </a>
            <a href="#" className="ml-8">
              <span className="hidden lg:inline text-lg">YouTube</span>
              <img src="/youtube.svg" className="lg:hidden" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
