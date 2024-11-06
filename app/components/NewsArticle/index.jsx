
import { Heading, Text, Img } from ".."; import React from "react";
export default function NewsArticle({
  articleDate,
  articleTitle = "Google Announces Fibre Optic Cable",
  ...props
}) {
  return (
	<div {...props} className={`${props.className} flex items-center gap-[18px] flex-1`}>
	  <Img />
	  <img
		src="images/img_rectangle_101.png"
		alt="September Image"
		className="w-[94px] h-[94px] rounded object-cover"
	  />
	  <div className="flex flex-1 flex-col items-start gap-1.5">
		<Text size="text-xs" as="p" className="text-[12px] font-normal text-black-900_99">
		  {articleDate}
		</Text>
		<Heading size="heading-xs" as="p" className="leading-[144%] text-[14px] w-full font-semibold text-gray-900">
		  {articleTitle}
		</Heading>
	  </div>
	</div>
  );
}