import { StaticImageData } from "next/image";
import runner from "@/public/assets/images/survey/running/18.avif";
import golf from "@/public/assets/images/survey/golf/17.avif";
import football1 from "@/public/assets/images/survey/football/1.avif";
import football2 from "@/public/assets/images/survey/football/2.avif";
import football3 from "@/public/assets/images/survey/football/3.avif";
import football4 from "@/public/assets/images/survey/football/4.avif";
import football5 from "@/public/assets/images/survey/football/5.avif";
import football6 from "@/public/assets/images/survey/football/6.avif";
import football7 from "@/public/assets/images/survey/football/7.avif";
import basketball1 from "@/public/assets/images/survey/basketball/8.avif";
import basketball2 from "@/public/assets/images/survey/basketball/9.avif";
import basketball3 from "@/public/assets/images/survey/basketball/10.avif";
import basketball4 from "@/public/assets/images/survey/basketball/11.avif";
import basketball5 from "@/public/assets/images/survey/basketball/12.avif";
import soccer1 from "@/public/assets/images/survey/soccer/13.avif";
import soccer2 from "@/public/assets/images/survey/soccer/14.avif";
import soccer3 from "@/public/assets/images/survey/soccer/15.avif";
import soccer4 from "@/public/assets/images/survey/soccer/16.avif";

export interface TabItemSports {
  tabItemName: string;
  tabItemValue: string;
  tabLink: string;
  tabProgram: string;
  tabItemImage: string | StaticImageData;
  tabItemAlt: string;
}

export interface FormTabContent {
  tabName: string;
  tabValue: string;
  tabItems: TabItemSports[];
}

export const IndividualSportData: FormTabContent[] = [
  {
    tabName: "Running",
    tabValue: "running",
    tabItems: [
      {
        tabItemName: "Runner",
        tabItemValue: "runner",
        tabLink: "/webinar/running",
        tabProgram: "Program for solo runners.",
        tabItemImage: runner,
        tabItemAlt: "running person",
      },
    ],
  },
  {
    tabName: "Golf",
    tabValue: "golf",
    tabItems: [
      {
        tabItemName: "Golfer",
        tabItemValue: "golfer",
        tabLink: "/webinar/golf",
        tabProgram: "Program for golfers.",
        tabItemImage: golf,
        tabItemAlt: "golf player",
      },
    ],
  },
];

export const GroupSportData: FormTabContent[] = [
  {
    tabName: "Football",
    tabValue: "football",
    tabItems: [
      {
        tabItemName: "QB",
        tabProgram: "Program for QB players.",
        tabLink: "/webinar/football/qb",
        tabItemValue: "football-qb",
        tabItemImage: football1,
        tabItemAlt: "qb football player",
      },
      {
        tabItemName: "RB",
        tabProgram: "Program for RB  players.",
        tabLink: "/webinar/football/rb",
        tabItemValue: "football-rb",
        tabItemImage: football2,
        tabItemAlt: "rb football player",
      },
      {
        tabItemName: "WR",
        tabProgram: "Program for WR players.",
        tabLink: "/webinar/football/wr",
        tabItemValue: "football-wr",
        tabItemImage: football3,
        tabItemAlt: "wr football player",
      },
      {
        tabItemName: "OL",
        tabProgram: "Program for OL players.",
        tabLink: "/webinar/football/ol",
        tabItemValue: "football-ol",
        tabItemImage: football4,
        tabItemAlt: "ol football player",
      },
      {
        tabItemName: "DL",
        tabProgram: "Program for DL players.",
        tabLink: "/webinar/football/dl",
        tabItemValue: "football-dl",
        tabItemImage: football5,
        tabItemAlt: "dl football player",
      },
      {
        tabItemName: "Corner",
        tabProgram: "Program for Corner players.",
        tabLink: "/webinar/football/db",
        tabItemValue: "football-corner",
        tabItemImage: football6,
        tabItemAlt: "corner football player",
      },

      {
        tabItemName: "Safety",
        tabProgram: "Program for Safety players.",
        tabLink: "/webinar/football/db",
        tabItemValue: "football-safety",
        tabItemImage: football7,
        tabItemAlt: "safety football player",
      },
    ],
  },
  {
    tabName: "Basketball",
    tabValue: "basketball",
    tabItems: [
      {
        tabItemName: "PG",
        tabProgram: "Program for PG basketball players.",
        tabLink: "/webinar/basketball",
        tabItemValue: "basketball-pg",
        tabItemImage: basketball1,
        tabItemAlt: "pg basketball player",
      },
      {
        tabItemName: "SG",
        tabProgram: "Program for SG basketball players.",
        tabLink: "/webinar/basketball",
        tabItemValue: "basketball-sg",
        tabItemImage: basketball2,
        tabItemAlt: "sg basketball player",
      },
      {
        tabItemName: "SF",
        tabProgram: "Program for SF basketball players.",
        tabLink: "/webinar/basketball",
        tabItemValue: "basketball-sf",
        tabItemImage: basketball3,
        tabItemAlt: "sf basketball player",
      },
      {
        tabItemName: "PF",
        tabProgram: "Program for PF basketball players.",
        tabLink: "/webinar/basketball",
        tabItemValue: "basketball-pf",
        tabItemImage: basketball4,
        tabItemAlt: "pf basketball player",
      },
      {
        tabItemName: "Center",
        tabProgram: "Program for Center basketball players.",
        tabLink: "/webinar/basketball",
        tabItemValue: "basketball-center",
        tabItemImage: basketball5,
        tabItemAlt: "center basketball player",
      },
    ],
  },
  {
    tabName: "Soccer",
    tabValue: "soccer",
    tabItems: [
      {
        tabItemName: "Forward",
        tabProgram: "Program for Forward players.",
        tabLink: "/webinar/soccer",
        tabItemValue: "soccer-forward",
        tabItemImage: soccer1,
        tabItemAlt: "forward soccer player",
      },
      {
        tabItemName: "Midfielder",
        tabProgram: "Program for Midfielder players.",
        tabLink: "/webinar/soccer",
        tabItemValue: "soccer-midfielder",
        tabItemImage: soccer2,
        tabItemAlt: "midfielder soccer player",
      },
      {
        tabItemName: "Defense",
        tabProgram: "Program for Defensive players.",
        tabLink: "/webinar/soccer",
        tabItemValue: "soccer-defense",
        tabItemImage: soccer3,
        tabItemAlt: "defense soccer player",
      },
      {
        tabItemName: "Goalkeeper",
        tabProgram: "Program for Goalkeepers.",
        tabLink: "/webinar/soccer",
        tabItemValue: "soccer-goalkeeper",
        tabItemImage: soccer4,
        tabItemAlt: "goalkeeper soccer player",
      },
    ],
  },
];
