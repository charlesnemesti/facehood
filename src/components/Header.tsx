import { HoodAvatar } from "./HoodAvatar";
import {
  FacehoodLogo,
  SearchIcon,
  HomeIcon,
  FriendsIcon,
  WatchIcon,
  MarketplaceIcon,
  GroupsIcon,
  BellIcon,
  MessengerIcon,
} from "./Icons";

const navItems = [
  { icon: HomeIcon, active: true, label: "Home" },
  { icon: FriendsIcon, label: "Friends" },
  { icon: WatchIcon, label: "Watch" },
  { icon: MarketplaceIcon, label: "Marketplace" },
  { icon: GroupsIcon, label: "Groups" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between bg-[#1c1e21] px-4 shadow-md">
      <div className="flex items-center gap-2">
        <a href="/" className="shrink-0">
          <FacehoodLogo />
        </a>
        <div className="hidden items-center gap-2 rounded-full bg-[#3a3b3c] px-3 py-2 text-[#b0b3b8] sm:flex">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Facehood"
            className="w-48 bg-transparent text-[15px] text-[#e4e6eb] outline-none placeholder:text-[#b0b3b8]"
          />
        </div>
      </div>

      <nav className="hidden items-center gap-1 md:flex">
        {navItems.map(({ icon: Icon, active, label }) => (
          <button
            key={label}
            className={`flex h-12 w-28 items-center justify-center rounded-lg transition-colors hover:bg-[#3a3b3c] ${
              active
                ? "border-b-[3px] border-[#d1ff00] text-white"
                : "text-[#b0b3b8]"
            }`}
            title={label}
          >
            <Icon active={active} />
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-1">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3a3b3c] text-[#e4e6eb] hover:bg-[#4e4f50]">
          <MessengerIcon />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3a3b3c] text-[#e4e6eb] hover:bg-[#4e4f50]">
          <BellIcon />
        </button>
        <button className="flex items-center gap-1 rounded-full bg-[#3a3b3c] p-1 pr-3 hover:bg-[#4e4f50]">
          <HoodAvatar size={32} variant="green" />
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 text-[#e4e6eb]">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
