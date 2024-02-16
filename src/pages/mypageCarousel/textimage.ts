import image1 from "../../assets/거북이카드.png";
import image2 from "../../assets/고릴라카드.png";
import image3 from "../../assets/날다람쥐카드.png";
import image4 from "../../assets/레서판다카드.png";

export const images: string[] = [image1, image2, image3, image4];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
