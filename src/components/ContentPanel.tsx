import { FC } from "react";

interface ContentPanelProps {
  imageUrl?: string;
  date?: string;
  title?: string;
}

const ContentPanel: FC<ContentPanelProps> = ({ imageUrl, date, title }) => {
  return (
    <div className="content-panel flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-[19px]">
      <div className="image-container w-[100%] md:w-fit">
        <img src={imageUrl} alt="Post" className="post-image w-full md:w-fit" />
      </div>
      <div className="text-container flex flex-col gap-[6px] pt-[10px] pl-[2px] pb-[2px]">
        <p className="post-date text-[12px] font-[400] leading-[17.28px]">
          {date}
        </p>
        <h2 className="post-title text-[14px] font-[600] leading-[20.16px]">{title}</h2>
      </div>
    </div>
  );
};

export default ContentPanel;
