import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import plus from "@/public/jenny/plus.svg";
import pen from "@/public/jenny/pen.svg";
import plusWithe from "@/public/jenny/plusWithe.svg";

export default function page() {
  return (
    <div className="w-full h-[100vh]">
      <Header />
      <Menu />
      <div className="flex" style={{ height: "calc(100% - 125px)" }}>
        <div className="w-[350px] min-w-[300px] bg-[#F7FAFC] border-r h-full">
          <div className="w-full h-[57px] border-b">
            <div className="w-[113px] h-[24px] pl-[16px] pt-[16px]">
              <div className="font-inter font-semibold text-[16px] leading-[24px]">
                Conversations
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-[56px] flex justify-center items-center">
              <button className="w-[280px] min-w-[280px] h-[36px] border rounded-[6px] bg-[#FFFFFF] flex items-center pl-[8px]">
                <Image src={plus} alt="plus" width={18} height={18} />
                <span className="font-inter font-medium	 text-[12px] leading-[13px] ml-2">
                  New conversation
                </span>
              </button>
            </div>
            <div className="w-full ">
              <div className="w-full h-[68px] flex items-center pl-[6px] border-b">
                <div className="bg-[#757682] w-[36px] h-[36px] rounded-[50%]"></div>
                <div>
                  <div className="font-inter text-[12px] leading-[24px] font-semibold	">
                    Trucking questions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[57px] min-h-[57px] bg-white border-b">
            <div className="h-full pl-[16px] flex items-center">
              <div className="flex">
                <span className="w-[77px] h-[24px] font-inter font-semibold text-[16px] leading-[24px] ">
                  New chat
                </span>
                <Image src={pen} alt="pen" width={18} height={18} />
              </div>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-[525px] h-[161px] flex flex-col justify-between">
              <div className="max-w-[525px] h-[92px] flex justify-between flex-col">
                <div className="font-inter text-[36px] leading-[40px] font-semibold	text-center">
                  Welcome to Kurrious
                </div>
                <div className="font-medium	font-inter text-[16px] leading-[20px] text-center">
                  Get started by writing and Jenny can do the rest. Create a new
                  chat or select from your existing ones to get started
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button className="w-[215.09px] justify-center text-[#ffffff] h-[45px] bg-[#00ADFF] flex justify-evenly items-center rounded-[7.63px]">
                  <Image
                    src={plusWithe}
                    alt="plusWithe"
                    width={22}
                    height={22}
                  />
                  New conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
