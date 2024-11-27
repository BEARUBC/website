"use client";

import Image from "next/image";
import Member from "../components/Member";
import BLANK_PICTURE from "../assets/headshots/blank.jpg";
import TeamPhoto from "../assets/team-photo-2.png";

// -- Captains --
import JoyceXi from "../assets/headshots/Joyce Xi.jpg";
import NataliaNayyar from "../assets/headshots/Natalia Nayyar.jpg";

// -- Admin --
import SashaSabourin from "../assets/headshots/Sasha Sabourin.jpg";
import MelanieCheng from "../assets/headshots/Melanie Cheng.jpg";
import KimTan from "../assets/headshots/Kim Tan.jpg";

// -- Analytics --
import RachaelMacdougall from "../assets/headshots/Rachel MacDougall.jpg";
import IrisXu from "../assets/headshots/Iris Xu.png";
import KhueDo from "../assets/headshots/Khue Do.jpg";
import LeticiaCid from "../assets/headshots/Leticia Cid.jpg";

// -- Electrical --
import AnthonyStewart from "../assets/headshots/Anthony Stewart.jpg";
import JustinThe from "../assets/headshots/Justin The.jpg";
import NickSantoso from "../assets/headshots/Nick Santoso.jpg";
import RykerSchroeder from "../assets/headshots/Ryker Schroeder.jpg";
import ChathilRajamanthree from "../assets/headshots/Chathil Rajamanthree.jpg";
import GhazalFallahpour from "../assets/headshots/Ghazal Fallahpour.jpg";
import ArpitKumar from "../assets/headshots/Arpit Kumar.jpg";

// -- Mechanical --
import TerrenceLeong from "../assets/headshots/Terrence Leong.jpg";
import JackieChen from "../assets/headshots/Jackie Chen.jpg";
import JedidahChiusa from "../assets/headshots/Jedidiah Chiusa.jpg";
import WillemBarnard from "../assets/headshots/Willem Barnard.jpg";
import MarvinTing from "../assets/headshots/Marvin Ting.jpg";

// -- Advisors --
import EmilyFlaschner from "../assets/headshots/Emily Flaschner.jpg";
import ManuMadhav from "../assets/headshots/Manu Madhav.jpg";
import JohnMadden from "../assets/headshots/John Madden.jpg";
import FraserDouglas from "../assets/headshots/Fraser Douglas.jpg";
import XiaoliangJin from "../assets/headshots/Xiaoliang Jin.jpg";

const Captains = [
  { imageSrc: JoyceXi, name: "Joyce Xi", description: "Captain", link: "https://www.linkedin.com/in/joycexi/", bio: "I like birds" },
  { imageSrc: NataliaNayyar, name: "Natalia Nayyar", description: "Vice Captain", link: "https://www.linkedin.com/in/natalia-nayyar/" }
];

const Admin = [
  { imageSrc: MelanieCheng, name: "Melanie Cheng", description: "Co-Lead", },
  { imageSrc: SashaSabourin, name: "Sasha Sabourin", description: "Co-Lead", },
  { imageSrc: BLANK_PICTURE, name: "Faraz Tehrani", description: "Developer", bio: "Hello! I'm currently building this site :)" },
  { imageSrc: BLANK_PICTURE, name: "Joshua Wong", description: "Financial Officer", link: "www.linkedin.com/in/joshuaw9/" },
  { imageSrc: KimTan, name: "Kim Tan", link: "https://www.linkedin.com/in/kim-tan-447715202", bio: "I have a golden retriver named Diesel...but he lives at home in Texas :(" },
  { imageSrc: BLANK_PICTURE, name: "Sofya Fefelova", description: "Social Media Coordinator", bio: "I have a corgi named Maily" },
  { imageSrc: BLANK_PICTURE, name: "Kruti Raval", },
];

