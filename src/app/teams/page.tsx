"use client";

import Image from "next/image";
import Member from "../components/Member";
import BLANK_PICTURE from "../assets/headshots/blank.jpg";

// Captains
import JoyceXi from "../assets/headshots/Joyce Xi.jpg";
import KyleKochi from "../assets/headshots/Kyle Kochi.jpg";

const Captains = [
  { imageSrc: JoyceXi, name: "Joyce Xi", description: "Captain" },
  { imageSrc: KyleKochi, name: "Kyle Kochi", description: "Captain" },
  { imageSrc: BLANK_PICTURE, name: "Albert Atkinson", description: "Pilot" },
];

// Admin
import MelanieCheng from "../assets/headshots/Melanie Cheng.jpg";
import BrandonAhYou from "../assets/headshots/Brandon Ah You.jpg";
import SashaSabourin from "../assets/headshots/Sasha Sabourin.jpg";
import KimTan from "../assets/headshots/Kim Tan.jpg";
import LeticiaCid from "../assets/headshots/Leticia Cid.jpg";

const Admin = [
  { imageSrc: BrandonAhYou, name: "Brandon Ah You", description: "Admin Co-Lead" },
  { imageSrc: MelanieCheng, name: "Melanie Cheng", description: "Admin Co-Lead" },
  { imageSrc: KimTan, name: "KimTan", description: "" },
  { imageSrc: LeticiaCid, name: "Leticia Cid", description: "" },
  { imageSrc: SashaSabourin, name: "Sasha Sabourin", description: "" },
  { imageSrc: BLANK_PICTURE, name: "Theo Zaurev", description: "" },
  { imageSrc: BLANK_PICTURE, name: "Frank Xing", description: "" },
  { imageSrc: BLANK_PICTURE, name: "Kimathra Reddy", description: "" },
  { imageSrc: BLANK_PICTURE, name: "Hikmah Awosiyan", description: "" },
];

// Analytics
import RachaelMacdougall from "../assets/headshots/Rachel MacDougall.jpg";
import BuyangDaffa from "../assets/headshots/Buyang Daffa.jpg";
import IrisXu from "../assets/headshots/Iris Xu.png";
import KhueDo from "../assets/headshots/Khue Do.jpg";

const Analytics = [
  { imageSrc: RachaelMacdougall, name: "Rachael Macdougall", description: "Analytics Co-lead" },
  { imageSrc: IrisXu, name: "Iris Xu", description: "Analytics Co-lead" },
  { imageSrc: BuyangDaffa, name: "Buyang Daffa", description: "" },
  { imageSrc: KhueDo, name: "Khue Do", description: "" },
  { imageSrc: BLANK_PICTURE, name: "Lydia Davidson", description: "" },
  { imageSrc: BLANK_PICTURE, name: "Raihan Arvi", description: "" },
  { imageSrc: BLANK_PICTURE, name: "Luca Jones", description: "" },
];

// Electrical
import AnthonyStewart from "../assets/headshots/Anthony Stewart.jpg";
import JustinThe from "../assets/headshots/Justin The.jpg";
import NickSantoso from "../assets/headshots/Nick Santoso.jpg";
import TeelaMoore from "../assets/headshots/Teela Moore.jpg";
import RykerSchroeder from "../assets/headshots/Ryker Schroeder.jpg";
import MichaelRoss from "../assets/headshots/Michael Ross.jpg";
import ChathilRajamanthree from "../assets/headshots/Chathil Rajamanthree.jpg";
import GhazalFallahpour from "../assets/headshots/Ghazal Fallahpour.jpg";
import AlbinSoni from "../assets/headshots/Albin Soni.png";
import ArpitKumar from "../assets/headshots/Arpit Kumar.jpg";
import RonaldLi from "../assets/headshots/Ronald Li.jpg";
import TiaanBoshoff from "../assets/headshots/Tiaan Boshoff.jpg";
import WilliamJi from "../assets/headshots/William Ji.jpg";

const Electrical = [
  { imageSrc: TiaanBoshoff, name: "Tiaan Boshoff", description: "Electrical Co-Lead" },
  { imageSrc: WilliamJi, name: "William Ji", description: "Electrical Co-Lead" },
  { imageSrc: AnthonyStewart, name: "Anthony Stewart", description: "" },
  { imageSrc: JustinThe, name: "Justin The", description: "" },
  { imageSrc: NickSantoso, name: "Nick Santoso", description: "" },
  { imageSrc: TeelaMoore, name: "Teela Moore", description: "" },
  { imageSrc: RykerSchroeder, name: "Ryker Schroeder", description: "" },
  { imageSrc: MichaelRoss, name: "Michael Ross", description: "" },
  { imageSrc: ChathilRajamanthree, name: "Chathil Rajamanthree", description: "" },
  { imageSrc: GhazalFallahpour, name: "Ghazal Fallahpour", description: "" },
  { imageSrc: AlbinSoni, name: "Albin Soni", description: "" },
  { imageSrc: ArpitKumar, name: "Arpit Kumar", description: "" },
  { imageSrc: RonaldLi, name: "Ronald Li", description: "" },
];

