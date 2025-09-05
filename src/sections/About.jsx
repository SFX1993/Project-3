const About = () => {
  return (
    <section className="c-space my-28">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Grid 1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div className="">
              <p className="grid-headtext">Hi, I'm John Gonsalves</p>
              <p className="grid-subtext">
                A Product Designer and Brand Strategist based in India, with a
                passion for crafting exceptional digital experiences. With a
                strong foundation in design principles and a keen eye for
                aesthetics, I specialize in creating user-centric solutions that
                seamlessly blend form and function.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
