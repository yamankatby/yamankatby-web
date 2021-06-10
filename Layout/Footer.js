function Footer() {
  return (
    <footer className="mx-14 border-t">
      <div className="my-14">
        <div className="flex justify-between items-start">
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
            <span className="text-lg opacity-60">looking for?</span>
            <div className="flex items-center">
              <a href="#" className="text-3xl font-serif font-medium">
                yaman<span className="text-primary">akademi</span>
              </a>
              <div className="arrow w-7 h-7 ml-4" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-14">
          <div>
            <a href="#" className="text-lg">
              About Me
            </a>
            <a href="#" className="text-lg ml-8">
              Work
            </a>
            <a href="#" className="text-lg ml-8">
              Resume
            </a>
            <a href="#" className="text-lg ml-8 text-primary">
              Contact Me
            </a>
          </div>

          <div>
            <a href="#" className="text-lg">
              LinkedIn
            </a>
            <a href="#" className="text-lg ml-8">
              GitHub
            </a>
            <a href="#" className="text-lg ml-8">
              Dribbble
            </a>
            <a href="#" className="text-lg ml-8">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
