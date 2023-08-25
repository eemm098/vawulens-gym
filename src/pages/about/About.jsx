import Header from "../../components/header/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import "./about.css";

function About() {
  return (
    <>
      <Header title="About Us " image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum
        quo aliquid totam quaerat aut tempora deserunt cupiditate modi. Cumque!
      </Header>
      <section className="about_story">
        <div className="about_story_container container">
          <div className="about_section_image">
            <img src={StoryImage} alt="our story image" />
          </div>
          <div className="about_section_content">
            <h1>our story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, necessitatibus! Suscipit, eum voluptatem. Exercitationem quis aperiam non aspernatur expedita qui beatae temporibus pariatur debitis, enim nemo unde tempora repudiandae nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus vitae nulla. Maxime est ex, ratione quod repudiandae velit ut quasi quam tempora et architecto distinctio nam ipsum optio facere.
            </p>
          </div>
        </div>
      </section>
      <section className="about_vision">
        <div className="container about_vision_container">
          <div className="about_section_content">
            <h1>our vision</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel amet nesciunt eos vitae necessitatibus, iure laboriosam unde nulla
              magni ullam atque reiciendis aspernatur in officiis exercitationem nam dignissimos omnis mollitia?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor amet vel praesentium
              nulla impedit similique quisquam, ea ratione neque soluta? Sed amet officiis sunt rem vitae minus earum eligendi quas.</p>
          </div>
          <div className="about_section_image">
            <img src={VisionImage} alt="our vision image" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission_container">
        <div className="about_section_image">
            <img src={MissionImage} alt="our mission image" />
          </div>
          <div className="about_section_content">
            <h1>our vision</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel amet nesciunt eos vitae necessitatibus, iure laboriosam unde nulla
              magni ullam atque reiciendis aspernatur in officiis exercitationem nam dignissimos omnis mollitia?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor amet vel praesentium
              nulla impedit similique quisquam, ea ratione neque soluta? Sed amet officiis sunt rem vitae minus earum eligendi quas.</p>
          </div>
         
        </div>
      </section>
    </>
  );
}

export default About;
