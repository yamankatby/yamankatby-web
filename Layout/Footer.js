function Footer() {
  return (
    <footer className="p-14">
      <div className="flex justify-between items-start">
        <div>
          <a
            href="mailto:me@yamankatby.com"
            className="text-xl font-medium font-serif"
          >
            me@yamankatby.com
          </a>
          <p className="text-sm opacity-60 mt-2" style={{ maxWidth: 320 }}>
            Apps developer. Loves good and intuitive UX. Makes fun things to
            watch on YouTube.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="text-lg opacity-60">looking for?</span>
          <div className="flex items-center">
            <a href="#" className="text-4xl font-serif font-medium">
              yaman<span className="text-primary">akademi</span>
            </a>
            <div className="w-7 h-7 ml-4 bg-yellow-400" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-12">
        <div>
          <a href="#" className="text-lg">
            About Me
          </a>
          <a href="#" className="text-lg ml-6">
            Work
          </a>
          <a href="#" className="text-lg ml-6">
            Resume
          </a>
          <a href="#" className="text-lg ml-6 text-primary">
            Contact Me
          </a>
        </div>

        <div>
          <a href="#" className="text-lg">
            LinkedIn
          </a>
          <a href="#" className="text-lg ml-6">
            GitHub
          </a>
          <a href="#" className="text-lg ml-6">
            Dribbble
          </a>
          <a href="#" className="text-lg ml-6">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
