import React, { Suspense } from "react";
import { Text, ChipView } from "../../components";
import NewsArticle from "../../components/NewsArticle";
import KeepReadingSection from "./KeepReadingSection";

// Sample news article data
const newsUpdateList = [
  {
    articleDate: "September 20, 2023",
    articleTitle: "Google Announces Fibre Optic Cable"
  },
  {
    articleDate: "September 20, 2023",
    articleTitle: "Google Announces Fibre Optic Cable"
  },
  {
    articleDate: "September 20, 2023",
    articleTitle: "Google Announces Fibre Optic Cable"
  }
];

export default function DesktopPage() {
  const [chipOptions, setChipOptions] = React.useState([
    { value: 1, label: "#East Africa Cloud" },
    { value: 2, label: "#East Africa" },
    { value: 3, label: "#East Africa · Cybersecurity Roadshow" }
  ]);

  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <div className="flex flex-col gap-[84px] self-stretch lg:gap-[84px] md:gap-[63px] sm:gap-[42px]">
      <div className="flex flex-col items-center gap-[34px]">
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex items-center md:flex-col">
            <div className="w-[24%] md:w-full">
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-col items-start gap-2.5">
                  <Text size="textx1" as="p" className="text-[18px] font-medium text-gray-900 lg:text-[15px]">
                    Categories
                  </Text>
                  <div className="flex flex-col items-start self-stretch">
                    <div className="h-px w-[60%] rounded-[1px] bg-blue_gray-100_54" />
                    <div className="h-px w-[44px] rounded-[1px] bg-red-a700" />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <Text as="p" className="text-[14px] font-normal text-gray-900">News</Text>
                  <Text as="p" className="text-[14px] font-normal text-gray-900">Subscriptions</Text>
                  <Text as="p" className="text-[14px] font-normal text-gray-900">Event</Text>
                  <Text as="p" className="text-[14px] font-normal text-gray-900">Video</Text>
                  <Text as="p" className="text-[14px] font-normal text-gray-900">
                    <span className="lowercase">MAGAZINE</span>
                  </Text>
                  <Text as="p" className="text-[14px] font-normal text-gray-900">Opinions</Text>
                  <Text as="p" className="text-[14px] font-normal text-gray-900">Features</Text>
                  <Text as="p" className="text-[14px] font-normal text-gray-900">Popular stories</Text>
                </div>
              </div>
            </div>

            {/* Latest Posts */}
            <div className="mt-7 flex flex-col gap-5">
              <div className="flex flex-col items-start gap-2.5">
                <Text size="textx1" as="p" className="lg:text-[15px] text-[18px] font-medium text-gray-900">
                  Latest Posts
                </Text>
                <div className="flex flex-col items-start self-stretch">
                  <div className="h-px w-[60%] rounded-[1px] bg-blue_gray-100_54" />
                  <div className="h-px w-[44px] rounded-[1px] bg-red-a700" />
                </div>
                <div className="mr-20 flex flex-col gap-5 md:mr-0">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {newsUpdateList.map((d, index) => (
                      <NewsArticle {...d} key={`newsUpdate_${index}`} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-col gap-5">
              <div className="flex flex-col items-start gap-2.5">
                <Text size="textx1" as="p" className="lg:text-[15px] text-[18px] font-medium text-gray-900">
                  Tags
                </Text>
                <div className="flex flex-col items-start self-stretch">
                  <div className="h-px w-[60%] rounded-[1px] bg-blue_gray-100_54" />
                  <div className="h-px w-[44px] rounded-[1px] bg-red-a700" />
                </div>
                <ChipView
                  options={chipOptions}
                  setOptions={setChipOptions}
                  values={selectedChipOptions}
                  setValues={setSelectedChipOptions}
                  className="flex flex-wrap gap-x-1 gap-y-2"
                >
                  {(option) => (
                    <React.Fragment key={option.value}>
                      {option.isSelected ? (
                        <div
                          onClick={option.toggle}
                          className="min-w-[135px] text-[12px] h-[32px] flex cursor-pointer items-center justify-center rounded border border-solid border-gray-50_99 bg-gray-50 px-4 text-gray-700"
                        >
                          {option.label}
                        </div>
                      ) : (
                        <div
                          onClick={option.toggle}
                          className="min-w-[135px] text-[12px] h-[32px] flex cursor-pointer items-center justify-center rounded border border-solid border-deep_purple-100_99 bg-gray-50 px-4 text-gray-700"
                        >
                          {option.label}
                        </div>
                      )}
                    </React.Fragment>
                  )}
                </ChipView>
              </div>
            </div>
          </div>
        </div>
      </div>
      <KeepReadingSection />
    </div>
  );
}