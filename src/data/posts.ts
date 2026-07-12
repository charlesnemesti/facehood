import type { AvatarId } from "./avatars";

export type Comment = {
  id: string;
  author: string;
  avatar: AvatarId;
  text: string;
  time: string;
};

export type NewsLink = {
  url: string;
  title: string;
  source: string;
  imageUrl: string;
};

export type Post = {
  id: string;
  author: string;
  avatar: AvatarId;
  time: string;
  content: string;
  likes: number;
  comments: Comment[];
  shares: number;
  highlight?: boolean;
  tag?: string;
  link?: NewsLink;
};

export const INITIAL_POSTS: Post[] = [
  {
    id: "1",
    author: "Vlad Tenev",
    avatar: "green",
    time: "1h ago",
    tag: "Trump Accounts",
    content:
      "Nearly 6 million sign-ups on Trump Accounts before full launch. Growth is outpacing many of America's most successful tech companies in their early stages.\n\nRobinhood is the sole initial broker alongside BNY Mellon. $1,000 from the Treasury for every eligible child born 2025-2028.",
    likes: 48200,
    shares: 9100,
    highlight: true,
    link: {
      url: "https://cryptobriefing.com/robinhood-trump-accounts-rapid-growth/",
      title:
        "Robinhood CEO Vlad Tenev says Trump Accounts are growing faster than many successful tech companies",
      source: "CryptoBriefing",
      imageUrl:
        "https://cdn.benzinga.com/cdn-cgi/image/width=1200,height=800,fit=crop/files/images/story/2026/07/09/Robinhood-Logo-Displayed-On-A-Smartphone.jpg",
    },
    comments: [
      {
        id: "c1",
        author: "Crypto Hood",
        avatar: "inverted",
        text: "From GameStop to federal government broker. Vlad never stops.",
        time: "45m ago",
      },
      {
        id: "c2",
        author: "Meme King",
        avatar: "magenta",
        text: "My baby already has a bigger portfolio than I did at 25 😭",
        time: "30m ago",
      },
    ],
  },
  {
    id: "2",
    author: "Robinhood Chain",
    avatar: "cyan",
    time: "3h ago",
    tag: "Robinhood Chain",
    content:
      "PUBLIC MAINNET LIVE — Robinhood Chain (L2 on Arbitrum). Stock Tokens in 120+ countries, 24/7 trading, and DeFi integration.\n\nRobinhood Earn: ~7% APY lending USDG from a self-custody wallet.",
    likes: 31500,
    shares: 6200,
    highlight: true,
    link: {
      url: "https://www.coindesk.com/business/2026/07/01/robinhood-rolls-out-public-blockchain-as-it-expands-deeper-into-crypto",
      title: "Robinhood rolls out public blockchain as it expands deeper into crypto",
      source: "CoinDesk",
      imageUrl:
        "https://cdn.sanity.io/images/s3y3vcno/production/8dac34908164b1ab4703e87687fa15502ddfa1e8-2048x1152.jpg?auto=format&w=960&h=540&crop=focalpoint&fit=clip&q=75&fm=jpg",
    },
    comments: [
      {
        id: "c3",
        author: "Diamond Hands",
        avatar: "cyan",
        text: "Facehood on Robinhood Chain when? 👀",
        time: "2h ago",
      },
    ],
  },
  {
    id: "3",
    author: "Vlad Tenev",
    avatar: "green",
    time: "5h ago",
    tag: "Prediction Markets",
    content:
      '"We\'re at the beginning of a prediction market supercycle that could drive trillions in annual volume."\n\n8.8 billion event contracts in Q1 2026. $147M in "other transactions" revenue (+320% YoY).\n\n"Who am I to say you shouldn\'t trade that?" — Vlad on CNBC',
    likes: 22800,
    shares: 4400,
    link: {
      url: "https://www.businessinsider.com/robinhood-ceo-vlad-tenev-prediction-markets-supercyle-kalshi-polymarket-olympics-2026-2",
      title:
        "Robinhood CEO Says We're at Cusp of a 'Prediction Market Supercycle'",
      source: "Business Insider",
      imageUrl:
        "https://i.insider.com/698bf388d3c7faef0ece0ba2?width=1200&format=jpeg",
    },
    comments: [
      {
        id: "c4",
        author: "WAGMI Hood",
        avatar: "magenta",
        text: "Bernstein projects $586M in prediction revenue this year. Nearly 4x.",
        time: "4h ago",
      },
      {
        id: "c5",
        author: "HODL Gang",
        avatar: "green",
        text: "The government shutdown contract moved more volume than post-season NFL 💀",
        time: "3h ago",
      },
    ],
  },
  {
    id: "4",
    author: "Facehood Official",
    avatar: "inverted",
    time: "6h ago",
    tag: "$HOOD",
    content:
      "Welcome to Facehood — the native social network of Robinhood Chain.\n\nWe're the social layer + $HOOD memecoin of the ecosystem. Put on the hood. Trade. Post. WAGMI.",
    likes: 42069,
    shares: 8888,
    highlight: true,
    link: {
      url: "https://robinhood.com/us/en/about/crypto/",
      title: "Robinhood Crypto — Trade crypto 24/7",
      source: "Robinhood",
      imageUrl:
        "https://cdn.sanity.io/images/s3y3vcno/production/8dac34908164b1ab4703e87687fa15502ddfa1e8-2048x1152.jpg?auto=format&w=960&h=540&crop=focalpoint&fit=clip&q=75&fm=jpg",
    },
    comments: [
      {
        id: "c6",
        author: "Pump It Up",
        avatar: "cyan",
        text: "Finally a social network with the right green",
        time: "5h ago",
      },
    ],
  },
  {
    id: "5",
    author: "Robinhood News",
    avatar: "magenta",
    time: "8h ago",
    tag: "Earnings",
    content:
      "Robinhood Q1 2026:\n\n• Vlad: Robinhood is increasingly at the center of our customers' financial lives\n• Gold subscribers at all-time highs\n• Global expansion: Canada, crypto UK, perpetual futures in Europe\n• AI agentic trading tools launched in May",
    likes: 18400,
    shares: 2100,
    link: {
      url: "https://www.globenewswire.com/news-release/2026/04/28/3283181/0/en/Robinhood-Reports-First-Quarter-2026-Results.html",
      title: "Robinhood Reports First Quarter 2026 Results",
      source: "GlobeNewswire",
      imageUrl:
        "https://ml.globenewswire.com/Resource/Download/502e2c24-b781-466b-8147-98b8d6e5a95a",
    },
    comments: [
      {
        id: "c7",
        author: "Moon Walker",
        avatar: "cyan",
        text: "AI agents will out-trade hedge funds according to Vlad. Bullish.",
        time: "7h ago",
      },
    ],
  },
  {
    id: "6",
    author: "Crypto Hood",
    avatar: "inverted",
    time: "10h ago",
    tag: "Trump Accounts",
    content:
      "Robinhood will match the Treasury's $1,000 contribution for children of US employees. The Trump Accounts app hit the top of the App Store in ~1 month.",
    likes: 9600,
    shares: 1800,
    link: {
      url: "https://www.benzinga.com/markets/tech/26/07/60349096/robinhood-ceo-vlad-tenev-says-trump-accounts-customer-growth-is-faster-than-americas-most-successful-tech-companies",
      title:
        "Trump Accounts Customer Growth 'Faster' Than America's Most Successful Tech Companies, Says Robinhood CEO Vlad Tenev",
      source: "Benzinga",
      imageUrl:
        "https://cdn.benzinga.com/cdn-cgi/image/width=1200,height=800,fit=crop/files/images/story/2026/07/09/Robinhood-Logo-Displayed-On-A-Smartphone.jpg",
    },
    comments: [],
  },
  {
    id: "7",
    author: "Meme King",
    avatar: "magenta",
    time: "12h ago",
    tag: "History",
    content:
      "2021: Vlad halts GME and AMC buys → congressional hearing\n\n2026: Official govt broker for baby accounts + own blockchain + $12B in prediction market contracts\n\nCharacter development 📈",
    likes: 67200,
    shares: 15400,
    link: {
      url: "https://www.financemagnates.com/fintech/who-am-i-to-say-you-shouldnt-trade-that-vlad-tenev-defends-speculators-and-prediction-markets/",
      title:
        '"Who Am I to Say You Shouldn\'t Trade That?": Vlad Tenev Defends Speculators and Prediction Markets',
      source: "Finance Magnates",
      imageUrl:
        "https://images.financemagnates.com/images/Vlad%20Tenev%2C%20Robinhood%20CEO%2C%20during%20a%20conference%20presenting%20the%20new%20Platinum%20Card.%20Source%3A%20YouTube_id_f25a9aa8-08a4-46b9-819a-5b2c26fb3cff_size900.jpeg",
    },
    comments: [
      {
        id: "c8",
        author: "Diamond Hands",
        avatar: "cyan",
        text: "Still hodling GME tho",
        time: "11h ago",
      },
      {
        id: "c9",
        author: "Vlad Tenev",
        avatar: "green",
        text: "BNY Mellon partnership exists precisely so people trust the ops. We learned.",
        time: "10h ago",
      },
    ],
  },
  {
    id: "8",
    author: "Degen Squad",
    avatar: "cyan",
    time: "14h ago",
    tag: "Robinhood Earn",
    content:
      "7% APY on USDG with Robinhood Earn. Self-custody. On-chain lending.\n\nMeanwhile I'm here on Facehood farming $HOOD and debating whether Vlad is the Zuckerberg of finance or the Satoshi of retail.",
    likes: 5400,
    shares: 890,
    link: {
      url: "https://www.investopedia.com/robinhood-ceo-says-a-prediction-markets-supercycle-is-just-starting-hood-11904619",
      title: "Robinhood's CEO Says a Prediction Markets 'Supercycle' Is Just Starting",
      source: "Investopedia",
      imageUrl:
        "https://i.insider.com/698bf388d3c7faef0ece0ba2?width=1200&format=jpeg",
    },
    comments: [],
  },
];
