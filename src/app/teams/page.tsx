// the code has gotten very very out of control for this page
// i'll fix it soon :)

//admin
// import FXing from "../assets/headshots/Frank Xing.jpg";
import FXing from "../assets/headshots/blank.jpg";
import MCheng from "../assets/headshots/Melanie Cheng.jpg";
import BAhyou from "../assets/headshots/Brandon Ah You.jpg";
import SSabourin from "../assets/headshots/Sasha Sabourin.jpg";
import KTan from "../assets/headshots/Kim Tan.jpg";
import LCid from "../assets/headshots/Leticia Cid.jpg";
// import HAwosiyan from "../assets/headshots/Hikmah Awosiyan.jpg";
import HAwosiyan from "../assets/headshots/blank.jpg";
// import TZaurev from "../assets/headshots/Theo Zaurev.jpg";
import TZaurev from "../assets/headshots/blank.jpg";
// import KReddy from "../assets/headshots/Kimathra Reddy.jpg";
import KReddy from "../assets/headshots/blank.jpg";
// import AHalim from "../assets/headshots/Ayesha Halim.jpg";
import AHalim from "../assets/headshots/blank.jpg";
//analytics
// import LJones from "../assets/headshots/Luca Jones.jpg";
import LJones from "../assets/headshots/blank.jpg";
// import RArvi from "../assets/headshots/Raihan Arvi.jpg";
import RArvi from "../assets/headshots/blank.jpg";
import RMacdougall from "../assets/headshots/Rachel MacDougall.jpg";
import BDaffa from "../assets/headshots/Buyang Daffa.jpg";
import IXu from "../assets/headshots/Iris Xu.png";
// import LDavidson from "../assets/headshots/Lydia Davidson.jpg";
import LDavidson from "../assets/headshots/blank.jpg";
import KDo from "../assets/headshots/Khue Do.jpg";
//Electrical
import AStewart from "../assets/headshots/Anthony Stewart.jpg";
import JThe from "../assets/headshots/Justin The.jpg";
import NSantoso from "../assets/headshots/Nick Santoso.jpg";
import TMoore from "../assets/headshots/Teela Moore.jpg";
import RSchroeder from "../assets/headshots/Ryker Schroeder.jpg";
import MRoss from "../assets/headshots/Michael Ross.jpg";
import CRajamanthree from "../assets/headshots/Chathil Rajamanthree.jpg";
import GFallahpour from "../assets/headshots/Ghazal Fallahpour.jpg";
import ASoni from "../assets/headshots/Albin Soni.png";
import AKumar from "../assets/headshots/Arpit Kumar.jpg";
import RLi from "../assets/headshots/Ronald Li.jpg";
import TBoshoff from "../assets/headshots/Tiaan Boshoff.jpg";
import WJi from "../assets/headshots/William Ji.jpg";
//Mechanical
import TLeong from "../assets/headshots/Terrence Leong.jpg";
import AHawkins from "../assets/headshots/Ali Hawkins.jpg";
import JChen from "../assets/headshots/Jackie Chen.jpg";
import JChiusa from "../assets/headshots/Jedidiah Chiusa.jpg";
import WBarnard from "../assets/headshots/Willem Barnard.jpg";
import JWu from "../assets/headshots/Joyce Wu.jpg";
import MTing from "../assets/headshots/Marvin Ting.jpg";
import NNayyar from "../assets/headshots/Natalia Nayyar.jpg";
import ABerkinbateva from "../assets/headshots/Ayaulym Berkinbayeva.jpg";
//Captains
import JXi from "../assets/headshots/Joyce Xi.jpg";
import KKochi from "../assets/headshots/Kyle Kochi.jpg";
//Pilot
import AAtkinson from "../assets/headshots/blank.jpg";
//Advisors
import EFlaschner from "../assets/headshots/Emily Flaschner.jpg";
import MMadhav from "../assets/headshots/Manu Madhav.jpg";
import JMadden from "../assets/headshots/John Madden.jpg";
import FDouglas from "../assets/headshots/Fraser Douglas.jpg";
import XJin from "../assets/headshots/Xiaoliang Jin.jpg";

// temporary
import "./main.css";

// import "Image"
import Image from "next/image";

