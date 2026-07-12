export type AvatarId = "green" | "cyan" | "magenta" | "inverted";

export type AvatarDef = {
  id: AvatarId;
  src: string;
  bg: string;
  label: string;
};

export const AVATARS: Record<AvatarId, AvatarDef> = {
  green: {
    id: "green",
    src: "/avatars/hood-green.png",
    bg: "#d1ff00",
    label: "Neon green",
  },
  cyan: {
    id: "cyan",
    src: "/avatars/hood-cyan.png",
    bg: "#00ffff",
    label: "Neon cyan",
  },
  magenta: {
    id: "magenta",
    src: "/avatars/hood-magenta.png",
    bg: "#ff00ff",
    label: "Neon magenta",
  },
  inverted: {
    id: "inverted",
    src: "/avatars/hood-inverted.png",
    bg: "#1c1e21",
    label: "Inverted",
  },
};

const AVATAR_IDS = Object.keys(AVATARS) as AvatarId[];

export function avatarFor(name: string): AvatarId {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_IDS[Math.abs(hash) % AVATAR_IDS.length];
}

export const USER_AVATARS: Record<string, AvatarId> = {
  "Your Profile": "green",
  "Facehood Official": "green",
  "Crypto Hood": "inverted",
  "Meme King": "magenta",
  "Diamond Hands": "cyan",
  "Moon Walker": "cyan",
  "HODL Gang": "green",
  "WAGMI Hood": "magenta",
  "Hood Army": "inverted",
  "Meme Lords": "magenta",
  "Degen Squad": "cyan",
  "Pump It Up": "green",
  "Create story": "green",
  "Vlad Tenev": "green",
  "Robinhood Chain": "cyan",
  "Trump Accounts": "inverted",
  "Prediction Markets": "magenta",
  "Robinhood Earn": "cyan",
  "Robinhood News": "magenta",
  "HOOD Earnings": "green",
  "Kalshi x HOOD": "magenta",
};

export function resolveAvatar(name: string): AvatarId {
  return USER_AVATARS[name] ?? avatarFor(name);
}
