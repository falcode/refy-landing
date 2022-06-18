import Head from "next/head";
import Image from "next/image";
import type {NextPage} from "next";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useState} from "react";
import {
  integrations,
  channels,
  banner,
  fidelity_program1,
  fidelity_program2,
  fidelity_program3,
  filter_candidates,
  job_item,
  employees, social_referrals
} from "../assets/svg";
import {seat_code_white, toni_gimeno, tropicfeel_white, irb, refy_share} from "../assets/svg/companies";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSliders, faHeart, faTimer, faGem, faSackDollar, faCircleCheck} from "@fortawesome/pro-solid-svg-icons";
import Container from "../layout/container";
import IconItem from "../layout/icon-item";
import ImageCard from "../layout/image-card";
import PeopleCard from "../layout/people-card";
import {user_jaime_puig, user_toni_gimeno} from "../assets/svg/people";

function Translate(text: string, array?: boolean): string {
  const {t} = useTranslation("home");
  return array ? t(text, {returnObjects: true}) : t(text);
}

function stripHtmlTags(text: string): string {
  return text.replace(/(<([^>]+)>)/gi, "");
}

const Banner = () => (
  <Container bgColor="white" classes="flex mobile:flex-col my-12">
    <div className="flex flex-col w-3/5 desktop:px-5 mobile:w-full mobile:mb-10">
      <h1 className="font-big-title mobile:text-center mb-5">{Translate("banner.title")}</h1>
      <p className="font-subtitle mobile:text-center mb-8" dangerouslySetInnerHTML={{__html: Translate("banner.subtitle")}}></p>
      <div className="flex mobile:justify-center">
        <a href="https://refyapp.com/signup-company" target="_blank" rel="noreferrer">
          <button className="button-primary">{Translate("banner.button")}</button>
        </a>
      </div>
      <p className="font-hint mobile:text-center mt-4">{Translate("banner.hint")}</p>
    </div>
    <div className="flex w-2/5 px-5 mobile:w-full items-center justify-center mobile:hidden">
      <Image src={banner} alt="Try Refy for Free"></Image>
    </div>
  </Container>
);

const Companies = () => (
  <Container bgColor="primary" classes="flex flex-col items-center justify-center">
    <h1 className="font-subtitle color-white mobile:text-center mb-10">{Translate("companies.title")}</h1>
    <div className="flex w-full items-center justify-evenly mobile:flex-col mobile:space-y-16">
      <div className="w-80 h-full">
        <Image src={seat_code_white} alt={"Seat:Code"}/>
      </div>
      <div className="w-80 h-full">
        <Image src={tropicfeel_white} alt={"Tropicfeel"}/>
      </div>
    </div>
  </Container>
);

const ReferralProgramBenefits = () => {
  return (
    <Container bgColor="white" classes="flex mobile:flex-col flex-row-reverse">
      <div className="flex flex-col w-3/5 desktop:px-5 mobile:w-full mobile:mb-10">
        <h1 className="font-title mobile:text-center">{Translate("referral-program-benefits.title")}</h1>
        <h3 className="font-subtitle mobile:text-center mt-5 mb-10" dangerouslySetInnerHTML={{__html: Translate("referral-program-benefits.subtitle")}}></h3>
        <IconItem icon={faTimer} title={Translate("referral-program-benefits.time.title")} text={Translate("referral-program-benefits.time.text")}></IconItem>
        <IconItem icon={faGem} title={Translate("referral-program-benefits.quality.title")} text={Translate("referral-program-benefits.quality.text")}/>
        <IconItem icon={faSackDollar} title={Translate("referral-program-benefits.cost.title")} text={Translate("referral-program-benefits.cost.text")}></IconItem>
        <IconItem icon={faHeart} title={Translate("referral-program-benefits.advocacy.title")} text={Translate("referral-program-benefits.advocacy.text")}></IconItem>
        <IconItem icon={faCircleCheck} title={Translate("referral-program-benefits.culture.title")} text={Translate("referral-program-benefits.culture.text")}></IconItem>
      </div>
      <div className="flex flex-col w-2/5 px-5 mobile:w-full items-center justify-center">
        <Image src={filter_candidates} alt="Filter candidates"></Image>
      </div>
    </Container>
  );
};

