import { useState } from "react";
import "../Components/Landing1MemberPrototype.css";
const people = [
  {
    id: 1,
    name: "Meet Sarah",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio1: "Sarah is a dynamic professional in her early 30s to late 40s, navigating the complexities of a demanding career and striving for a fulfilling personal life. She holds a significant position in a reputable company, where her expertise and dedication are highly valued. However, the weight of career aspirations, financial concerns, and the search for her life's purpose, direction, and meaning often leaves Sarah feeling overwhelmed and unfulfilled.",
    bio2: "Outside of work, Sarah shares her life with her loving partner and possibly children, in a cozy urban apartment or a comfortable suburban home. While she treasures her relationships and cherishes the moments she spends with her family, Sarah can't shake the nagging feeling that something is missing. She longs for more balance and fulfillment in her life but struggles to find the time and energy to pursue her passions and invest in her personal growth. This has lad to some tension at times with her partner.",
    bio3: "Amidst the hustle and bustle of her busy schedule, Sarah yearns for guidance and support to navigate the challenges she faces. She dreams of achieving her personal and professional goals while also maintaining a healthy lifestyle, securing her financial future, and discovering her true purpose in life.",
    bio4: "An Accountability Partner can help Sarah overcome these hurdles and challenges. With the support of a dedicated partner, Sarah is ready to break through barriers and create a life that aligns with her values and aspirations. Together, they'll work towards achieving her goals, whether it's regaining control of her physical well-being, finding clarity in her career path, or uncovering her deeper purpose in life.",
  },
  {
    id: 2,
    name: "Meet Pan",
    imageUrl:
      "https://images.unsplash.com/photo-1656408455261-e7e915a3285c?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio1: "Pan is a courageous individual who has embarked on a journey of recovery after nearly five years of dependency on a regulated substance. Despite facing significant challenges and setbacks along the way, Pan has shown remarkable determination and commitment to reclaiming control over their life.",
    bio2: "In their mid-30s, Pan has reached a pivotal moment where they are ready to embrace change and take proactive steps towards building a brighter future.",
    bio3: "Throughout this journey, Pan has faced numerous setbacks and experienced regression more than once. Despite these difficult moments, Pan remains determined to overcome their challenges and find a path to healing — not only for themselves but also for their loved ones.",
    bio4: "Recognizing the significance of accountability, Pan is actively seeking support to help them overcome obstacles and regain control over their life. They understand that having someone to hold them accountable can provide the encouragement and motivation needed to stay focused on their goals, even in the face of setbacks.",
    bio5: "An empathetic Accountability Partner can provide the understanding and support needed to navigate the challenges Pan faces — and, be a cheerleader to celebrate Pan's triumphs! They offer a non-judgmental space for Pan to share their struggles and setbacks, while also providing encouragement and motivation to stay on track. With active listening and compassionate guidance, the Accountability Partner can help Pan identify triggers, develop coping techniques, and set achievable goals towards healing and growth.",
  },
  {
    id: 3,
    name: "Meet Ahmed",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio1: "Ahmed is a hardworking individual in his late 20s to early 40s, navigating the challenges of balancing his everyday job with his personal and cultural responsibilities. He works diligently in a reputable company, where he's respected for his dedication and reliability. Despite not holding a management position, Ahmed takes pride in his work and strives to excel in his role.",
    bio2: "He values family above all else and feels a strong sense of duty towards his loved ones. However, this can sometimes create conflicts as he juggles the expectations of his family with his own aspirations and ambitions.",
    bio3: "Recently, Ahmed has started to notice some belly-roundness, a common concern among men who enjoy tasty yet unhealthy foods and struggle to maintain consistent exercise habits. He worries that his lack of fitness or not fitting into societal beauty standards may make him less desirable to a partner, adding to his existing concerns and pressures.",
    bio4: "An Accountability Partner is just what Ahmed needs. With the support of a dedicated partner who is understanding towards his unique challenges, Ahmed is ready to overcome obstacles, break through barriers, and create a life that aligns with his values and aspirations. Together, they'll work towards achieving his goals, whether it's advancing in his career, strengthening his relationships, or embracing a healthier lifestyle along with stronger self-acceptance and confidence.",
  },
  {
    id: 4,
    name: "Meet Jade",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio1: "Jade is a versatile freelancer, navigating the world of digital and in-person gigs with flexibility and adaptability.",
    bio2: "Working in a gig economy, Jade enjoys the freedom and autonomy that comes with being their own boss. They thrive on the excitement of new opportunities and challenges, but sometimes feel overwhelmed by the lack of structure and stability in their professional life.",
    bio3: "During their diverse experiences, Jade has had a difficult time finding a life partner. Despite experiencing exciting and passion-filled relationships over the years, they haven't yet found their person. This search for a deep and meaningful connection adds another layer of complexity to Jade's journey, leaving them feeling a sense of longing and yearning for companionship and intimacy.",
    bio4: "Amidst the uncertainty and struggle, Jade yearns for clarity and guidance to navigate the complexities of their professional and personal life. They dream of finding stability, security, and a sense of purpose in their work, while staying true to their authentic self.",
    bio5: "That's where an Accountability Partner can have a huge impact. With the support of a dedicated ally who is empathetic towards Jade's unique perspective, Jade is ready to explore their potential, define their goals, and carve out a path that aligns with their values and aspirations. Together, they'll work towards overcoming financial challenges, finding a meaningful career direction, and unlocking Jade's full potential in both their digital and in-person endeavors.",
  },
];

export default function Landing1MemberPrototype() {
  const [hoveredCard, setHoveredCard] = useState(people[0].id);
  const [lastHoveredCard, setLastHoveredCard] = useState(people[0].id);

  const handleCardHover = (id) => {
    setHoveredCard(id);
  };

  const handleCardLeave = () => {
    setLastHoveredCard(hoveredCard);
    setHoveredCard(null);
  };

  const getActiveCardId = () => {
    if (hoveredCard !== null) {
      return hoveredCard;
    } else {
      return lastHoveredCard;
    }
  };
  return (
    <div
      className="py-12 sm:py-12"
      style={{
        background: "linear-gradient(400deg, #54005C, #520e63, #651279)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 pb-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Is An Accountability Partner
            <br />
            Right For You?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#F1F1F1]">
            You're unique! But, maybe — just maybe — your life and circumstances
            have some similar elements...
          </p>
        </div>
        <section className="card_section">
          <div className="cards">
            {people.map((person) => (
              <div
                className={`card ${
                  getActiveCardId() === person.id ? "active" : ""
                }`}
                key={person.id}
                data-id={`content${person.id}`}
                onMouseEnter={() => handleCardHover(person.id)}
                onMouseLeave={handleCardLeave}
              >
                <img src={person.imageUrl} alt={person.name} />
                <div>
                  <h3>{person.name}</h3>
                </div>
                {/* <div className="gradient"></div> */}
              </div>
            ))}
          </div>
          <div className="content">
            {people.map((person) => (
              <div
                className={`contentBox ${
                  getActiveCardId() === person.id ? "active" : ""
                }`}
                key={`content${person.id}`}
              >
                <div className="m-8 bio_content text-left">
                  <p className="mt-4 text-lg leading-7 text-[#F1F1F1]">
                    {person.bio1}
                  </p>
                  <p className="mt-4 text-lg leading-7 text-[#F1F1F1]">
                    {person.bio2}
                  </p>
                  <p className="mt-4 text-lg leading-7 text-[#F1F1F1]">
                    {person.bio3}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
