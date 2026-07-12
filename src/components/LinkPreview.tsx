import Image from "next/image";
import type { NewsLink } from "@/data/posts";

export function LinkPreview({ link }: { link: NewsLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-4 mb-3 block overflow-hidden rounded-lg border border-[#ced0d4] bg-[#f0f2f5] transition-colors hover:bg-[#e4e6eb]"
    >
      <div className="relative aspect-[1.91/1] w-full bg-[#e4e6eb]">
        <Image
          src={link.imageUrl}
          alt={link.title}
          fill
          className="object-cover"
          sizes="(max-width: 680px) 100vw, 680px"
          unoptimized
        />
      </div>
      <div className="border-t border-[#ced0d4] bg-[#f0f2f5] px-3 py-2">
        <p className="text-[12px] uppercase tracking-wide text-[#65676b]">
          {link.source}
        </p>
        <p className="line-clamp-2 text-[15px] font-semibold text-[#050505]">
          {link.title}
        </p>
        <p className="mt-0.5 truncate text-[12px] text-[#65676b]">
          {link.url.replace(/^https?:\/\/(www\.)?/, "")}
        </p>
      </div>
    </a>
  );
}