const ValueProposition = () => {
  return (
    <Container bgColor="gray-100" classes="flex flex-col items-center">
      <h1 className="font-title text-center">{Translate("proposition.title")}</h1>
      <h2 className="font-subtitle text-center mt-5 mb-10" dangerouslySetInnerHTML={{__html: Translate("proposition.subtitle")}}></h2>
      <div className="flex justify-center space-x-8 mobile:flex-col mobile:space-x-0 mobile:space-y-5">
        <ImageCard image={fidelity_program2} title={Translate("proposition.advocacy.title")} text={Translate("proposition.advocacy.text")}></ImageCard>
        <ImageCard image={fidelity_program3} title={Translate("proposition.link.title")} text={Translate("proposition.link.text")}></ImageCard>
        <ImageCard image={fidelity_program1} title={Translate("proposition.engage.title")} text={Translate("proposition.engage.text")}></ImageCard>
      </div>
    </Container>
  );
};

const TalkingAboutUs = () => {
  return (
    <Container bgColor="primary" classes="flex flex-col items-center">
      <h1 className="font-title color-white text-center">{Translate("talking-about-us.title")}</h1>
      <h2 className="font-subtitle color-white text-center mt-5 mb-10" dangerouslySetInnerHTML={{__html: Translate("talking-about-us.subtitle")}}></h2>
      <div className="flex justify-center space-x-8 mobile:flex-col mobile:space-x-0 mobile:space-y-5">
        <PeopleCard backgroundImage={toni_gimeno} image={user_toni_gimeno} name={Translate("talking-about-us.toni-gimeno.name")} text={Translate("talking-about-us.toni-gimeno.text")}></PeopleCard>
        <PeopleCard backgroundImage={irb} image={user_jaime_puig} name={Translate("talking-about-us.jaime-puig.name")} text={Translate("talking-about-us.jaime-puig.text")}></PeopleCard>
      </div>
    </Container>
  );
};

