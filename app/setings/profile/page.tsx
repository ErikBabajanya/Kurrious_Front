import Header from "@/components/header/Header";
import Image from "next/image";
import user from "@/public/settings/user.svg";
import Settings from "@/components/settings/Settings";

export default function setings() {
  return (
    <div className="w-full h-[100vh]">
      <Header />
      <div className="w-full flex" style={{ height: "calc(100% - 75px)" }}>
        <Settings />
        <div className="w-full h-full">
          <div className="w-full h-[57px] border-b flex items-center pl-[16px]">
            <div className="w-[133px] h-[24px]">
              <div className="font-inter text-[16px] leading-[24px] font-semibold	">
                Account settings
              </div>
            </div>
          </div>
          <div className="max-w-[425px] pl-[17px] pt-[17px]">
            <div className="w-full h-[17px]">
              <div className="font-inter text-[14px] leading-[16.94px] font-medium">
                Profile picture
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="flex items-center">
                <div className="w-[70px] h-[70px] bg-stone-500 rounded-[50%]"></div>
                <div className="ml-[14px]">
                  <button className="w-[144px] h-[26px] bg-[#E4ECF7] rounded-[6px]">
                    <span className="font-inter font-semibold text-[#505780] text-[11px] leading-[12px]">
                      Update profile picture
                    </span>
                  </button>
                  <div className="w-[279px] h-[12px] mt-[7px] font-inter font-normal text-[9px] leading-[12px]">
                    The format must be JPEG, PNG, or GIF and cannot exceed 10
                    MB.
                  </div>
                </div>
              </div>
              <div className="w-full h-[199px] flex flex-col justify-evenly">
                <div className="w-full h-[61px] flex flex-col justify-between">
                  <div className="w-full h-[17px]">
                    <div className="font-inter font-medium text-[14px] leading-[16.94px] text-[#425466]">
                      Username
                    </div>
                  </div>
                  <div className="w-full h-[36px]">
                    <input
                      className="w-full h-[36px] rounded-[6px] bg-[#EDF2F7]"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="w-full h-[61px] flex flex-col justify-between">
                  <div className="w-full h-[17px]">
                    <div className="font-inter font-medium text-[14px] leading-[16.94px] text-[#425466]">
                      Email
                    </div>
                  </div>
                  <div className="w-full h-[36px]">
                    <input
                      className="w-full h-[36px] rounded-[6px] bg-[#EDF2F7]"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="w-full h-[29px]">
                  <button className="w-[116px] h-[29px] rounded-[4px] bg-[#EDF2F7]">
                    <span className="font-inter text-[13px] leading-[13px] font-medium text-[#4A5568]">
                      Reset password
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-[113px] h-[36px] bg-[#00ADFF] rounded-[6px]">
                <button className="w-full h-full text-[#FFFFFF]">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
