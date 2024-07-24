import facebook from "../assets/vector/facebook.svg";
import instagram from "../assets/vector/instagram.svg";
import linkedin from "../assets/vector/linkedin.svg";
import softDevImg from "../assets/images/mikhail-fesenko-7wLQNYKL3Rw-unsplash.jpg";
import hardDevImg from "../assets/images/kumpan-electric-2PtUIVqbRLE-unsplash.jpg";
import dataAnalystIMG from "../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg";
import infoSysIMG from "../assets/images/taylor-vick-M5tzZtFCOfs-unsplash.jpg";
import mentorshipIMG from "../assets/images/DSC_0985.jpg";
import trainingIMG from "../assets/images/scott-graham-5fNmWej4tAA-unsplash.jpg";
import consultancyIMG from "../assets/images/DSC_1002.jpg";
import expertiseIMG from "../assets/images/christina-wocintechchat-com-NDoVgcS_lZM-unsplash.jpg";
import facilityIMG from "../assets/images/DSC_0856.jpg";
import fundingIMG from "../assets/images/hannah-busing-Zyx1bK9mqmA-unsplash.jpg";
const navItem = [
  { id: 1, name: "About Us" },
  { id: 2, name: "Services" },
  { id: 3, name: "Academy" },
  { id: 4, name: "News" },
  { id: 5, name: "Contact" },
];
const socialMediaItem = [
  { id: 1, name: facebook },
  { id: 2, name: instagram },
  { id: 3, name: linkedin },
];

const services = [
  {
    name: `Software Development`,
    content: `Our software team specializes in crafting digitalization tools
              designed to streamline processes and enhance platforms within fully
              digitalized systems. Leveraging the expertise of our international
              professionals, we integrate world-class techniques to develop
              top-notch digital tools that transform intricate systems into
              efficient and capable solutions.`,
    image: softDevImg,
  },
  {
    name: `Hardware Development`,
    content:
      "Our hardware team bridges the gap between our software solutions and physical realities. From 3D modeling and printing to circuitry, sensors, and digitally connected information systems, we seamlessly integrate physical tools with digitalized processes to craft tangible solutions for real-world applications.",
    image: hardDevImg,
  },
  {
    name: `Modeling & Data Analyst`,
    content:
      "Our digitalization solutions present a distinctive opportunity for clients to integrate modeling and data analysis toolsets into their processes, unlocking new insights through the transition to digital data collection. By leveraging advanced analytics and modeling capabilities, we empower our clients to visualize and interpret their data comprehensively.",
    image: dataAnalystIMG,
  },
  {
    name: `Information Systems`,
    content:
      "Our specialists oversee information systems that are pivotal in collecting, processing, storing, and distributing information to bolster decision-making, coordination, and control within our clients' organizations. We offer a comprehensive package encompassing both the technological infrastructure and human resources necessary to effectively manage digitalized information. Our role is vital in fostering efficient communication, streamlining workflow processes, and facilitating strategic decision-making by leveraging cutting-edge technology and robust data management practices.",
    image: infoSysIMG,
  },
  {
    name: `Internship and Mentorship`,
    content:
      "A2K Group extends opportunities to proactive students and emerging professionals to cultivate and enhance their skills within a world-class digital environment. Our commitment to personnel development involves immersing them in dynamic projects and streamlined courses, and equipping them to excel on a global scale within the realm of digitalization services. With a vibrant and expanding team, we offer abundant prospects for aspiring digital enthusiasts who are driven to make a significant impact both socially and commercially.",
    image: mentorshipIMG,
  },
  {
    name: `Training`,
    content:
      "We provide tailored training programs for commercial, educational and government organizations, offering a diverse range of courses that cater to various digital skill levels. Whether catering to students eager to nurture a newfound passion for digital technology or seasoned professionals seeking to refine specific skills and enhance their capabilities, we customize our approach to meet clients where they are, ensuring they achieve their professional and operational goals. Connect with our dedicated courses team to explore how we can equip your staff and students with the latest in-demand digital skillsets.",
    image: trainingIMG,
  },
  {
    name: `Consultancy`,
    content:
      "We provide consultancy services by conducting a thorough assessment of a client's existing systems and identifying opportunities for digital transformation. Our experts then collaborate closely with our client to design a tailored roadmap, outlining strategic steps to integrate cutting-edge digital solutions. Throughout the consultancy process, we provide ongoing support, ensuring a seamless transition to more efficient and technologically advanced systems tailored to the specific needs of the client.",
    image: consultancyIMG,
  },
  {
    name: `Expertise Support`,
    content:
      "Our highly skilled team of data engineers and software developers is dedicated to providing comprehensive support to clients across the data industry spectrum. Our commitment extends to large and medium-sized enterprises and startups alike. Our professionals bring a wealth of expertise to the table, offering tailored solutions that harness the power of data to drive success. Whether it's optimizing existing data infrastructure, developing cutting-edge software solutions, or guiding startups in their data-related endeavors, our team is adept at delivering innovative and scalable outcomes for clients of all sizes.",
    image: expertiseIMG,
  },
  {
    name: `Facilitation Services`,
    content:
      "Located in Pampanga, Philippines, our office headquarters serves as a central hub for facilitation services to bring together investors, experts, and entrepreneurs under one roof. Our overarching goal is to nurture the growth of the local startup ecosystem, providing transformative services that extend not only throughout the province but also beyond its borders.",
    image: facilityIMG,
  },
  {
    name: `Seed Funding`,
    content:
      "We provide innovation funding to projects initiated by both our internal employees and part and full-time interns. This essential capital empowers aspiring developers to make a sustainable impact, both socially and commercially. Complemented by guidance from our experts and access to cutting-edge toolsets within our company, we pave the way for these projects to thrive in the dynamic digital landscape.",
    image: fundingIMG,
  },
];
export { navItem, socialMediaItem, services };
