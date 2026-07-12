"use client";

import { useState } from "react";
import { HoodAvatar } from "./HoodAvatar";
import { LinkPreview } from "./LinkPreview";
import { LikeIcon, CommentIcon, ShareIcon, MoreIcon } from "./Icons";
import type { Post, Comment } from "@/data/posts";
import { resolveAvatar } from "@/data/avatars";

type PostCardProps = {
  post: Post;
  liked: boolean;
  showComments: boolean;
  onLike: () => void;
  onToggleComments: () => void;
  onShare: () => void;
  onAddComment: (text: string) => void;
};

export function PostCard({
  post,
  liked,
  showComments,
  onLike,
  onToggleComments,
  onShare,
  onAddComment,
}: PostCardProps) {
  const [commentText, setCommentText] = useState("");

  function handleSubmitComment(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = commentText.trim();
    if (!trimmed) return;
    onAddComment(trimmed);
    setCommentText("");
  }

  function handleShare() {
    onShare();
    if (post.link) {
      navigator.clipboard?.writeText(post.link.url);
    }
  }

  return (
    <article className="rounded-lg bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <HoodAvatar size={40} variant={post.avatar} />
          <div>
            <p className="cursor-pointer text-[15px] font-semibold text-[#050505] hover:underline">
              {post.author}
            </p>
            <p className="text-[13px] text-[#65676b]">
              {post.time}
              {post.tag && (
                <>
                  {" "}
                  · <span className="font-medium text-[#9fcc00]">#{post.tag}</span>
                </>
              )}
              {" · 🌐"}
            </p>
          </div>
        </div>
        <button className="rounded-full p-2 text-[#65676b] hover:bg-[#f0f2f5]">
          <MoreIcon />
        </button>
      </div>

      <div className="px-4 pb-3">
        <p className="whitespace-pre-line text-[15px] text-[#050505]">{post.content}</p>
      </div>

      {post.link && <LinkPreview link={post.link} />}

      <div className="flex items-center justify-between px-4 py-2 text-[13px] text-[#65676b]">
        <div className="flex items-center gap-1">
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#d1ff00] text-[10px]">
            👍
          </span>
          <span>{post.likes.toLocaleString()}</span>
        </div>
        <div className="flex gap-3">
          <button onClick={onToggleComments} className="hover:underline">
            {post.comments.length} comments
          </button>
          <span>{post.shares.toLocaleString()} shares</span>
        </div>
      </div>

      <div className="mx-4 border-t border-[#ced0d4]" />

      <div className="flex px-2 py-1">
        <button
          onClick={onLike}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-[15px] font-semibold hover:bg-[#f0f2f5] ${
            liked ? "text-[#d1ff00]" : "text-[#65676b]"
          }`}
        >
          <LikeIcon />
          {liked ? "Liked" : "Like"}
        </button>
        <button
          onClick={onToggleComments}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-[15px] font-semibold text-[#65676b] hover:bg-[#f0f2f5]"
        >
          <CommentIcon />
          Comment
        </button>
        <button
          onClick={handleShare}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-[15px] font-semibold text-[#65676b] hover:bg-[#f0f2f5]"
        >
          <ShareIcon />
          Share
        </button>
      </div>

      {showComments && (
        <div className="border-t border-[#ced0d4] bg-[#f7f8fa] px-4 py-3">
          {post.comments.map((c: Comment) => (
            <div key={c.id} className="mb-3 flex gap-2">
              <HoodAvatar size={32} variant={c.avatar} />
              <div className="flex-1 rounded-2xl bg-[#f0f2f5] px-3 py-2">
                <p className="text-[13px] font-semibold text-[#050505]">{c.author}</p>
                <p className="text-[15px] text-[#050505]">{c.text}</p>
                <p className="mt-1 text-[12px] text-[#65676b]">{c.time}</p>
              </div>
            </div>
          ))}
          <form onSubmit={handleSubmitComment} className="flex gap-2">
            <HoodAvatar size={32} variant={resolveAvatar("Your Profile")} />
            <div className="flex flex-1 gap-2">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 rounded-full bg-[#f0f2f5] px-4 py-2 text-[15px] text-[#050505] outline-none placeholder:text-[#65676b] focus:ring-2 focus:ring-[#d1ff00]"
              />
              <button
                type="submit"
                disabled={!commentText.trim()}
                className="rounded-lg bg-[#d1ff00] px-4 py-2 text-sm font-bold text-[#1c1e21] hover:bg-[#b8e600] disabled:opacity-40"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </article>
  );
}
