import logo from "@/public/logo.svg";
import vektor from "@/public/vektor.svg";
import icon from "@/public/icon.svg";
import Image from "next/image";
import search from "@/public/header/search.svg";

export default function Header() {
  return (
    <div className="w-full h-[75px] flex direction-colum items-center justify-center border-b bg-[#ffffff]">
      <div className="w-[94%] flex items-center justify-between">
        <div className="w-[59px] h-[58.85px] flex items-center flex-col">
          <div className="w-[59px] h-[39.65px]">
            <Image src={logo} alt="logo" width={59} height={39} />
          </div>
        </div>
        <div className="w-[513px] h-[39px] rounded-md bg-[#CBD5E0] relative">
          <input className="w-full h-[39px] border border-solid bg-[#CBD5E0] rounded-md" />
          <span className="font-inter font-medium text-[12px] leading-[18px] text-[#A0AEC0] absolute top-[10px] left-[18px]">
            Search...
          </span>
          <Image
            src={search}
            alt="search"
            width={24}
            height={24}
            className="absolute top-[7px] right-[10px]"
          />
        </div>
        <div className="flex items-center w-[140px] flex justify-around">
          <div className="w-[46px] h-[46px] bg-[#2636DC] flex justify-center rounded-[50%]">
            <Image src={icon} alt="icon" width={16.36} height={16.36} />
          </div>
          <div className="font-inter font-semibold text-[14px] leading-[24px]">
            Chasen
          </div>
          <div>
            <Image src={vektor} alt="vektor" width={8} height={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
