"use client";

import Image from "next/image";
import Member from "../components/Member";
import BLANK_PICTURE from "../assets/headshots-old/blank.jpg";
import TeamPhoto from "../assets/team-photo-2.png";

// -- Admin --
import SashaSabourin from "../assets/headshots-old/Sasha Sabourin.jpg";
import JackieChen from "../assets/headshots-new/Jackie_2026.jpg";
import MelanieCheng from "../assets/headshots-old/Melanie Cheng.jpg";
import SatadruMani from "../assets/headshots-new/Satadru_2026.jpg";

// -- Analytics --
import LeticiaCid from "../assets/headshots-old/Leticia Cid.jpg";
import AishwaryaJathan from "../assets/headshots-new/Aishu_2026.jpg";
import ThanaphumiKunuthai from "../assets/headshots-new/Thanaphumi_2026.jpg";
import FarrelWahyudi from "../assets/headshots-new/Farrel_2026.jpg";

// -- Electrical --
import JustinThe from "../assets/headshots-old/Justin The.jpg";
import NickSantoso from "../assets/headshots-old/Nick Santoso.jpg";
import ChathilRajamanthree from "../assets/headshots-old/Chathil Rajamanthree.jpg";
import ElinLee from "../assets/headshots-new/Elin_2026.jpg";
import LucaJones from "../assets/headshots-new/Luca_2026.jpg";
import EhinomenItua from "../assets/headshots-new/Ehi_2026.jpg";
import TakuyaHaji from "../assets/headshots-new/Takuya_2026.jpg";
import LeiaChen from "../assets/headshots-new/Leia_2026.jpg";
import DerekWei from "../assets/headshots-new/Derek_2026.jpg";

// -- Mechanical --
import TerrenceLeong from "../assets/headshots-old/Terrence Leong.jpg";
import CorlissChu from "../assets/headshots-new/Corliss_2026.jpg";
import KaylieChen from "../assets/headshots-new/Kaylie_2026.jpg";
import KiwiChen from "../assets/headshots-new/Kiwi_2026.jpg";
import AnnaKoh from "../assets/headshots-new/Anna_2026.jpg";

// -- Advisors --
import EmilyFlaschner from "../assets/headshots-old/Emily Flaschner.jpg";
import ManuMadhav from "../assets/headshots-old/Manu Madhav.jpg";
import JohnMadden from "../assets/headshots-old/John Madden.jpg";
import FraserDouglas from "../assets/headshots-old/Fraser Douglas.jpg";
import XiaoliangJin from "../assets/headshots-old/Xiaoliang Jin.jpg";

const Captains = [
  { imageSrc: SashaSabourin, name: "Sasha Sabourin", description: "Co-Captain" },
  { imageSrc: JackieChen, name: "Jackie Chen", description: "Co-Captain", link: "https://www.linkedin.com/in/jackielchen", bio: "I like cars" },
];

const Admin = [
  { imageSrc: MelanieCheng, name: "Melanie Cheng", description: "Lead" },
  { imageSrc: BLANK_PICTURE, name: "Joshua Wong", link: "www.linkedin.com/in/joshuaw9/" },
  { imageSrc: BLANK_PICTURE, name: "Sofya Fefelova", bio: "I have a corgi named Maily" },
  { imageSrc: BLANK_PICTURE, name: "Rachel Peng" },
  { imageSrc: BLANK_PICTURE, name: "Vaishnavi Tatipelli" },
  { imageSrc: SatadruMani, name: "Satadru Mani" },
];

const Analytics = [
  { imageSrc: LeticiaCid, name: "Leticia Cid", description: "Lead", link: "https://www.linkedin.com/in/leticia-cid/", bio: "I like brains and computers (and puffins)" },
  { imageSrc: BLANK_PICTURE, name: "Daniel Zhang" },
  { imageSrc: AishwaryaJathan, name: "Aishwarya Jathan" },
  { imageSrc: BLANK_PICTURE, name: "Sarah Yu" },
  { imageSrc: BLANK_PICTURE, name: "Nigel Golec" },
  { imageSrc: ThanaphumiKunuthai, name: "Thanaphumi Kunuthai" },
  { imageSrc: FarrelWahyudi, name: "Farrel Wahyudi" },
];

const Electrical = [
  { imageSrc: JustinThe, name: "Justin The", description: "Lead", link: "https://www.linkedin.com/in/justinthe/", bio: "I like fish" },
  { imageSrc: ChathilRajamanthree, name: "Chathil Rajamanthree", description: "Lead", link: "https://www.linkedin.com/in/chathilrajaman3/", bio: "I like electrons" },
  { imageSrc: LucaJones, name: "Luca Jones", description: "Lead" },
  { imageSrc: NickSantoso, name: "Nicholas Santoso", link: "https://www.linkedin.com/in/nicholas-c-santoso/", bio: "I can squat more than I can deadlift" },
  { imageSrc: BLANK_PICTURE, name: "Krisha Iquin", link: "https://www.linkedin.com/in/krishaiquin/", bio: "I like cool tech and I cannot lie, with microchips making my spirits fly high!" },
  { imageSrc: ElinLee, name: "Elin Lee", link: "https://www.linkedin.com/in/elin-lee-a44859208/", bio: "I like doggies" },
  { imageSrc: BLANK_PICTURE, name: "Andreas Mendez-Cadrin" },
  { imageSrc: BLANK_PICTURE, name: "Richard Zhang" },
  { imageSrc: EhinomenItua, name: "Ehinomen Itua" },
  { imageSrc: TakuyaHaji, name: "Takuya Haji" },
  { imageSrc: BLANK_PICTURE, name: "Ekam Kooner" },
  { imageSrc: LeiaChen, name: "Leia Chen" },
  { imageSrc: DerekWei, name: "Derek Wei" },
  { imageSrc: BLANK_PICTURE, name: "Owen Gill" },
];

const Mechanical = [
  { imageSrc: TerrenceLeong, name: "Terrence Leong", description: "Lead", link: "", bio: "" },
  { imageSrc: CorlissChu, name: "Corliss Chu", link: "https://www.linkedin.com/in/corlisschu/" },
  { imageSrc: KiwiChen, name: "Kiwi Chen", link: "https://www.linkedin.com/in/kiwichen", bio: "I like Gundam and volleyball" },
  { imageSrc: KaylieChen, name: "Kaylie Chen", link: "https://www.linkedin.com/in/kayliecjy", bio: "I am a matcha latte enthusiast" },
  { imageSrc: AnnaKoh, name: "Anna Koh", link: "https://www.linkedin.com/in/annakoh15/", bio: "I like skiing" },
  { imageSrc: BLANK_PICTURE, name: "Adam Werstiuk" },
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