import Layout from "../Layout";

function Home() {
  return (
    <Layout>
      <div className="mx-6 md:mx-8 lg:mx-10 xl:mx-14 mb-6 md:mb-8 lg:mb-10 xl:mb-14">
        <header>
          <h1 className="text-4xl sm:text-7xl font-serif font-medium">
            Full-stack web and Mobile apps developer.
          </h1>
          <p className="mt-6 text-2xl text-primary font-serif">
            #javascript #react #reactnative #ios #android #aspnet
          </p>
        </header>
        <p className="text-xl sm:text-2xl mt-7 sm:mt-14">
          I'm a full-stack web & mobile apps developer with over 7 years of
          working experience. Currently working on a bunch of productivity-rated
          apps that are used by thousands of professionals worldwide. Also, I
          share coding tutorial videos on my YouTube channel.
        </p>

        <div className="flex mt-7 sm:mt-14">
          <a href="#">
            <span className="hidden sm:inline text-2xl text-text">
              LinkedIn
            </span>
            <img src="/linkedin.svg" />
          </a>
          <a href="#" className="ml-8">
            <span className="hidden sm:inline text-2xl text-text">GitHub</span>
            <img src="/github.svg" />
          </a>
          <a href="#" className="ml-8">
            <span className="hidden sm:inline text-2xl text-text">
              Dribbble
            </span>
            <img src="/dribbble.svg" />
          </a>
          <a href="#" className="ml-8">
            <span className="hidden sm:inline text-2xl text-text">YouTube</span>
            <img src="/youtube.svg" />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
