import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LeadershipCards } from "@/components/leadership-cards";

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Stephanie Fuller",
      title: "EXECUTIVE DIRECTOR",
      imagePlaceholder: "/images/stephanie-fuller.jpg",
      bio: [
        "Stephanie Fuller is the President of Iris Consulting Solutions, LLC, a project management consulting firm supporting nonprofits, small businesses, and startups.",
        "Stephanie has 17 years of insurance industry leadership experience and 14 years of project management experience.",
        "In addition to her Bachelor of Science degree in Healthcare Management, Stephanie has earned several designations. Her credentials include the Project Management Professional (PMP), the Certified Internal Auditor (CIA), the Certified Scrum Master (CSM), the Six Sigma Green Belt (SSGB), the Chartered Property and Casualty Underwriter (CPCU), the Associate in Claims (AIC), and the Toastmasters Competent Communicator designations.",
        "Stephanie Fuller is the President and CEO of Iris Consulting Solutions, LLC. Before diving into project management several years ago, she has spent two decades in leadership roles within insurance companies to lead their claims, compliance, and project management departments. When she was asked to create a Project Management Office for the insurance division, she instantly fell in love with project management. Learning the tools, methodologies, and processes to get things done effectively and efficiently was so much fun! There are opportunities to use project management in all aspects of business, as well as in everyday life."
      ]
    },
    {
      name: "Susan Bachman",
      title: "VICE PRESIDENT",
      imagePlaceholder: "/images/susan-bachman.jpg",
      bio: [
        "Susan Bachman is a Network Analyst at Sangamon County. Susan began her information technology career in 2014 as a PC/Network Technician and was promoted to her current position in 2017. Prior to her career in IT, Susan worked in various support roles and was the village clerk for an Illinois community for 11 years.",
        "She attended Midstate College in Peoria, Illinois and has continued her education through training programs specific to her role as network analyst. In her spare time, she enjoys spending time with friends and family and traveling."
      ]
    },
    {
      name: "Jim Conlon",
      title: "BOARD MEMBER",
      imagePlaceholder: "/images/jim-conlon.jpg",
      bio: [
        "Jim Conlon has over twenty-four years of GIS experience and has been managing GIS projects for the past seventeen years. Jim has a Bachelor of Science and a Master in Business Administration from the University of Illinois – Springfield.",
        "In March 2018, with his business partners, took controlling interest in GIS Solutions, Inc. Serving as President, works with the GIS Solutions staff to continue building on the company's reputation and successes in the GIS and IT industry. Jim obtained his Project Management Professional certification from the Project Management Institute in 2005.",
        "Jim is currently working at the Illinois Department of Transportation as a GIS Project and Technical Manager. He has been working in the Transportation industry for the past twenty plus years implementing Roadway Inventory, Structure Inventory, Program Planning, Automated Permitting systems, and other GIS integration projects focusing on the Esri technology suite.",
        "As Project Manager, Jim serves as the point of contact for all non-technical communication regarding contract performance issues: goal setting, staffing, personnel performance, and financial considerations. Before Project Management responsibilities, Jim worked as a GIS Applications Developer responsible for the development of custom applications for private and public agencies utilizing the Esri technology stack."
      ]
    },
    {
      name: "C.J. Metcalf",
      title: "BOARD MEMBER",
      imagePlaceholder: "/images/cj-metcalf.jpg",
      bio: [
        "C.J. Metcalf is the Deputy Director of the Division of Innovation & Emerging Issues at the Illinois Department of Insurance (DOI). C.J. has been with DOI in a variety of capacities since September 2000. Prior to that, he was selected to participate in the year long James H. Dunn Fellowship Program assigned to the Legislative Affairs Office of Governor George H. Ryan.",
        "C.J. obtained his Bachelor's Degree in Political Science from Southeast Missouri State University in 1999. He also earned a Market Conduct Management (MCM) designation from the Insurance Regulatory Examiners Society.",
        "In his spare time, C.J. has served as an elected trustee of the Springfield Park District since April 2015. He is chairman of the park district's Finance Committee. He also serves as Treasurer for the Illinois Association of Park Districts and as a board member of IPARKS, which is a local government risk-sharing pool. He lives in Springfield with his wife, Jenny, and their two sons, Jacob and Owen. C.J. enjoys attending his sons' sporting events where they participate in a variety of competitive-level activities."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">Leadership</h1>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Meet the dedicated leaders guiding our organization
          </p>

          <LeadershipCards leaders={leaders} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
