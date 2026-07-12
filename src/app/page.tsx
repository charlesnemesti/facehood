import { Header } from "@/components/Header";
import { LeftSidebar, RightSidebar } from "@/components/LeftSidebar";
import { Feed } from "@/components/Feed";
import { FixedBrandLogo } from "@/components/FixedBrandLogo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <Header />
      <div className="mx-auto flex max-w-[1440px] justify-center gap-4 px-2">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
      <FixedBrandLogo />
    </div>
  );
}
