import { ReactComponent as TimeIcon } from "../assets/images/clock.svg";
// import { newsProvider } from "../services/newsProvider";
import Label from "../components/Descriptor";
import MainImage from "../assets/images/banner.svg";
import userImage from "../assets/images/profileImage.png";
import SecondaryImage from "../assets/images/banner_2.svg";
import HighlightText from "../components/TextHighlight";
import AdBanner from "../components/AdvertisementBanner";

const HomePage = () => {
  const categories = ["Tech", "Cybersecurity", "Cloud", "Business", "Finance"];

  // Cache query results to enhance performance
  // const { loadingStatus } = useQuery({
  //   queryKey: ["newsItems"],
  //   queryFn: newsProvider.fetchNews,
  // });

  // if (loadingStatus) return <p>Loading content...</p>;

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {(categories as string[]).map((category) => (
          <Label key={category} title={category} />
        ))}
      </div>

      <div className="mt-[9px]">
        <h1 className="text-[28px] font-[300] leading-[37.52px]">
          Cloud & Cybersecurity Professionals Unite in Uganda
        </h1>
      </div>

      <div className="flex items-center gap-[6px] mt-[9px]">
        <img
          src={userImage}
          className="w-[24px] h-[24px] rounded-full"
          alt="User profile"
        />
        <p className="text-[#000000B2] text-[12px] leading-[17.28px]">Joni Sendler</p>
        <div className="h-[14px] w-px bg-[#312F3B40] mx-4"></div>
        <p className="text-[#000000B2] text-[12px] leading-[17.28px]">September 20, 2023</p>
        <div className="h-[14px] w-px bg-[#312F3B40] mx-4"></div>
        <div className="flex items-center gap-1">
          <TimeIcon />
          <p className="text-[#000000B2] text-[12px] leading-[17.28px]">2 min read</p>
        </div>
      </div>

      <div className="mt-[20px] md:mt-[48px]">
        <img src={MainImage} alt="Main banner" />
      </div>

      <div className="mt-[19.92px] md:mt-[45px]">
        <h1 className="font-[600] text-[20px] leading-[24px]">BUI East Africa GM</h1>
        <p className="mt-[35px] font-[400] text-[16px] leading-[26px]">
          Tech leaders, government officials, and cloud and cybersecurity experts recently gathered
          in Kampala, Uganda, for the Africa Cloud & Security Roadshow, hosted at the Four Points by Sheraton.
        </p>
        <p className="mt-[35px] font-[400] text-[16px] leading-[26px]">
          Organized by dx5, Africa's technology enabler, and powered by BUI East Africa, this roadshow aims
          to push East Africa's tech advancement forward.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:gap-[78px] mt-[25px] md:mt-[62px]">
        <img src={SecondaryImage} alt="Secondary banner" />
        <div className="flex flex-col mt-[25px] gap-6">
          <p className="font-[400] text-[16px] leading-[26px]">
            BUI East Africa GM Hasmukh Chudasama presented a keynote titled “You've Been Hacked - Now What?”
            focusing on breach response. He highlighted steps like containment, investigation, and strategic communication.
          </p>
          <p className="font-[400] text-[16px] leading-[26px]">
            Tech expert Kelvin Ngware showcased AI-driven Microsoft Copilot, transforming workplaces across Africa.
          </p>
          <p className="font-[400] text-[16px] leading-[26px]">
            Allan Lwala, Cybersecurity and Forensics Lead at Xylem Networks, explored the evolving cybersecurity field and the challenges ahead.
          </p>
        </div>
      </div>

      <div className="md:hidden lg:hidden flex flex-col items-center mt-[43px] mx-auto">
        <AdBanner />
      </div>

      <div className="mt-[43px]">
        <h1 className="font-[600] text-[20px] leading-[24px]">BUI East Africa GM</h1>
        <p className="mt-[24px] font-[400] text-[18px] leading-[24.3px]">
          During his keynote, Chudasama discussed critical response strategies for handling security incidents.
        </p>
        <p className="mt-[24px] font-[400] text-[18px] leading-[24.3px]">
          Ngware introduced the transformative potential of Microsoft Copilot, showcasing its productivity-enhancing features.
        </p>

        <div className="mt-[30px]">
          <HighlightText message="Experts from across the region shared key insights into tech trends and challenges at the Kampala event." />
        </div>

        <p className="mt-[30px] font-[400] text-[18px] leading-[24.3px]">
          Chudasama stressed the need for a proactive breach response plan.
        </p>
        <p className="mt-[30px] font-[400] text-[18px] leading-[24.3px]">
          Ngware showcased how AI is transforming African workplaces via Microsoft Copilot.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