const Analytics = [
  { imageSrc: RachaelMacdougall, name: "Rachel MacDougall", description: "Co-Lead", link: "https://www.linkedin.com/in/rachel-macdougall" },
  { imageSrc: BLANK_PICTURE, name: "Raihan Arvi", description: "Co-Lead" },
  { imageSrc: LeticiaCid, name: "Leticia Cid", description: "", link: "https://www.linkedin.com/in/leticia-cid/", bio: "I like brains and computers (and puffins)" },
  { imageSrc: IrisXu, name: "Iris Xu", description: "" },
  { imageSrc: KhueDo, name: "Khue Do", link: "https://www.linkedin.com/in/khue-do-28ab0b242", bio: "I've never been to a wedding" },
  { imageSrc: BLANK_PICTURE, name: "Luca Jones", description: "" },
];

const Electrical = [
  { imageSrc: NickSantoso, name: "Nicholas Santoso", description: "Co-Lead" },
  { imageSrc: JustinThe, name: "Justin The", description: "Co-Lead", link: "https://www.linkedin.com/in/justinthe/", bio: "I like fish" },
  { imageSrc: ChathilRajamanthree, name: "Chathil Rajamanthree", link: "https://www.linkedin.com/in/chathilrajaman3/", bio: "I like electrons" },
  { imageSrc: BLANK_PICTURE, name: "Alvin Shon", link: "https://www.linkedin.com/in/alvinshon7567", bio: "I like bunnies" },
  { imageSrc: BLANK_PICTURE, name: "Elin Lee", link: "https://www.linkedin.com/in/elin-lee-a44859208/", bio: "I like doggies" },
  { imageSrc: ArpitKumar, name: "Arpit Kumar", description: "Embedded Team", link: "http://kumarpit.github.io/", bio: "I like Rust" },
  { imageSrc: GhazalFallahpour, name: "Ghazal Fallahpour", description: "Embedded Team", link: "https://ca.linkedin.com/in/ghazal-fallahpour-67990918a", bio: "I like coffee" },
  { imageSrc: AnthonyStewart, name: "Anthony Stewart", },
  { imageSrc: BLANK_PICTURE, name: "Krisha Iquin", description: "Embedded Team",},
  { imageSrc: BLANK_PICTURE, name: "Andreas Mendez-Cadrin", },
  { imageSrc: BLANK_PICTURE, name: "Sofia Valoria", },
  { imageSrc: BLANK_PICTURE, name: "Aditya Bansal", },
  { imageSrc: RykerSchroeder, name: "Ryker Schroeder", },
];

const Mechanical = [
  { imageSrc: JackieChen, name: "Jackie Chen", description: "Co-Lead",link: "https://www.linkedin.com/in/jackielchen", bio: "I like cars" },
  { imageSrc: TerrenceLeong, name: "Terrence Leong", description: "Co-Lead",link: "", bio: "" },
  { imageSrc: MarvinTing, name: "Marvin Ting", description: "Advisor", link: "http://linkedin.com/in/marvinting", bio: "" },
  { imageSrc: JedidahChiusa, name: "Jedidah Chiusa", description: "Advisor", },
  { imageSrc: BLANK_PICTURE, name: "Kiwi Chen", link: "https://www.linkedin.com/in/kiwichen", bio: "I like Gundam and volleyball" },
  { imageSrc: BLANK_PICTURE, name: "Kaylie Chen", link: "https://www.linkedin.com/in/kayliecjy", bio: "I am a matcha latte enthusiast" },
  { imageSrc: WillemBarnard,name: "Will Barnard", },
];

const Advisors = [
  { imageSrc: EmilyFlaschner, name: "Emily Flaschner", description: "Undergraduate Advisor (SBME)" },
  { imageSrc: ManuMadhav, name: "Manu Madhav", description: "Faculty Advisor (SBME)" },
  { imageSrc: JohnMadden, name: "John Madden", description: "Faculty Advisor (ECE)" },
  { imageSrc: FraserDouglas, name: "Fraser Douglas", description: "Graduate Advisor (SBME)" },
  { imageSrc: XiaoliangJin, name: "Xiaoliang Jin", description: "Faculty Advisor (MECH)" },
];

