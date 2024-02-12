import Header from "@/components/header/Header";
import Menu from "@/components/menu/Menu";

export default function activeTrucks() {
  return (
    <div className="w-full h-[100vh] bg-[#F7FAFC]">
      <Header />
      <Menu />
      <div
        className="w-full flex flex-col items-center"
        style={{ height: "calc(100% - 125px)" }}
      >
        <div className="min-h-[52px] w-[96%] flex mt-[15px]">
          <div className="w-[113px] h-[52px] flex justify-center	items-center">
            <div className="w-[89px] h-[24px] ">
              <div className="font-inter font-medium text-[16px] leading[24px] text-[#2D3748]">
                All Views
              </div>
            </div>
          </div>
          <div className="w-[152.56px] h-[52px] flex justify-center	items-center border-t border-[#00ADFF] bg-[#ffffff]">
            <div className="w-[128.56px] h-[24px]">
              <div className="font-inter font-medium text-[16px] leading[24px] text-[#00ADFF]">
                Active Trucks
              </div>
            </div>
          </div>
          <div className="w-[135px] h-[52px] flex justify-center	items-center">
            <div className="w-[111px] h-[24px]">
              <div className="font-inter font-medium text-[16px] leading[24px] text-[#2D3748]">
                Driving Trucks
              </div>
            </div>
          </div>
          <div className="w-[151px] h-[52px] flex justify-center	items-center">
            <div className="w-[127px] h-[24px]">
              <div className="font-inter font-medium text-[16px] leading[24px] text-[#2D3748]">
                Completed View
              </div>
            </div>
          </div>
        </div>
        <div className="w-[98%] h-[100%] bg-[#ffffff] rounded-[16px]  flex items-center justify-center">
          <div className="w-[98%] h-[96%]">
            <table>
              <tbody>
                <tr>
                  <th className="w-[222px]">Order Id</th>
                  <th className="w-[217px]">Driver</th>
                  <th className="w-[159px]">pickup day</th>
                  <th className="w-[140px]">pickup time</th>
                  <th className="w-[172px]">delivery date</th>
                  <th className="w-[260px]">delivery address</th>
                  <th className="w-[177px]">status</th>
                </tr>
                <tr>
                  <td>#1927384539</td>
                  <td>Leslie Alexander</td>
                  <td>May 6, 2023</td>
                  <td>10:00 am</td>
                  <td>May 13, 2023</td>
                  <td>123 Main St</td>
                  <td>In transit</td>
                </tr>
                <tr className="bg-[#EDF2F7]">
                  <td>#1927384539</td>
                  <td>Leslie Alexander</td>
                  <td>May 6, 2023</td>
                  <td>10:00 am</td>
                  <td>May 13, 2023</td>
                  <td>123 Main St</td>
                  <td>In transit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
