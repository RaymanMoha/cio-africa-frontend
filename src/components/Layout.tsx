import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import EdgeMenu from "./EdgeMenu";
import PreviewPanel from "./PreviewPanel";
import Button from "./Button";
import Footer from "./Footer";

// Import the images
import KeepReadingImage1 from "../assets/images/keepreading_1.png";
import KeepReadingImage2 from "../assets/images/keepreading_2.png";
import KeepReadingImage3 from "../assets/images/keepreading_3.png";
import KeepReadingImage4 from "../assets/images/keepreading_4.png";
import profileImage from "../assets/images/profileImage.png";

interface Props { children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
 return (
 <div className="w-full h-full flex flex-col">
  <div className="mx-[16px] md:mx-[80px] flex-grow">
     <Navbar />
     <div className="flex flex-col md:flex-row mt-[75px] gap-[60px]">
      <div className="md:col-span-1 order-2 md:order-1">
        <EdgeMenu />
         </div>
        <main className="order-1 md:order-2">{children}</main>
        </div>
        <div className="flex justify-between items-center mt-[40px]">
          <h1 className="text-[20px] font-[500] leading-[22.33px]">

            Keep Reading

            </h1>
            <Button label="See All" />
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-[75px]">
{[1, 2, 3, 4].map((_, index) => {
  const imageUrl =
    index === 0 ? KeepReadingImage1 :
    index === 1 ? KeepReadingImage2 :
    index === 2 ? KeepReadingImage3 :
    KeepReadingImage4;
return (
<PreviewPanel
key={index}
imageUrl={imageUrl}
title="Google Announces Fibre Optic Cable Connecting Africa, Australia"
author="Jonny sendler"
authorImageUrl={profileImage}
date="September 20, 2023"
/>
);
})}
</div>
 </div>
 <Footer />
 </div>
 );
};

export default Layout;