// Mechanical
import TerrenceLeong from "../assets/headshots/Terrence Leong.jpg";
import AliHawkins from "../assets/headshots/Ali Hawkins.jpg";
import JackieChen from "../assets/headshots/Jackie Chen.jpg";
import JedidahChiusa from "../assets/headshots/Jedidiah Chiusa.jpg";
import WillemBarnard from "../assets/headshots/Willem Barnard.jpg";
import JoyceWu from "../assets/headshots/Joyce Wu.jpg";
import MarvinTing from "../assets/headshots/Marvin Ting.jpg";
import NataliaNayyar from "../assets/headshots/Natalia Nayyar.jpg";
import AyaulymBerkinbateva from "../assets/headshots/Ayaulym Berkinbayeva.jpg";

const Mechanical = [
  { imageSrc: JedidahChiusa, name: "Jedidah Chiusa", description: "Mechanical Co-Lead" },
  { imageSrc: MarvinTing, name: "Marvin Ting", description: "Mechanical Co-Lead" },
  { imageSrc: TerrenceLeong, name: "Terrence Leong", description: "" },
  { imageSrc: AliHawkins, name: "Ali Hawkins", description: "" },
  { imageSrc: JackieChen, name: "Jackie Chen", description: "" },
  { imageSrc: WillemBarnard, name: "Willem Barnard", description: "" },
  { imageSrc: JoyceWu, name: "Joyce Wu", description: "" },
  { imageSrc: NataliaNayyar, name: "Natalia Nayyar", description: "" },
  { imageSrc: AyaulymBerkinbateva, name: "Ayaulym Berkinbayeva", description: "" },
];

// Advisors
import EmilyFlaschner from "../assets/headshots/Emily Flaschner.jpg";
import ManuMadhav from "../assets/headshots/Manu Madhav.jpg";
import JohnMadden from "../assets/headshots/John Madden.jpg";
import FraserDouglas from "../assets/headshots/Fraser Douglas.jpg";
import XiaoliangJin from "../assets/headshots/Xiaoliang Jin.jpg";

const Advisors = [
  { imageSrc: EmilyFlaschner, name: "Emily Flaschner", description: "Undergraduate Advisor (SBME)" },
  { imageSrc: ManuMadhav, name: "Manu Madhav", description: "Faculty Advisor (SBME)" },
  { imageSrc: JohnMadden, name: "John Madden", description: "Graduate Advisor (SBME)" },
  { imageSrc: FraserDouglas, name: "Fraser Douglas", description: "Faculty Advisor (ECE)" },
  { imageSrc: XiaoliangJin, name: "Xiaoliang Jin", description: "Faculty Advisor (MECH)" },
];

import TeamPhoto from "../assets/team-photo-2.png";

const Teams = () => {
  return (
    <main className="relative flex flex-col items-center justify-center space-y-8">
      {/* Full-page section */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-24 place-items-center">
          {Captains.map((member, index) => (
            <Member
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              description={member.description}
            />
          ))}
        </div>
      </section>

      {/* Admin Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-4xl text-center mb-4">Admin</h2>
        <div className="mb-8 items-center justify-center">
          <p className="text-lg font-light text-center">
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
            />
          ))}
        </div>
      </section>

      {/* Analytics Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-4xl text-center mb-4">Analytics</h2>
        <div className="mb-8 items-center justify-center">
          <p className="text-lg font-light text-center">
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
            />
          ))}
        </div>
      </section>

      {/* Electrical Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-4xl text-center mb-4">Electrical</h2>
        <div className="mb-8 items-center justify-center">
          <p className="text-lg font-light text-center">
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
            />
          ))}
        </div>
      </section>

      {/* Mechanical Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-4xl text-center mb-4">Mechanical</h2>
        <div className="mb-8 items-center justify-center">
          <p className="text-lg font-light text-center">
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
            />
          ))}
        </div>
      </section>

      {/* Advisors Section */}
      <section className="w-full max-w-5xl">
        <h2 className="text-4xl text-center mb-4">Advisors</h2>
        <div className="mb-8 items-center justify-center">
          <p className="text-lg font-light text-center">
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