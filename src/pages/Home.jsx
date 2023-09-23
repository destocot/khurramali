import TechStackLgt from "../components/TechStackLgt";
import TechStackDrk from "../components/TechStackDrk";
import { BsFiletypePdf } from "react-icons/bs";
import { useOutletContext } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function HomePage() {
  const colors = useOutletContext();

  return (
    <div className="home container">
      <section className="about">
        <div className="about__stats">
          <div>
            <div className="home__heading">
              <img
                src="/assets/prof.jpg"
                alt=""
                className="about__img"
                loading="lazy"
              />
              <h2>
                <Typewriter
                  options={{
                    strings: ["Software Engineer", "Mathematician", "Poet"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="about__info">
          <p className="about__bio">
            Hello there! I go by the name{" "}
            <span className="accent">Khurram </span>
            and I proudly call the wonderful city of Brooklyn, New York my home.
            At this very moment, I find myself fully immersed in an exciting
            adventure as a student at Hack Reactor&apos;s intensive coding
            bootcamp. Here, I am dedicating myself to the art of refining my
            skills as a developer. My educational background proudly features a
            Bachelor of Science in Mathematics, earned at Brooklyn College. More
            recently, I have earned a Master of Science in Education with a
            focus on Mathematics from Lehman College. My goal? To seamlessly
            weave together my passion for mathematics with the captivating world
            of coding, all in the pursuit of creating a meaningful impact within
            the ever-evolving technology landscape.
          </p>
          <a className="about__resume" href="/assets/resu.pdf" target="_blank">
            <BsFiletypePdf />
            <span>Resume</span>
          </a>
        </div>
      </section>
      <div className="techstack">
        <h1 className="techstack__heading">
          check out my <span className="accent">tech stack</span>
        </h1>
        {colors ? <TechStackDrk /> : <TechStackLgt />}
      </div>
    </div>
  );
}
