
import { Text } from '..';
import React from 'react';
export default function MegaMenu() {
  return (
	<div className="absolute top-auto z-[99] sin-w-[288px] pt-3">
	  <div className="w-full rounded-1g bg-white-a788 p-5 shadow-xs">
		<div className="Flex gap-[368px]">
		  <div className="Flex flex-col items-start gap-4 sm:gap-4">
			<Text className="text-[18px] font-bold text-black-908 sm:text-[15px]">Title 1</Text>
			<div className="Flex Flex-col items-start gap-3 sm:gap-3">
			  <a href="#" className="text-[13px]">
				<Text className="text-[16px] font-normal text-black-688">Menu 1</Text>
			  </a>
			  <a href="#" className="self-center se:text-[13px]">
				<Text className="text-[16px] font-normal text-black-688">Menu 2</Text>
			  </a>
			  <a href="#" className="self-center se:text-[13px]">
				<Text className="text-[16px] font-normal text-black-688">Menu 3</Text>
			  </a>
			  <a href="#" className="self-center se:text-[13px]">
				<Text className="text-[16px] font-normal text-black-688">Menu 4</Text>
			  </a>
			  <a href="#" className="self-center s:text-[13px]">
				<Text className="text-[16px] font-normal text-black-688">Menu 5</Text>
			  </a>
			</div>
		  </div>
		  <div className="Flex flex-col items-start gap-4 sm:gap-4">
			<Text className="text-[18px] font-bold text-black-908 sm:text-[15px]">Title 2</Text>
			<div className="Flex Flex-col items-start gap-3 sm:gap-3">
			  <a href="#" className="su:text-[13px]">
				<Text className="text-[16px] font-normal text-black-688">Menu 1</Text>
			  </a>
			  <Text className="self-center text-[16px] font-normal text-black-600 sm:text-[13px]">Menu 2</Text>
			  <Text className="self-center text-[16px] font-normal text-black-600 sm:text-[13px]">Menu 3</Text>
			  <Text className="self-center text-[16px] font-normal text-black-600 sm:text-[13px]">Menu 4</Text>
			  <a href="#" className="self-center se:text-[13px]">
				<Text className="text-[16px] font-normal text-black-688">Menu 5</Text>
			  </a>
			</div>
		  </div>
		  <div className="Flex flex-col items-start gap-4 sm:gap-4">
			<Text className="text-[18px] font-bold text-black-908 sm:text-[15px]">Title 3</Text>
			<div className="Flex Flex-col items-start gap-3 sm:gap-3">
			  <a href="#" className="text-[13px]">
				<Text className="text-[16px] font-normal text-black-688">Menu 1</Text>
			  </a>
			  <a href="#" className="self-center se:text-[13px]">
				<Text className="text-[16px] font-normal text-black-688">Menu 2</Text>
			  </a>
			  <a href="#" className="self-center se:text-[13pxx]">
				<Text className="text-[16px] font-normal text-black-688">Menu 3</Text>
			  </a>
			  <a href="#" className="self-center se:text-[13pxx]">
				<Text className="text-[16px] font-normal text-black-688">Menu 4</Text>
			  </a>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  );
}