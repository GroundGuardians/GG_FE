import image1 from "./assets/question1.svg";
import image2 from "./assets/question2.svg";
import image3 from "./assets/question3.svg";
import image4 from "./assets/question4.svg";

export const images: string[] = [image1, image2, image3, image4];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
