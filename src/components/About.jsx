export default function About() {
  return (
    <section
      className="flex flex-col items-center p-8 bg-gray-50 text-gray-800"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
        <div className="relative w-full max-w-sm">
          {/* Stacked images */}
          <div className="relative w-full h-full">
            <img
              src="/images/profile3.jpg"
              alt="about"
              className="w-full rounded-lg transform pb-7 transition-transform duration-500 hover:translate-y-[-10px] hover:shadow-lg"
              style={{ zIndex: 1, top: "0px", left: "0px" }}
            />
          </div>
        </div>
        <div className="text-left mt-6 md:ml-6 md:mt-0">
          <h4 className="text-xl mb-2">About Me</h4>
          <h3 className="text-2xl mb-4 leading-tight">
            A dedicated Full-Stack Developer <br /> based in Bangalore, Karnataka 📍
          </h3>
          <p className="text-base leading-relaxed">
            As an aspiring Front-end Developer, I possess an impressive <br />
            skillset in HTML, CSS, JavaScript, and React. I excel in designing <br />
            and maintaining responsive websites that offer a smooth user <br />
            experience. My expertise lies in crafting engaging interfaces <br />
            through writing clean and optimized code and utilizing cutting-edge <br />
            development tools and techniques. I am also a team player who
            thrives in collaborating with cross-functional teams to produce
            outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
