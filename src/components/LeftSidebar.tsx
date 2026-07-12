"use client";

import { HoodAvatar } from "./HoodAvatar";
import { resolveAvatar } from "@/data/avatars";

const shortcuts = [
  {
    name: "Trump Accounts",
    desc: "6M+ sign-ups",
    url: "https://cryptobriefing.com/robinhood-trump-accounts-rapid-growth/",
  },
  {
    name: "Robinhood Chain",
    desc: "Mainnet live",
    url: "https://www.coindesk.com/business/2026/07/01/robinhood-rolls-out-public-blockchain-as-it-expands-deeper-into-crypto",
  },
  {
    name: "Prediction Markets",
    desc: "Supercycle",
    url: "https://www.businessinsider.com/robinhood-ceo-vlad-tenev-prediction-markets-supercyle-kalshi-polymarket-olympics-2026-2",
  },
  {
    name: "Robinhood Earn",
    desc: "7% APY USDG",
    url: "https://www.coindesk.com/business/2026/07/01/robinhood-rolls-out-public-blockchain-as-it-expands-deeper-into-crypto",
  },
  {
    name: "Vlad Tenev",
    desc: "@vladtenev",
    url: "https://www.financemagnates.com/fintech/who-am-i-to-say-you-shouldnt-trade-that-vlad-tenev-defends-speculators-and-prediction-markets/",
  },
];

const contacts = [
  { name: "Vlad Tenev", online: true },
  { name: "Robinhood Chain", online: true },
  { name: "Trump Accounts", online: true },
  { name: "HOOD Earnings", online: false },
  { name: "Kalshi x HOOD", online: true },
];

const NEWS_TICKER: { text: string; url: string }[] = [
  {
    text: "Vlad: Trump Accounts growing faster than many US tech companies",
    url: "https://www.benzinga.com/markets/tech/26/07/60349096/robinhood-ceo-vlad-tenev-says-trump-accounts-customer-growth-is-faster-than-americas-most-successful-tech-companies",
  },
  {
    text: "Robinhood Chain mainnet — Stock Tokens in 120+ countries",
    url: "https://www.coindesk.com/business/2026/07/01/robinhood-rolls-out-public-blockchain-as-it-expands-deeper-into-crypto",
  },
  {
    text: "Q1 2026: prediction markets +320% YoY revenue",
    url: "https://www.financemagnates.com/fintech/who-am-i-to-say-you-shouldnt-trade-that-vlad-tenev-defends-speculators-and-prediction-markets/",
  },
  {
    text: "Robinhood Earn: 7% yield on USDG",
    url: "https://www.coindesk.com/business/2026/07/01/robinhood-rolls-out-public-blockchain-as-it-expands-deeper-into-crypto",
  },
  {
    text: "Bernstein: $586M prediction revenue projected for 2026",
    url: "https://www.investopedia.com/robinhood-ceo-says-a-prediction-markets-supercycle-is-just-starting-hood-11904619",
  },
];

export function LeftSidebar() {
  return (
    <aside className="hidden w-[280px] shrink-0 space-y-2 overflow-y-auto py-4 pl-2 lg:block">
      <button className="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-[#e4e6eb]">
        <HoodAvatar size={36} variant={resolveAvatar("Your Profile")} />
        <span className="text-[15px] font-semibold text-[#050505]">Your Profile</span>
      </button>

      <button className="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-[#e4e6eb]">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d1ff00]">
          <span className="text-lg">🪙</span>
        </div>
        <div className="text-left">
          <span className="block text-[15px] font-semibold text-[#050505]">$HOOD</span>
          <span className="text-[12px] text-[#65676b]">Robinhood Chain</span>
        </div>
      </button>

      <div className="my-2 border-t border-[#ced0d4]" />

      <h3 className="px-2 text-[17px] font-semibold text-[#65676b]">
        Robinhood Ecosystem
      </h3>
      {shortcuts.map(({ name, desc, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-[#e4e6eb]"
        >
          <HoodAvatar size={36} variant={resolveAvatar(name)} />
          <div className="text-left">
            <span className="block text-[15px] font-medium text-[#050505]">{name}</span>
            <span className="text-[12px] text-[#65676b]">{desc}</span>
          </div>
        </a>
      ))}

      <div className="my-2 border-t border-[#ced0d4]" />

      <div className="rounded-xl bg-gradient-to-br from-[#d1ff00] to-[#9fcc00] p-4 text-[#1c1e21]">
        <p className="text-sm font-bold">NASDAQ: HOOD</p>
        <p className="text-2xl font-black">Q1 2026 🟢</p>
        <p className="mt-1 text-xs opacity-80">
          Great Wealth Transfer · AI agents · Chain mainnet
        </p>
        <a
          href="https://investors.robinhood.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block w-full rounded-lg bg-[#1c1e21] py-2 text-center text-sm font-bold text-[#d1ff00] hover:bg-black"
        >
          View earnings
        </a>
      </div>

      <div className="rounded-xl bg-white p-3 shadow-sm">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#65676b]">
          📡 Live
        </p>
        <div className="space-y-2">
          {NEWS_TICKER.map((item) => (
            <a
              key={item.text}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[12px] leading-snug text-[#050505] hover:text-[#9fcc00] hover:underline"
            >
              • {item.text}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function RightSidebar() {
  return (
    <aside className="hidden w-[280px] shrink-0 space-y-2 overflow-y-auto py-4 pr-2 xl:block">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-[17px] font-semibold text-[#65676b]">Contacts</h3>
      </div>

      {contacts.map((c) => (
        <button
          key={c.name}
          className="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-[#e4e6eb]"
        >
          <div className="relative">
            <HoodAvatar size={36} variant={resolveAvatar(c.name)} />
            {c.online && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#f0f2f5] bg-[#31a24c]" />
            )}
          </div>
          <span className="text-[15px] font-medium text-[#050505]">{c.name}</span>
        </button>
      ))}

      <div className="my-2 border-t border-[#ced0d4]" />

      <div className="rounded-xl bg-white p-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#65676b]">
          About Vlad Tenev
        </p>
        <div className="mt-3 space-y-2 text-[13px] text-[#050505]">
          <p>CEO & Chairman of Robinhood (NASDAQ: HOOD)</p>
          <p>
            Co-founder · ex-Citadel quant ·{" "}
            <a
              href="https://x.com/vladtenev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9fcc00] hover:underline"
            >
              @vladtenev
            </a>
          </p>
          <p className="text-[#65676b]">
            &quot;Make everyone an owner&quot; — North Star
          </p>
        </div>
      </div>
    </aside>
  );
}
