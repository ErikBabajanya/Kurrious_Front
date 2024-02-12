import Image from "next/image";
import user from "@/public/settings/user.svg";

export default function Settings() {
  return (
    <div className="w-[203px] h-full border-r">
      <div className="w-full h-[57px] flex items-center pl-[15px] border-b">
        <div className="w-[113px] h-[24px]">
          <div className="font-inter text-[16px] leading-[24px] font-semibold	">
            Settings
          </div>
        </div>
      </div>
      <div className="w-full" style={{ height: "calc(100% - 57px)" }}>
        <div className="w-full h-[49px] flex justify-evenly items-center">
          <div className="w-[152px] h-[17px] flex justify-between">
            <Image src={user} alt="user" width={16} height={16} />
            <div className="w-[126px] h-[17] font-inter text-[14px] leading-[16.94px] font-medium	">
              Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
