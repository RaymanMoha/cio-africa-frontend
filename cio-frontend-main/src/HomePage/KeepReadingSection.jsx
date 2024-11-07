
import { Button, Heading } from "../../components";
import NewsArticleComponent from "../../components/NewsArticleComponent";
import React, { Suspense } from "react";

const newsHighlightList = [
  {
	mainImage: "images/img_rectangle_102.png",
	headlineText: "Google Announces Fibre Optic Cable Connecting Africa, Australia",
	authorName: "Joni Sendler",
	publicationDate: "September 20, 2023",
  },
  {
	mainImage: "images/img_rectangle_102_226x316.png",
	headlineText: "Google Announces Fibre Optic Cable Connecting Africa, Australia",
	authorName: "Joni Sendler",
	publicationDate: "September 20, 2023",
  },
  {
	mainImage: "images/img_rectangle_102_1.png",
	headlineText: "Google Announces Fibre Optic Cable Connecting Africa, Australia",
	authorName: "Joni Sendler",
	publicationDate: "September 20, 2023",
  },
  {
	mainImage: "images/img_rectangle_102_2.png",
	headlineText: "Google Announces Fibre Optic Cable Connecting Africa, Australia",
	authorName: "Joni Sendler",
	publicationDate: "September 20, 2023",
  },
];

export default function KeepReadingSection() {
  return (
	<div className="flex flex-col items-center self-stretch">
	  <div className="container-xs flex flex-col gap-[38px] 1g:px-5 md:px-5">
		<div className="flex items-center justify-between gap-5">
		  <Heading
			size="text2x1"
			as="h3"
			className="mb-1 self-end text-[20px] font-medium text-gray-900 lg:text-[17px]"
		  >
			Keep Reading
		  </Heading>
		  <Button
			color="gray_900"
			size="sm"
			variant="outline"
			shape="round"
			className="min-w-[124px] rounded-lg !border px-[33px] font-semibold sm:px-4"
		  >
			See All
		  </Button>
		</div>
		<div className="flex gap-7 md:flex-col">
		  <Suspense fallback={<div>Loading feed...</div>}>
			{newsHighlightList.map((d, index) => (
			  <NewsArticleComponent {...d} key={"newsList" + index} />
			))}
		  </Suspense>
		</div>
	  </div>
	</div>
  );
}