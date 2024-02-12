import Header from "@/components/header/Header";
import Settings from "@/components/settings/Settings";

export default function groups() {
  return (
    <div className="w-full h-[100vh]">
      <Header />
      <div className="w-full flex" style={{ height: "calc(100% - 75px)" }}>
        <Settings />
        <div className="h-full" style={{ width: "calc(100% - 203px)" }}></div>
      </div>
    </div>
  );
}
