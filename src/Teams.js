import "./App.css";
//admin
// import FXing from "./Photos/Edited Headshots/Frank Xing.JPG";
import FXing from "./Photos/Edited Headshots/blank.JPG";
import MCheng from "./Photos/Edited Headshots/Melanie Cheng.JPG";
import BAhyou from "./Photos/Edited Headshots/Brandon Ah You.JPG";
import SSabourin from "./Photos/Edited Headshots/Sasha Sabourin.JPG";
import KTan from "./Photos/Edited Headshots/Kim Tan.JPG";
import LCid from "./Photos/Edited Headshots/Leticia Cid.JPG";
// import HAwosiyan from "./Photos/Edited Headshots/Hikmah Awosiyan.JPG";
import HAwosiyan from "./Photos/Edited Headshots/blank.JPG";
// import TZaurev from "./Photos/Edited Headshots/Theo Zaurev.JPG";
import TZaurev from "./Photos/Edited Headshots/blank.JPG";
// import KReddy from "./Photos/Edited Headshots/Kimathra Reddy.JPG";
import KReddy from "./Photos/Edited Headshots/blank.JPG";
// import AHalim from "./Photos/Edited Headshots/Ayesha Halim.JPG";
import AHalim from "./Photos/Edited Headshots/blank.JPG";
//analytics
// import LJones from "./Photos/Edited Headshots/Luca Jones.JPG";
import LJones from "./Photos/Edited Headshots/blank.JPG";
// import RArvi from "./Photos/Edited Headshots/Raihan Arvi.JPG";
import RArvi from "./Photos/Edited Headshots/blank.JPG";
import RMacdougall from "./Photos/Edited Headshots/Rachel MacDougall.JPG";
import BDaffa from "./Photos/Edited Headshots/Buyang Daffa.JPG";
import IXu from "./Photos/Edited Headshots/Iris Xu.png";
// import LDavidson from "./Photos/Edited Headshots/Lydia Davidson.JPG";
import LDavidson from "./Photos/Edited Headshots/blank.JPG";
import KDo from "./Photos/Edited Headshots/Khue Do.JPG";
//Electrical
import AStewart from "./Photos/Edited Headshots/Anthony Stewart.JPG";
import JThe from "./Photos/Edited Headshots/Justin The.JPG";
import NSantoso from "./Photos/Edited Headshots/Nick Santoso.JPG";
import TMoore from "./Photos/Edited Headshots/Teela Moore.JPG";
import RSchroeder from "./Photos/Edited Headshots/Ryker Schroeder.JPG";
import MRoss from "./Photos/Edited Headshots/Michael Ross.jpg";
import CRajamanthree from "./Photos/Edited Headshots/Chathil Rajamanthree.JPG";
import GFallahpour from "./Photos/Edited Headshots/Ghazal Fallahpour.JPG";
import ASoni from "./Photos/Edited Headshots/Albin Soni.png";
import AKumar from "./Photos/Edited Headshots/Arpit Kumar.JPG";
import RLi from "./Photos/Edited Headshots/Ronald Li.JPG";
import TBoshoff from "./Photos/Edited Headshots/Tiaan Boshoff.JPG";
import WJi from "./Photos/Edited Headshots/William Ji.JPG";
//Mechanical
import TLeong from "./Photos/Edited Headshots/Terrence Leong.JPG";
import AHawkins from "./Photos/Edited Headshots/Ali Hawkins.JPG";
import JChen from "./Photos/Edited Headshots/Jackie Chen.JPG";
import JChiusa from "./Photos/Edited Headshots/Jedidiah Chiusa.JPG";
import WBarnard from "./Photos/Edited Headshots/Willem Barnard.JPG";
import JWu from "./Photos/Edited Headshots/Joyce Wu.JPG";
import MTing from "./Photos/Edited Headshots/Marvin Ting.JPG";
import NNayyar from "./Photos/Edited Headshots/Natalia Nayyar.JPG";
import ABerkinbateva from "./Photos/Edited Headshots/Ayaulym Berkinbayeva.JPG";
//Captains
import JXi from "./Photos/Edited Headshots/Joyce Xi.JPG";
import KKochi from "./Photos/Edited Headshots/Kyle Kochi.jpg";
//Pilot
import AAtkinson from "./Photos/Edited Headshots/blank.JPG";
//Advisors
import EFlaschner from "./Photos/Edited Headshots/Emily Flaschner.jpg";
import MMadhav from "./Photos/Edited Headshots/Manu Madhav.jpg";
import JMadden from "./Photos/Edited Headshots/John Madden.jpg";
import FDouglas from "./Photos/Edited Headshots/Fraser Douglas.jpg";
import XJin from "./Photos/Edited Headshots/Xiaoliang Jin.jpg";