const Teams = () => {
  return (
    <div className="container">
      <div className="row">
        <section className="backimage">
          <div className="py-5" />
          <p className="headerBlue text-center">LIFE AT UBC BIONICS</p>
          <div className="justify-content-center">
            <p className="graspDesc text-center width-80">
              Our team is composed of some of the best and brightest science and
              engineering students. Seize the opportunity to develop and hone
              your technical skills.
            </p>
          </div>
          <div className="py-3" />
          <div className="py-5" />
        </section>
      </div>
      <div className="row">
        <div className="py-4 " />
        <p className="joinusHeader text-center">CAPTAINS</p>
        <div className="col">
          <div className="py-3" />
          <Image
            className="captain img-responsive center-block d-block mx-auto"
            alt=""
            src={JXi}
          />
          <div className="py-3" />
          <p className="text-center pad-0">JOYCE XI</p>
          <div className="parent">
            <p className="subTitle text-center">TEAM CAPTAIN</p>
          </div>
          <div className="py-4" />
        </div>
        <div className="col">
          <div className="py-3" />
          <Image
            className="captain img-responsive center-block d-block mx-auto"
            alt=""
            src={KKochi}
          />
          <div className="py-3" />
          <p className="text-center pad-0">KYLE KOCHI</p>
          <div className="parent">
            <p className="subTitle text-center">TEAM CAPTAIN</p>
          </div>
          <div className="py-4" />
        </div>
        {/* <p className="text-center lead">
          UBC Bionics, since its inception, has been dedicated to advancing
          student knowledge in the field of bionics and creating opportunities
          for students to apply themselves and gain experience. We are currently
          working on two major projects: a bionic arm, GRASP, and a
          brain-computer interface, NERV. Our design team has created an
          incredible environment for us to work collaboratively alongside other
          students and industry, participate in competitions and continue to
          advance and apply our knowledge. I am a fourth-year Biomedical
          Engineering student specializing in cellular bioengineering and have
          been a part of the team since 2019. My duties on the team include
          project management, executive responsibilities and supporting the rest
          of the team with anything they need. Bionics is a promising area of
          research with the potential to positively influence an individual’s
          quality of life, which I believe motivates our team to work hard to
          bring our projects into reality. I hope you’ll support or join us on
          our journey!
        </p> */}
      </div>
      <div className="py-4" />
      <div className="row">
        <div className="py-4 " />
        <p className="joinusHeader text-center">PILOT</p>
        <div className="col">
          <div className="py-3" />
          <Image
            className="captain img-responsive center-block d-block mx-auto"
            alt=""
            src={AAtkinson}
          />
          <div className="py-3" />
          <p className="text-center pad-0">ALBERT ATKINSON</p>
          <div className="parent">
            <p className="subTitle text-center">TEAM PILOT</p>
          </div>
          <div className="py-4" />
        </div>
      </div>
      <div className="py-4" />

      <div className="row partTwo">
        <p className="joinusHeader text-center">ADMIN SUBTEAM</p>
        <div className="col-md-6">
          <div className="py-4" />
          <div className="row">
              <div className="col">
                <div className="pad-left">
                  <Image
                    className="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={BAhyou}
                  />
                  <div className="py-3" />
                  <p className="pad-0 text-center">BRANDON AH YOU</p>
                  <div className="parent">
                    <p className="subTitle text-center">ADMIN CO-LEAD</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="pad-right">
                  <Image
                    className="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={MCheng}
                  />
                  <div className="py-3" />
                  <p className="pad-0 text-center">MELANIE CHENG</p>
                  <div className="parent">
                    <p className="subTitle text-center">ADMIN CO-LEAD</p>
                  </div>
                </div>
              </div>
            </div>
          <div className="py-5">
            <div className="container-sm">
              <p className="text-center">
                The administrative subteam is responsible for overseeing all the
                team’s logistics, including our finances, sponsorship, public
                relations, and content creation. We’re responsible for
                everything from tracking the annual budget to engaging in
                community outreach. You can often find us on all our social
                media platforms or at team events we’ve organized! Part of the
                administrative team is the web development group that designs
                our website, too.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={KTan}
          />
          <div className="py-1" />
          <p className="text-center">KIM TAN</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={SSabourin}
          />
          <div className="py-1" />
          <p className="text-center">SASHA SABOURIN</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={FXing}
          />
          <div className="py-1" />
          <p className="text-center">FRANK XING</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={HAwosiyan}
          />
          <div className="py-1" />
          <p className="text-center">HIKMAH AWOSIYAN</p>
          <div className="py-3" />
        </div>
        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={LCid}
          />
          <div className="py-1" />
          <p className="text-center">LETICIA CID</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={TZaurev}
          />
          <div className="py-1" />
          <p className="text-center">THEO ZAUREV</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={KReddy}
          />
          <div className="py-1" />
          <p className="text-center">KIMATHRA REDDY</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AHalim}
          />
          <div className="py-1" />
          <p className="text-center">AYESHA HALIM</p>
          <div className="py-3" />
        </div>
      </div>

      <div className="row partOne">
        <div className="py-3" />
        <p className="joinusHeader text-center">ANALYTICS SUBTEAM</p>
        <div className="col-md-6">
          <div className="py-5 ">
          <div className="row">
              <div className="col">
                <div className="pad-left">
                  <Image
                    className="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={RMacdougall}
                  />
                  <div className="py-3" />
                  <p className="pad-0 text-center">RACHAEL MACDOUGALL</p>
                  <div className="parent">
                    <p className="subTitle text-center">ANALYTICS CO-LEAD</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="pad-right">
                  <Image
                    className="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={IXu}
                  />
                  <div className="py-3" />
                  <p className="pad-0 text-center">IRIS XU</p>
                  <div className="parent">
                    <p className="subTitle text-center">ANALYTICS CO-LEAD</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="container-sm">
                <p className="text-center">
                  The analytics subteam uses data science and machine learning
                  to improve the functionality of our current projects. For
                  GRASP, we are focused on using computer vision (CV) to
                  optimize the prosthetic arm’s grips. For NERV, we are mainly
                  focusing on EEG data analysis. Generally, our work includes
                  programming with Python and performing data analysis on sensor
                  information like EMG, FSR, EEG, etc.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={BDaffa}
          />
          <div className="py-1" />
          <p className="text-center">BUYANG DAFFA</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={LDavidson}
          />
          <div className="py-1" />
          <p className="text-center">LYDIA DAVIDSON</p>
          <div className="py-3" />
        </div>
        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={KDo}
          />
          <div className="py-1" />
          <p className="text-center">KHUE DO</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={RArvi}
          />
          <div className="py-1" />
          <p className="text-center">RAIHAN ARVI</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={LJones}
          />
          <div className="py-1" />
          <p className="text-center">LUCA JONES</p>
          <div className="py-3" />
        </div>
      </div>

      <div className="row partTwo">
        <p className="joinusHeader text-center">ELECTRICAL SUBTEAM</p>
        <div className="py-3" />
        <div className="col-md-6">
          <div className="py-5 ">
            <div className="row">
              <div className="col">
                <div className="pad-left">
                  <Image
                    className="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={TBoshoff}
                  />
                  <div className="py-3" />
                  <p className="pad-0 text-center">TIAAN BOSHOFF</p>
                  <div className="parent">
                    <p className="subTitle text-center">ELECTRICAL CO-LEAD</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="pad-right">
                  <Image
                    className="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={WJi}
                  />
                  <div className="py-3" />
                  <p className="pad-0 text-center">WILLIAM JI</p>
                  <div className="parent">
                    <p className="subTitle text-center">ELECTRICAL CO-LEAD</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="container-sm">
                <p className="text-center">
                  The electrical subteam focuses on developing and engineering
                  the underlying infrastructure that spans from actuating the
                  intended motion of the pilot to making sure the battery
                  delivers energy; and everything in between! In the past, we’ve
                  worked on creating our own custom muscle sensor to convert
                  electric signals in your arm to signals that our processor can
                  read. We coordinate with the subteams to make sure that the
                  arm and hand movement are as seamless as possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AStewart}
          />
          <div className="py-1" />
          <p className="pad-0 text-center">ANTHONY STEWART</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={JThe}
          />
          <div className="py-1" />
          <p className="text-center">JUSTIN THE</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={NSantoso}
          />
          <div className="py-1" />
          <p className="text-center">NICHOLAS SANTOSO</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={TMoore}
          />
          <div className="py-1" />
          <p className="text-center">TEELA MOORE</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AKumar}
          />
          <div className="py-1" />
          <p className="text-center">ARPIT KUMAR</p>
          <div className="py-3" />
        </div>
        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={RSchroeder}
          />
          <div className="py-1" />
          <p className="text-center">RYKER SCHROEDER</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={RLi}
          />
          <div className="py-1" />
          <p className="text-center">RONALD LI</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={CRajamanthree}
          />
          <div className="py-1" />
          <p className="text-center">CHATHIL RAJAMANTHREE</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={GFallahpour}
          />
          <div className="py-1" />
          <p className="text-center">GHAZAL FALLAHPOUR</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={ASoni}
          />
          <div className="py-1" />
          <p className="text-center">ALBIN SONI</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={MRoss}
          />
          <div className="py-1" />
          <p className="text-center">MICHAEL ROSS</p>
          <div className="py-3" />
        </div>  
      </div>

      <div className="row partOne">
        <div className="py-3" />
        <p className="joinusHeader text-center">MECHANICAL SUBTEAM</p>
        <div className="col-md-6">
          <div className="py-4" />
          <div className="row">
            <div className="col">
              <div className="pad-left">
                <Image
                  className="teamimg img-responsive center-block d-block mx-auto"
                  alt=""
                  src={JChiusa}
                />
                <div className="py-3" />
                <p className="pad-0 text-center">JEDIDIAH CHIUSA</p>
                <div className="parent">
                  <p className="subTitle text-center">MECHANICAL CO-LEAD</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="pad-right">
                <Image
                  className="teamimg img-responsive center-block d-block mx-auto"
                  alt=""
                  src={MTing}
                />
                <div className="py-3" />
                <p className="pad-0 text-center">MARVIN TING</p>
                <div className="parent">
                  <p className="subTitle text-center">MECHANICAL CO-LEAD</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5" />
          <div className="container-sm">
            <p className="text-center">
              The mechanical subteam is responsible for the structural design of
              the projects and modeling the devices on CAD software. We research
              and develop mechanical designs via the engineering design process,
              prototyping, and use of SolidWorks. Additionally, we’re
              responsible for the printing and assembly of the GRASP project,
              and are currently helping out with the headset for the NERV
              project.
            </p>
          </div>
        </div>

        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={TLeong}
          />
          <div className="py-1" />
          <p className="pad-0 text-center">TERRENCE LEONG</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AHawkins}
          />
          <div className="py-1" />
          <p className="text-center">ALI HAWKINS</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={JChen}
          />
          <div className="py-1" />
          <p className="text-center">JACKIE CHEN</p>
          <div className="py-3" />
        </div>
        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={NNayyar}
          />
          <div className="py-1" />
          <p className="text-center">NATALIA NAYYAR</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={ABerkinbateva}
          />
          <div className="py-1" />
          <p className="text-center">AYAULYM BERKINBAYEVA</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={WBarnard}
          />
          <div className="py-1" />
          <p className="text-center">WILL BARNARD</p>
          <div className="py-3" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={JWu}
          />
          <div className="py-1" />
          <p className="text-center">JOYCE WU</p>
          <div className="py-3" />
        </div>
      </div>

      <div className="row partTwo">
        <div className="py-3" />
        <p className="joinusHeader text-center">ADVISORS</p>
        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto my-auto"
            alt=""
            src={EFlaschner}
          />
          <div className="py-1" />
          <p className="pad-0 text-center">EMILY FLASCHNER</p>
          <div className="parent">
            <p className="subTitle text-center">UNDERGRADUATE ADVISOR</p>
          </div>
          <div className="py-2" />
          <div className="parent">
            <p className="subTitle text-center">SBME</p>
          </div>
          <div className="py-4" />
        </div>
        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto my-auto"
            alt=""
            src={MMadhav}
          />
          <div className="py-1" />
          <p className="pad-0 text-center">DR. MANU MADHAV</p>
          <div className="parent">
            <p className="subTitle text-center">FACULTY ADVISOR</p>
          </div>
          <div className="py-2" />
          <div className="parent">
            <p className="subTitle text-center">SBME</p>
          </div>
          <div className="py-4" />
        </div>
        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto my-auto"
            alt=""
            src={FDouglas}
          />
          <div className="py-1" />
          <p className="pad-0 text-center">FRASER DOUGLAS</p>
          <div className="parent">
            <p className="subTitle text-center">GRADUATE ADVISOR</p>
          </div>
          <div className="py-2" />
          <div className="parent">
            <p className="subTitle text-center">SBME</p>
          </div>
          <div className="py-4" />
        </div>
        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto my-auto"
            alt=""
            src={JMadden}
          />
          <div className="py-1" />
          <p className="pad-0 text-center">DR. JOHN MADDEN</p>
          <div className="parent">
            <p className="subTitle text-center">FACULTY ADVISOR</p>
          </div>
          <div className="py-2" />
          <div className="parent">
            <p className="subTitle text-center">ECE</p>
          </div>
          <div className="py-4" />
        </div>
        <div className="col-sm">
          <div className="py-4" />
          <Image
            className="memberimg img-responsive center-block d-block mx-auto my-auto h120"
            alt=""
            src={XJin}
          />
          <div className="py-1" />
          <p className="pad-0 text-center">DR. XIAOLIANG JIN</p>
          <div className="parent">
            <p className="subTitle text-center">FACULTY ADVISOR</p>
          </div>
          <div className="py-2" />
          <div className="parent">
            <p className="subTitle text-center">MECH</p>
          </div>
          <div className="py-4" />
        </div>
      </div>
    </div>
  );
};

export default Teams;