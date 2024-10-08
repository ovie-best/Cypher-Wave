import styles from "./Innovation.module.css";
import InnovationIdea from "./InnovationIdea";

const ideas = [
  {
    imgSrc: `./images/expert-team.png`,
    title: "Expert Team",
    content:
      "A highly skilled team of developers, engineers, and tech expert dedicated to delivering top-notch solutions.",
  },

  {
    imgSrc: `./images/customer-support.png`,
    title: "Customer-Centric Approach",
    content:
      " Prioritizing client needs and providing personalized solutions to meet specific business requirements.",
  },

  {
    imgSrc: `./images/compre-solu.png`,
    title: "Comprehensive Solutions",
    content:
      "  Offering a wide range of services from development to repair and deployment, ensuring all technological needs are met under one roof.",
  },

  {
    imgSrc: `../images/track-record.png`,
    title: "Proven Track Record",
    content:
      "  A history of successful projects and satisfied clients across various industries.",
  },

  {
    imgSrc: `./images/expert-team.png`,
    title: "Cutting-Edge Technology",
    content:
      " Expertise in the latest advancements in app development, website creation, drone technology, and AI programming.",
  },

  {
    imgSrc: `./images/expert-team.png`,
    title: "Innovation-Driven",
    content:
      "Constantly pushing the boundaries of what's possible, focusing on innovative and forward-thinking solutions.",
  },
];

function Innovation() {
  return (
    <section className={styles.innovate}>
      <div className={styles.innovateIntro}>
        <h1>Unleashing the Power of Innovation</h1>
        <p>Pioneering Apps, Websites, Drones, AI and software, and so on</p>
      </div>

      <div className={styles.inovativeIdeas}>
        {ideas.map((idea) => (
          <InnovationIdea
            imgSrc={idea.imgSrc}
            title={idea.title}
            content={idea.content}
            key={idea.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Innovation;