export const Teams = () => {
  return (
    <div class="container">
      <div class="row">
        <section className="backimage">
          <div class="py-5" />
          <p class="headerBlue text-center">LIFE AT UBC BIONICS</p>
          <div class="justify-content-center">
            <p class="graspDesc text-center width-80">
              Our team is composed of some of the best and brightest science and
              engineering students. Seize the opportunity to develop and hone
              your technical skills.
            </p>
          </div>
          <div class="py-3" />
          <div class="text-center">
            <a
              class="btn btn-primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf3bVoMoGfQl60c2ORBBDfCoKgjDWdWURr7DCVD5fQL_VxZAQ/viewform"
              role="button"
            >
              APPLY NOW
            </a>
          </div>
          <div class="py-5" />
        </section>
      </div>
      <div class="row">
        <div class="py-4 " />
        <p class="joinusHeader text-center">CAPTAINS</p>
        <div class="col">
          <div class="py-3" />
          <img
            class="captain img-responsive center-block d-block mx-auto"
            alt=""
            src={JXi}
          />
          <div class="py-3" />
          <p class="text-center pad-0">JOYCE XI</p>
          <div class="parent">
            <p class="subTitle text-center">TEAM CAPTAIN</p>
          </div>
          <div class="py-4" />
        </div>
        <div class="col">
          <div class="py-3" />
          <img
            class="captain img-responsive center-block d-block mx-auto"
            alt=""
            src={KKochi}
          />
          <div class="py-3" />
          <p class="text-center pad-0">KYLE KOCHI</p>
          <div class="parent">
            <p class="subTitle text-center">TEAM CAPTAIN</p>
          </div>
          <div class="py-4" />
        </div>
        {/* <p class="text-center lead">
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
      <div class="py-4" />
      <div class="row">
        <div class="py-4 " />
        <p class="joinusHeader text-center">PILOT</p>
        <div class="col">
          <div class="py-3" />
          <img
            class="captain img-responsive center-block d-block mx-auto"
            alt=""
            src={AAtkinson}
          />
          <div class="py-3" />
          <p class="text-center pad-0">ALBERT ATKINSON</p>
          <div class="parent">
            <p class="subTitle text-center">TEAM PILOT</p>
          </div>
          <div class="py-4" />
        </div>
      </div>
      <div class="py-4" />

      <div class="row partTwo">
        <p class="joinusHeader text-center">ADMIN SUBTEAM</p>
        <div class="col-md-6">
          <div class="py-4" />
          <div class="row">
              <div class="col">
                <div class="pad-left">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={BAhyou}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">BRANDON AH YOU</p>
                  <div class="parent">
                    <p class="subTitle text-center">ADMIN CO-LEAD</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="pad-right">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={MCheng}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">MELANIE CHENG</p>
                  <div class="parent">
                    <p class="subTitle text-center">ADMIN CO-LEAD</p>
                  </div>
                </div>
              </div>
            </div>
          <div class="py-5">
            <div class="container-sm">
              <p class="text-center">
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
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={KTan}
          />
          <div class="py-1" />
          <p class="text-center">KIM TAN</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={SSabourin}
          />
          <div class="py-1" />
          <p class="text-center">SASHA SABOURIN</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={FXing}
          />
          <div class="py-1" />
          <p class="text-center">FRANK XING</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={HAwosiyan}
          />
          <div class="py-1" />
          <p class="text-center">HIKMAH AWOSIYAN</p>
          <div class="py-3" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={LCid}
          />
          <div class="py-1" />
          <p class="text-center">LETICIA CID</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={TZaurev}
          />
          <div class="py-1" />
          <p class="text-center">THEO ZAUREV</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={KReddy}
          />
          <div class="py-1" />
          <p class="text-center">KIMATHRA REDDY</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AHalim}
          />
          <div class="py-1" />
          <p class="text-center">AYESHA HALIM</p>
          <div class="py-3" />
        </div>
      </div>

      <div class="row partOne">
        <div class="py-3" />
        <p class="joinusHeader text-center">ANALYTICS SUBTEAM</p>
        <div class="col-md-6">
          <div class="py-5 ">
          <div class="row">
              <div class="col">
                <div class="pad-left">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={RMacdougall}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">RACHAEL MACDOUGALL</p>
                  <div class="parent">
                    <p class="subTitle text-center">ANALYTICS CO-LEAD</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="pad-right">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={IXu}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">IRIS XU</p>
                  <div class="parent">
                    <p class="subTitle text-center">ANALYTICS CO-LEAD</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-5">
              <div class="container-sm">
                <p class="text-center">
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

        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={BDaffa}
          />
          <div class="py-1" />
          <p class="text-center">BUYANG DAFFA</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={LDavidson}
          />
          <div class="py-1" />
          <p class="text-center">LYDIA DAVIDSON</p>
          <div class="py-3" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={KDo}
          />
          <div class="py-1" />
          <p class="text-center">KHUE DO</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={RArvi}
          />
          <div class="py-1" />
          <p class="text-center">RAIHAN ARVI</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={LJones}
          />
          <div class="py-1" />
          <p class="text-center">LUCA JONES</p>
          <div class="py-3" />
        </div>
      </div>

      <div class="row partTwo">
        <p class="joinusHeader text-center">ELECTRICAL SUBTEAM</p>
        <div class="py-3" />
        <div class="col-md-6">
          <div class="py-5 ">
            <div class="row">
              <div class="col">
                <div class="pad-left">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={TBoshoff}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">TIAAN BOSHOFF</p>
                  <div class="parent">
                    <p class="subTitle text-center">ELECTRICAL CO-LEAD</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="pad-right">
                  <img
                    class="teamimg img-responsive center-block d-block mx-auto"
                    alt=""
                    src={WJi}
                  />
                  <div class="py-3" />
                  <p class="pad-0 text-center">WILLIAM JI</p>
                  <div class="parent">
                    <p class="subTitle text-center">ELECTRICAL CO-LEAD</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-5">
              <div class="container-sm">
                <p class="text-center">
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

        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AStewart}
          />
          <div class="py-1" />
          <p class="pad-0 text-center">ANTHONY STEWART</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={JThe}
          />
          <div class="py-1" />
          <p class="text-center">JUSTIN THE</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={NSantoso}
          />
          <div class="py-1" />
          <p class="text-center">NICHOLAS SANTOSO</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={TMoore}
          />
          <div class="py-1" />
          <p class="text-center">TEELA MOORE</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AKumar}
          />
          <div class="py-1" />
          <p class="text-center">ARPIT KUMAR</p>
          <div class="py-3" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={RSchroeder}
          />
          <div class="py-1" />
          <p class="text-center">RYKER SCHROEDER</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={RLi}
          />
          <div class="py-1" />
          <p class="text-center">RONALD LI</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={CRajamanthree}
          />
          <div class="py-1" />
          <p class="text-center">CHATHIL RAJAMANTHREE</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={GFallahpour}
          />
          <div class="py-1" />
          <p class="text-center">GHAZAL FALLAHPOUR</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={ASoni}
          />
          <div class="py-1" />
          <p class="text-center">ALBIN SONI</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={MRoss}
          />
          <div class="py-1" />
          <p class="text-center">MICHAEL ROSS</p>
          <div class="py-3" />
        </div>  
      </div>

      <div class="row partOne">
        <div class="py-3" />
        <p class="joinusHeader text-center">MECHANICAL SUBTEAM</p>
        <div class="col-md-6">
          <div class="py-4" />
          <div class="row">
            <div class="col">
              <div class="pad-left">
                <img
                  class="teamimg img-responsive center-block d-block mx-auto"
                  alt=""
                  src={JChiusa}
                />
                <div class="py-3" />
                <p class="pad-0 text-center">JEDIDIAH CHIUSA</p>
                <div class="parent">
                  <p class="subTitle text-center">MECHANICAL CO-LEAD</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="pad-right">
                <img
                  class="teamimg img-responsive center-block d-block mx-auto"
                  alt=""
                  src={MTing}
                />
                <div class="py-3" />
                <p class="pad-0 text-center">MARVIN TING</p>
                <div class="parent">
                  <p class="subTitle text-center">MECHANICAL CO-LEAD</p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5" />
          <div class="container-sm">
            <p class="text-center">
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

        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={TLeong}
          />
          <div class="py-1" />
          <p class="pad-0 text-center">TERRENCE LEONG</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={AHawkins}
          />
          <div class="py-1" />
          <p class="text-center">ALI HAWKINS</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={JChen}
          />
          <div class="py-1" />
          <p class="text-center">JACKIE CHEN</p>
          <div class="py-3" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={NNayyar}
          />
          <div class="py-1" />
          <p class="text-center">NATALIA NAYYAR</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={ABerkinbateva}
          />
          <div class="py-1" />
          <p class="text-center">AYAULYM BERKINBAYEVA</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={WBarnard}
          />
          <div class="py-1" />
          <p class="text-center">WILL BARNARD</p>
          <div class="py-3" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto"
            alt=""
            src={JWu}
          />
          <div class="py-1" />
          <p class="text-center">JOYCE WU</p>
          <div class="py-3" />
        </div>
      </div>

      <div class="row partTwo">
        <div class="py-3" />
        <p class="joinusHeader text-center">ADVISORS</p>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto my-auto"
            alt=""
            src={EFlaschner}
          />
          <div class="py-1" />
          <p class="pad-0 text-center">EMILY FLASCHNER</p>
          <div class="parent">
            <p class="subTitle text-center">UNDERGRADUATE ADVISOR</p>
          </div>
          <div class="py-2" />
          <div class="parent">
            <p class="subTitle text-center">SBME</p>
          </div>
          <div class="py-4" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto my-auto"
            alt=""
            src={MMadhav}
          />
          <div class="py-1" />
          <p class="pad-0 text-center">DR. MANU MADHAV</p>
          <div class="parent">
            <p class="subTitle text-center">FACULTY ADVISOR</p>
          </div>
          <div class="py-2" />
          <div class="parent">
            <p class="subTitle text-center">SBME</p>
          </div>
          <div class="py-4" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto my-auto"
            alt=""
            src={FDouglas}
          />
          <div class="py-1" />
          <p class="pad-0 text-center">FRASER DOUGLAS</p>
          <div class="parent">
            <p class="subTitle text-center">GRADUATE ADVISOR</p>
          </div>
          <div class="py-2" />
          <div class="parent">
            <p class="subTitle text-center">SBME</p>
          </div>
          <div class="py-4" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto my-auto"
            alt=""
            src={JMadden}
          />
          <div class="py-1" />
          <p class="pad-0 text-center">DR. JOHN MADDEN</p>
          <div class="parent">
            <p class="subTitle text-center">FACULTY ADVISOR</p>
          </div>
          <div class="py-2" />
          <div class="parent">
            <p class="subTitle text-center">ECE</p>
          </div>
          <div class="py-4" />
        </div>
        <div class="col-sm">
          <div class="py-4" />
          <img
            class="memberimg img-responsive center-block d-block mx-auto my-auto h120"
            alt=""
            src={XJin}
          />
          <div class="py-1" />
          <p class="pad-0 text-center">DR. XIAOLIANG JIN</p>
          <div class="parent">
            <p class="subTitle text-center">FACULTY ADVISOR</p>
          </div>
          <div class="py-2" />
          <div class="parent">
            <p class="subTitle text-center">MECH</p>
          </div>
          <div class="py-4" />
        </div>
      </div>
    </div>
  );
};
