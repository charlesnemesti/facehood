import { Header } from "@/components/Header";
import { LeftSidebar, RightSidebar } from "@/components/LeftSidebar";
import { Feed } from "@/components/Feed";
import { FixedBrandLogo } from "@/components/FixedBrandLogo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f0f2f5]">
      <Header />
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 justify-center gap-4 px-2">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
      <Footer />
      <FixedBrandLogo />
    </div>
  );
}
