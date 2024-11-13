import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import { ButtonVariant } from "../declarations/enums";
import { ReactComponent as FacebookIcon } from "../assets/images/facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../assets/images/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/images/youtube.svg";
import { ReactComponent as FlickrIcon } from "../assets/images/flickr.svg";
import { FOOTER_LINKS } from "../constants/data";

const Footer: React.FC = () => {
  return (
    <div className="bg-light mt-10">
      <div className="mx-4 md:mx-24 my-8">
        <div className="flex justify-between items-center">
          <div>
            <Logo color="light" />
          </div>
          <div>
            <Button label="REGISTER" variant={ButtonVariant.Primary} />
          </div>
        </div>
        <hr className="hidden md:block mt-6 mb-4 border-light" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
          <div className="mt-8">
            <p className="text-sm leading-6 font-light md:w-96">
              CIO Africa serves the enterprise community of CIOs and senior
              technology decision-makers with peer insight and expertise on
              Business Strategy, Innovation, and Leadership. CIO attracts the
              highest concentration of enterprise CIOs and business technology
              executives of any media brand, reaching over one million.
            </p>
          </div>
          <nav className="mt-6">
            <ul className="list-none flex md:flex-col justify-center flex-wrap gap-4">
              {FOOTER_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="text-base leading-5 font-light text-center"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="block md:hidden">
                <a
                  href="/"
                  className="text-base leading-5 font-light text-center"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-base leading-5 font-light text-center"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex md:hidden items-center justify-center gap-4 mt-6">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <FlickrIcon />
          </div>
          <div className="hidden md:flex md:flex-col items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-4">
              <FacebookIcon />
              <TwitterIcon />
            </div>
            <div className="flex items-center gap-4">
              <LinkedinIcon />
              <InstagramIcon />
            </div>
            <div className="flex items-center gap-4">
              <YoutubeIcon />
              <FlickrIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-between mt-4">
          <p className="font-light leading-5 text-sm text-gray-800">
            &copy; {new Date().getFullYear()} CIO Africa. All rights reserved.
          </p>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/"
              className="text-base leading-5 font-light text-center"
            >
              Terms & Conditions
            </a>
            <a
              href="/"
              className="text-base leading-5 font-light text-center"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
