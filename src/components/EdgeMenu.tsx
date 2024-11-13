import { SIDE_LINKS } from "../constants/data";
import ContentPanel from "./ContentPanel";
import HeaderSection from "./SectionTitle";
import PostImage from "../assets/images/like.png";
import Tag from "./Descriptor";
import AdvertisementBanner from "./AdvertisementBanner";

const EdgeMenu = () => {
  return (
    <aside className="h-full pt-[35px]">
      <div className="flex flex-col  md:pt-[80px]">
        <HeaderSection title="Categories" />
        <nav className="pt-[15px]">
          <ul className="flex md:flex-col flex-wrap gap-[20px]">
            {SIDE_LINKS.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="text-[#1c1b21] text-[14px] font-[400] leading-[16.94px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" w-full flex-wrap mt-[20px] md:mt-[28px]">
          <HeaderSection title="Latest Posts" />
          <div className="grid grid-cols-2 md:flex flex-col gap-[20px] mt-[20px]">
            {[1, 2 , 3].map((_, index) => (
              <ContentPanel
                key={index}
                imageUrl={PostImage}
                date="September 20, 2023"
                title="Google Announces Fibre Optic Cable."
              />
            ))}
          </div>
        </div>
        <div className="mt-[30px] md:mt-[49px] ">
          <HeaderSection title="Tags" />
          <div className="flex gap-2 mt-[20px] w-full flex-wrap">
            {[1, 2, 3, 4, 6, 7, 8].map((_, index) => (
              <Tag key={index} title="#East Africa Cloud" />
            ))}
          </div>
        </div>
        <div className="hidden md:block mt-[49px] ">
          <AdvertisementBanner />
        </div>
      </div>
    </aside>
  );
};

export default EdgeMenu;
