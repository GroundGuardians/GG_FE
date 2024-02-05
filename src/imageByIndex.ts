import image1 from "./assets/info.svg";
import image2 from "./assets/info.svg";
import image3 from "./assets/info.svg";
import image4 from "./assets/info.svg";

export const images: string[] = [image1, image2, image3, image4];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
