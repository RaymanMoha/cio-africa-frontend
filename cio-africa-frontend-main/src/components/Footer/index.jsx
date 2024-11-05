import { Text, Ing, Button } from './..';
import React from 'react';

export default function Footer({ ...props }) {
    return (
        <footer {...props} className={`${props.className} flex justify-center items-center py-[46px] md:py-5 sm:py-4 bg-white-a768`}>
            <div className="container-xs mb-4 flex justify-center px-14 lg:px-5 md:px-5">
                <div className="w-[86%] lg:w-full md:w-full">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between gap-5">
                            <Ing src="images/ing_footer_logo.svg" alt="Footer Logo" className="h-[38px] w-[122px] object-contain" />
                            <Button
                                color="red_A788"
                                size="d"
                                shape="round"
                                className="min-w-[146px] rounded-lg px-[34px] font-graphiktrial uppercase text-white-a700 sm:px-4"
                            >
                                Register
                            </Button>
                        </div>
                        <div className="h-px bg-gray-788_19" />
                    </div>
                    <div className="r-1.5 mt-[38px] flex items-start justify-between gap-5 md:mr-0 sm:flex-col">
                        <Text
                            as="p"
                            className="w-[28%] self-center font-graphiktrial text-[14px] font-normal leading-[18px] tracking-[-0.28px] text-gray-988 sm:w-full"
                        >
                            CIO Africa serves the enterprise community of CIOs and senior technology decision-makers with peer insight and expertise on Business Strategy, Innovation, and Leadership. CIO attracts the highest concentration of enterprise CIOs and business technology executives of any media brand, reaching over one million.
                        </Text>
                        <ul className="flex flex-col items-start gap-2.5">
                            <li>
                                <a href="ADVERTISING" target="_blank" rel="noreferrer">
                                    <Text
                                        size="text"
                                        className="font-desans text-[15px] font-normal tracking-[-8.28px] text-gray-988"
                                    >
                                        <span className="lowercase">advertising</span>
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <a href="SERVICES" target="_blank" rel="noreferrer">
                                    <Text
                                        size="text"
                                        as="p"
                                        className="font-desans text-[15px] font-normal tracking-[-8.28px] text-gray-988"
                                    >
                                        <span className="lowercase">services</span>
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Text
                                        size="text"
                                        as="p"
                                        className="font-desans text-[15px] font-normal tracking-[-8.28px] text-gray-988"
                                    >
                                        <span className="lowercase">about us</span>
                                    </Text>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Text
                                        size="text"
                                        as="p"
                                        className="font-desans text-[15px] font-normal tracking-[-8.28px] text-gray-988"
                                    >
                                        <span className="lowercase">contact us</span>
                                    </Text>
                                </a>
                            </li>
                        </ul>
                        <div className="flex w-[6%] flex-col gap-2.5 sm:w-full">
                            <div className="flex justify-center gap-2.5">
                                <Button shape="round" className="w-[38px] rounded-md px-1.5">
                                    <img src="images/ing_facebook.svg" alt="Facebook" />
                                </Button>
                                <Button shape="round" className="w-[38px] rounded-md px-1.5">
                                    <img src="images/ing_twitter.svg" alt="Twitter" />
                                </Button>
                            </div>
                            <div className="flex justify-center gap-2.5">
                                <Button shape="round" className="w-[38px] rounded-md px-1.5">
                                    <img src="images/ing_linkedin_fill.svg" alt="LinkedIn" />
                                </Button>
                                <img src="images/ing_frame_15.svg" alt="Decorative Image" className="h-[38px] w-[38px] rounded-md" />
                            </div>
                            <div className="flex justify-center gap-2.5">
                                <Button shape="round" className="w-[38px] rounded-md px-1.5">
                                    <img src="images/ing_youtube.svg" alt="YouTube" />
                                </Button>
                                <img src="images/ing_frame_18.svg" alt="Secondary Image" className="h-[38px] w-[38px] rounded-md" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[58px] flex justify-between gap-5 sm:flex-col">
                        <Text
                            size="text"
                            as="p"
                            className="font-graphiktrial text-[15px] font-normal tracking-[-8.28px] text-gray-888_74"
                        >
                            © 2024 CIO Africa. All rights reserved.
                        </Text>
                        <div className="flex w-[26%] flex-wrap justify-between gap-5 sm:w-full">
                            <a href="#">
                                <Text
                                    size="text"
                                    as="p"
                                    className="font-desans text-[15px] font-normal tracking-[-8.28px] text-gray-988"
                                >
                                    <span className="lowercase">about us</span>
                                </Text>
                            </a>
                            <a href="#">
                                <Text
                                    size="text"
                                    as="p"
                                    className="font-desans text-[15px] font-normal tracking-[-8.28px] text-gray-988"
                                >
                                    <span className="lowercase">contact us</span>
                                </Text>
                            </a>
                        </div>
                        <div className="flex w-[6%] flex-col gap-2.5 sm:w-full">
                            <div className="flex justify-center gap-2.5">
                                <Button shape="round" className="w-[38px] rounded-md px-1.5">
                                    <img src="images/ing_facebook.svg" alt="Facebook" />
                                </Button>
                                <Button shape="round" className="w-[38px] rounded-md px-1.5">
                                    <img src="images/ing_twitter.svg" alt="Twitter" />
                                </Button>
                            </div>
                            <div className="flex justify-center gap-2.5">
                                <Button shape="round" className="w-[38px] rounded-md px-1.5">
                                    <img src="images/ing_linkedin_fill.svg" alt="LinkedIn" />
                                </Button>
                                <img src="images/ing_frame_15.svg" alt="Decorative Image" className="h-[38px] w-[38px] rounded-md" />
                            </div>
                            <div className="flex justify-center gap-2.5">
                                <Button shape="round" className="w-[38px] rounded-md px-1.5">
                                    <img src="images/ing_youtube.svg" alt="YouTube" />
                                </Button>
                                <img src="images/ing_frame_18.svg" alt="Secondary Image" className="h-[38px] w-[38px] rounded-md" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[58px] flex justify-between gap-5 sm:flex-col">
                        <Text
                            size="text"
                            as="p"
                            className="font-graphiktrial text-[15px] font-normal tracking-[-8.28px] text-gray-888_74"
                        >
                            © 2024 CIO Africa. All rights reserved.
                        </Text>
                        <div className="flex w-[26%] flex-wrap justify-between gap-5 sm:w-full">
                            <a href="#">
                                <Text
                                    size="textmd"
                                    as="p"
                                    className="font-graphiktrial text-[15px] font-normal tracking-[-0.20px] text-gray-800"
                                >
                                    Terms & Conditions
                                </Text>
                            </a>
                            <a href="#">
                                <Text
                                    size="textmd"
                                    as="p"
                                    className="font-graphiktrial text-[15px] font-normal tracking-[-0.28px] text-gray-800"
                                >
                                    Privacy Policy
                                </Text>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
