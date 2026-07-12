import Image from "next/image";
import { AVATARS, type AvatarId } from "@/data/avatars";

type HoodAvatarProps = {
  size?: number;
  variant?: AvatarId;
  className?: string;
  ring?: boolean;
};

export function HoodAvatar({
  size = 40,
  variant = "green",
  className = "",
  ring = false,
}: HoodAvatarProps) {
  const avatar = AVATARS[variant];

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full ${ring ? "ring-4 ring-white" : ""} ${className}`}
      style={{ width: size, height: size }}
      title={avatar.label}
    >
      <Image
        src={avatar.src}
        alt={`Avatar ${avatar.label}`}
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
