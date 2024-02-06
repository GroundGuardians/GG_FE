import Q1Image from "../assets/question1.svg";
import Q2Image from "../assets/question2.svg";
import Q3Image from "../assets/question3.svg";
import Q4Image from "../assets/question4.svg";

export const QUIZ_DATA = {
  question:
    "The population of the Greater Glider is declining because of habitat loss, fragmentation, extensive fire, and some forestry practices, and this decline is likely to be exacerbated by [    ] change (Kearneyet al. 2010).",
  answer: "climate",
  url: "https://www.iucnredlist.org/species/40579/166500472",
};

export const SURVEY_DATA = [
  {
    id: 1,
    question: "Q1. I woke up and I have transformed into an animal.",
    image: Q1Image,
    button1: "I wake up on a bright sunny day.",
    button2: "I wake up on a moonlit night.",
  },
  {
    id: 2,
    question:
      "Q2. You just woke up and You're about to have a meal. What's on your menu?",
    image: Q2Image,
    button1: "fresh vegetbale",
    button2: "Juicy meat flowing wih flavor.",
  },
  {
    id: 3,
    question: "Q3. I woke up and I have transformed into an animal.",
    image: Q3Image,
    button1: "alone",
    button2: "with friends",
  },
  {
    id: 4,
    question: "Q4.  Are you on the faster side when it comes to running?",
    image: Q4Image,
    button1: "Sure!",
    button2: "No, I'm slow",
  },
];