const Teams = () => {
  return (
    <main className="relative flex flex-col items-center justify-center space-y-8">
      {/* Full-page Section */}
      <section className="relative w-full h-screen">
        <Image 
          src={TeamPhoto} 
          alt="Team Photo" 
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-100 z-10" style={{background: 'linear-gradient(to bottom, transparent 60%, rgba(255, 255, 255, 0.8) 80%, white 100%)'}} />
      </section>

      {/* Captains Section */}
      <section className="w-full max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 place-items-center">
          {Captains.map((member, index) => (
            <Member
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              description={member.description}
              link={member.link}
              bio={member.bio}
            />
          ))}
        </div>
      </section>

      {/* Admin Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-4xl text-center mb-4">Admin</h2>
        <div className="mb-8 items-center justify-center">
          <p className="text-lg font-light text-center px-4">
          The administrative subteam is responsible for overseeing all the team&apos;s logistics, including finances, sponsorship, public relations, content creation, and more. We&apos;re responsible for everything from tracking the annual budget to engaging in community outreach, and we also handle the development of this website. You can often find us on all our social media platforms or at team events we&apos;ve organized! 
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-24 place-items-center">
          {Admin.map((member, index) => (
            <Member
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              description={member.description}
              link={member.link}
              bio={member.bio}
            />
          ))}
        </div>
      </section>

      {/* Analytics Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-4xl text-center mb-4">Analytics</h2>
        <div className="mb-8 items-center justify-center">
          <p className="text-lg font-light text-center px-4">
          The analytics subteam uses data science and machine learning to improve the functionality of our current projects. For GRASP, we are focused on using computer vision (CV) to optimize the prosthetic arm&apos;s grips. For NERV, we are mainly focusing on EEG data analysis. Generally, our work includes programming with Python and performing data analysis on sensor information like EMG, FSR, EEG, etc.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-24 place-items-center">
          {Analytics.map((member, index) => (
            <Member
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              description={member.description}
              link={member.link}
              bio={member.bio}
            />
          ))}
        </div>
      </section>

      {/* Electrical Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-4xl text-center mb-4">Electrical</h2>
        <div className="mb-8 items-center justify-center">
          <p className="text-lg font-light text-center px-4">
          The electrical subteam focuses on developing and engineering the underlying infrastructure that spans from actuating the intended motion of the pilot to making sure the battery delivers energy; and everything in between! In the past, we&apos;ve worked on creating our own custom muscle sensor to convert electric signals in your arm to signals that our processor can read. We coordinate with the subteams to make sure that the arm and hand movement are as seamless as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-24 place-items-center">
          {Electrical.map((member, index) => (
            <Member
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              description={member.description}
              link={member.link}
              bio={member.bio}
            />
          ))}
        </div>
      </section>

      {/* Mechanical Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-4xl text-center mb-4">Mechanical</h2>
        <div className="mb-8 items-center justify-center">
          <p className="text-lg font-light text-center px-4">
          The mechanical subteam is responsible for the structural design of the projects and modeling the devices on CAD software. We research and develop mechanical designs via the engineering design process, prototyping, and use of SolidWorks. Additionally, we&apos;re responsible for the printing and assembly of the GRASP project, and are currently helping out with the headset for the NERV project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-24 place-items-center">
        {Mechanical.map((member, index) => (
            <Member
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              description={member.description}
              link={member.link}
              bio={member.bio}
            />
          ))}
        </div>
      </section>

      {/* Advisors Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-4xl text-center mb-4">Advisors</h2>
        <div className="mb-8 items-center justify-center">
          <p className="text-lg font-light text-center px-4">
          Our advisors offer invaluable guidance and support, helping us make informed decisions and ensuring that we stay aligned with our goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-24 place-items-center">
          {Advisors.map((member, index) => (
            <Member
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              description={member.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Teams;