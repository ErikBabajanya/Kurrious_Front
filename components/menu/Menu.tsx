import Image from "next/image";
import Jenny from "@/public/menu/jenny.svg";
import Messages from "@/public/menu/messages.svg";
import Records from "@/public/menu/records.svg";
import Customers from "@/public/menu/customers.svg";
import Maintenance from "@/public/menu/maintenance.svg";
import Dashboards from "@/public/menu/dashboards.svg";
import Locations from "@/public/menu/locations.svg";

export default function Menu() {
  return (
    <div className="w-full h-[50px] flex items-center border-b bg-[#ffffff]">
      <div className="flex w-[1007px] justify-around items-center">
        <button className="flex items-center">
          <Image src={Jenny} alt="Jenny" width={22} height={22} />
          <div className="font-medium font-inter text-[14px] leading-[24px]">
            Jenny
          </div>
        </button>
        <button className="flex items-center">
          <Image src={Messages} alt="Messages" width={22} height={22} />
          <div className="font-medium font-inter text-[14px] leading-[24px]">
            Messages
          </div>
        </button>
        <button className="flex items-center">
          <Image src={Records} alt="Records" width={22} height={22} />
          <div className="font-medium font-inter text-[14px] leading-[24px]">
            Records
          </div>
        </button>
        <button className="flex items-center">
          <Image src={Customers} alt="Customers" width={22} height={22} />
          <div className="font-medium font-inter text-[14px] leading-[24px]">
            Customers
          </div>
        </button>
        <button className="flex items-center">
          <Image src={Locations} alt="Locations" width={22} height={22} />
          <div className="font-medium font-inter text-[14px] leading-[24px]">
            Locations
          </div>
        </button>
        <button className="flex items-center">
          <Image src={Maintenance} alt="Maintenance" width={22} height={22} />
          <div className="font-medium font-inter text-[14px] leading-[24px]">
            Maintenance
          </div>
        </button>
        <button className="flex items-center">
          <Image src={Dashboards} alt="Dashboards" width={22} height={22} />
          <div className="font-medium font-inter text-[14px] leading-[24px]">
            Dashboards
          </div>
        </button>
      </div>
    </div>
  );
}