const ReferralProgramSettings = () => {
  const [selectedProgram, setProgram] = useState("advocacy");

  return (
    <Container bgColor="white" classes="flex mobile:flex-col">
      <div className="flex flex-col w-3/5 desktop:px-5 mobile:w-full mobile:mb-10">
        <h1 className="font-title mobile:text-center">{Translate("referral-program-settings.title")}</h1>
        <h2 className="font-subtitle mobile:text-center mt-5 mb-10 mobile:text-center">{Translate("referral-program-settings.subtitle")}</h2>
        <div className="flex mobile:justify-center">
          <div className="flex bg-gray-100 rounded-xl items-center justify-center mb-8 cursor-pointer">
            {["advocacy", "money", "mix"].map((program, i) => (
              <div
                key={i}
                className={`px-6 mobile:px-4 h-full flex items-center rounded-xl ${selectedProgram === program ? "bg-primary" : ""}`}
                onClick={() => setProgram(program)}
              >
                <p className={`font-button-toggle ${selectedProgram === program ? "font-button-toggle-active" : ""}`}>
                  {Translate(`referral-program-settings.${program}.title`)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="font-text mobile:text-center" dangerouslySetInnerHTML={{__html: Translate(`referral-program-settings.${selectedProgram}.text`)}}></p>
      </div>
      <div className="flex flex-col w-2/5 px-5 mobile:w-full items-center justify-center">
        <Image src={employees} alt="Candidate 1"></Image>
        <div className="flex flex-col space-y-5 mt-5 justify-between p-8 w-80 bg-white rounded-xl drop-shadow-xl mobile:hidden">
          <FontAwesomeIcon icon={faSliders} className="font-icon color-primary"></FontAwesomeIcon> {(Translate("referral-program-settings.image-card.options", true) as unknown as []).map((option, i) => (
          <div key={i} className="flex justify-between">
            <p className="font-hint">{option}</p>
            <p className="font-hint">{Translate(`referral-program-settings.image-card.points.${i}`)}</p>
          </div>
        ))}
        </div>
      </div>
    </Container>
  );
};

const ReferralTypes = () => (
  <Container bgColor="white" classes="flex mobile:flex-col flex-row-reverse">
    <div className="flex flex-col w-3/5 desktop:px-5 mobile:w-full mobile:mb-10">
      <h1 className="font-title mobile:text-center mb-10">{Translate("referral-types.title")}</h1>
      <p className="font-text mobile:text-center" dangerouslySetInnerHTML={{__html: Translate("referral-types.text")}}></p>
    </div>
    <div className="flex flex-col w-2/5 px-5 mobile:w-full items-center justify-center">
      <Image src={social_referrals} alt="Job item"></Image>
    </div>
  </Container>
);

const Link = () => (
  <Container bgColor="white" classes="flex mobile:flex-col">
    <div className="flex flex-col w-3/5 desktop:px-5 mobile:w-full mobile:mb-10">
      <h1 className="font-title mobile:text-center mb-10">{Translate("link.title")}</h1>
      <p className="font-text mobile:text-center" dangerouslySetInnerHTML={{__html: Translate("link.text")}}></p>
    </div>
    <div className="flex flex-col w-2/5 px-5 mobile:w-full items-center justify-center">
      <Image src={job_item} alt="Job item"></Image>
    </div>
  </Container>
);

const FilterCandidates = () => (
  <Container bgColor="white" classes="flex mobile:flex-col flex-row-reverse">
    <div className="flex flex-col w-3/5 desktop:px-5 mobile:w-full mobile:mb-10">
      <h1 className="font-title mobile:text-center mb-10">{Translate("filter-candidates.title")}</h1>
      <p className="font-text mobile:text-center" dangerouslySetInnerHTML={{__html: Translate("filter-candidates.text")}}></p>
    </div>
    <div className="flex flex-col w-2/5 px-5 mobile:w-full items-center justify-center">
      <Image src={filter_candidates} alt="Filter candidates"></Image>
    </div>
  </Container>
);

const Integrations = () => (
  <Container bgColor="white" classes="flex mobile:flex-col">
    <div className="flex flex-col w-3/5 desktop:px-5 mobile:w-full mobile:mb-10">
      <h1 className="font-title mobile:text-center mb-10">{Translate("integrations.title")}</h1>
      <p className="font-text mobile:text-center" dangerouslySetInnerHTML={{__html: Translate("integrations.text")}}></p>
    </div>
    <div className="flex flex-col w-2/5 px-5 mobile:w-full items-center justify-center">
      <Image src={integrations} alt="Integrations"></Image>
    </div>
  </Container>
);

const Channels = () => (
  <Container bgColor="white" classes="flex mobile:flex-col flex-row-reverse">
    <div className="flex flex-col w-3/5 desktop:px-5 mobile:w-full mobile:mb-10">
      <h1 className="font-title mobile:text-center mb-10">{Translate("channels.title")}</h1>
      <p className="font-text mobile:text-center" dangerouslySetInnerHTML={{__html: Translate("channels.text")}}></p>
    </div>
    <div className="flex flex-col w-2/5 px-5 mobile:w-full items-center justify-center">
      <Image src={channels} alt="channels"></Image>
    </div>
  </Container>
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Refy - " + Translate("banner.title")}</title>
        <meta property="og:title" content={"Refy - " + Translate("banner.title")}/>
        <meta property="og:description" content={stripHtmlTags(Translate("banner.subtitle"))}/>
      </Head>
      <div className="pt-16">
        <Banner></Banner> <ReferralProgramBenefits></ReferralProgramBenefits>
        <section id="product">
          <ValueProposition></ValueProposition>
          <TalkingAboutUs></TalkingAboutUs><ReferralProgramSettings></ReferralProgramSettings>
          <ReferralTypes></ReferralTypes><Link></Link> <FilterCandidates></FilterCandidates>
          <Integrations></Integrations> <Channels></Channels>
        </section>
      </div>
    </>
  );
};

export const getStaticProps = async ({locale}: { locale: string }) => ({
  props: {...(await serverSideTranslations(locale, ["common", "home"]))},
});

export default Home;
