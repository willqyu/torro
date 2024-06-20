import { 
    DM_Serif_Display, Playfair_Display, Montserrat 
} from "next/font/google";



export const serifLogo = DM_Serif_Display({  subsets: ["latin"], weight: "400"  });
export const serifBody = Playfair_Display({  subsets: ["latin"], weight: "400"  });
export const sanSerif = Montserrat({  subsets: ["latin"], weight: "300"  })