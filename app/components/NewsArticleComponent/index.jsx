import React from "react";
import { Text, Img , ChipView } from "./..";

export default function NewsArticleComponent({
    mainImage = "images/ing_rectangle_182.png",
    headlineText = "Google Announces Fibre Optic Cable Connecting Africa, Australia",
    authorName = "Joni Sendler",
    publicationDate = "September 28, 2823",
    ...props
}) {
    const [chipOptions, setChipOptions] = React.useState([
        { value: 1, label: "NEWS" },
        { value: 2, label: "SMART BANKING SUMMIT" },
    ]);
    
    const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-[24%] d:w-full gap-3.5`}>
            <img src={mainImage} alt="News Image" className="h-[226px] w-full object-cover" />
            <div className="flex flex-col gap-1.5 self-stretch">
                <ChipView
                    options={chipOptions}
                    setOptions={setChipOptions}
                    values={selectedChipOptions}
                    setValues={setSelectedChipOptions}
                    className="flex flex-wrap gap-2"
                    renderChip={(option) => (
                        <React.Fragment key={option.value}>
                            <div onClick={option.toggle}
                                className={`min-w-[68px] text-[12px] h-[38px] flex cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-lg border border-solid border-gray-788_99 bg-gray-58 px-3.5 text-center font-graphiktrial2 lowercase text-gray-760 ${option.isSelected ? 'bg-gray-50' : ''}`}
                            >
                                <span>{option.label}</span>
                            </div>
                        </React.Fragment>
                    )}
                />
                <div className="flex flex-col gap-1">
                    <Text
                        size="text1g"
                        className="leading-[144%] text-[16px] font-graphiktrial2 font-normal text-gray-980"
                    >
                        {headlineText}
                    </Text>
                    <div className="flex items-center">
                        <div className="flex items-center gap-1.5">
                            <img
                                src="images/ing_ellipse_36_24x24.png"
                                alt="Author Image"
                                className="rounded-[12px] w-[24px] h-[24px] object-cover"
                            />
                            <Text size="textxs" as="p" className="text-[12px] font-graphiktrial2 font-normal text-black-900_b2">
                                {authorName}
                            </Text>
                        </div>
                        <div className="flex self-start">
                            <div className="h-[14px] w-px bg-white-a788_4c" />
                            <div className="h-[14px] w-px bg-white-a788_4c" />
                        </div>
                        <Text size="textxs" as="p" className="text-[12px] leading-1.5 font-graphiktrial2 font-normal text-black-988_99">
                            {publicationDate}
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
