import image1 from "../../assets/turtle.png";
import image2 from "../../assets/gorilla.png";
import image3 from "../../assets/daramzi.png";
import image4 from "../../assets/panda.png";

export const images: string[] = [image1, image2, image3, image4];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
