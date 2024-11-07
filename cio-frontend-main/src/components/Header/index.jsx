import React from "react";
import {  SelectBox, Button, Text } from '../../components'; // Ensure this import is correct

const dropDownOptions = [
    { label: "Option", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <header {...props} className={`${props.className} flex sm:flex-col justify-between items-center gap-5`}>
            <img src="images/ing_header_logo.svg" alt="Header Logo" className="h-[38px] w-[122px] object-contain" />
            <div className="x-auto flex w-full max-w-[1848px] items-center justify-center flex-col md:px-5">
                <ul className="flex w-[1808px] flex-row items-stretch gap-6 self-start md:flex-col md:self-auto">
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text
                                size="text"
                                as="p"
                                className="font-graphiktrial text-[16px] font-normal uppercase text-gray-988 hover:text-red-a788"
                            >
                                Home
                            </Text>
                        </a>
                    </li>
                    <li
                        onMouseLeave={() => {
                            setMenuOpen(false);
                        }}
                        onMouseEnter={() => {
                            setMenuOpen(true);
                        }}
                    >
                        <div className="flex cursor-pointer items-center gap-1">
                            <Text
                                size="text"
                                as="p"
                                className="cursor-pointer font-graphiktrial text-[16px] font-normal uppercase text-gray-988 hover:text-red-a768"
                            >
                                Nows
                            </Text>
                            <Ing src="images/ing_downward_arrow_1.svg" alt="Dropdown Arrow" className="h-[18px] w-[18px]" />
                        </div>
                        {menuOpen ? <MegaMenu /> : null}
                    </li>
                    <li>
                        <a href="#" className="flex cursor-pointer items-stretch justify-start">
                            <Text
                                size="text"
                                as="p"
                                className="font-graphiktrial text-[16px] font-normal uppercase text-gray-988 hover:text-red-a788"
                            >
                                Cxo Series
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text
                                size="text"
                                as="p"
                                className="font-graphiktrial text-[16px] font-normal uppercase text-gray-988 hover:text-red-a788"
                            >
                                Product Reviews
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text
                                size="text"
                                as="p"
                                className="font-graphiktrial text-[16px] font-normal uppercase text-gray-988 hover:text-red-a788"
                            >
                                Women in Tech
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text
                                size="text"
                                as="p"
                                className="font-graphiktrial text-[16px] font-normal uppercase text-gray-988 hover:text-red-a788"
                            >
                                Blog
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Text
                                size="text"
                                as="p"
                                className="font-graphiktrial text-[16px] font-normal uppercase text-red-2768"
                            >
                                Events
                            </Text>
                        </a>
                    </li>
                </ul>
                <Button
                    color="red_A788"
                    shape="round"
                    className="mt-[-28px] min-w-[152px] rounded-lg px-3.5 font-graphiktrial md:ml-0"
                >
                    Latest Magazine
                </Button>
                <a href="#">
                    <Ing
                        src="images/ing_mode_switcher.png"
                        alt="Mode Switcher"
                        className="h-[32px] w-[32px] object-cover"
                    />
                </a>
                <div className="flex justify-center gap-3 md:ml-8 w-full">
                    <SelectBox shape="square" name="Language Dropdown" options={dropDownOptions} className="flex-grow px-3" />
                    <a href="#">
                        <img src="images/ing_search_1.svg" alt="Search Icon" className="h-[18px] w-[18px]" />
                    </a>
                </div>
            </div>
        </header>
    );
}
