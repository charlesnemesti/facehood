"use client";

import { useState, useCallback } from "react";
import { HoodAvatar } from "./HoodAvatar";
import { PostCard } from "./PostCard";
import { INITIAL_POSTS, type Post } from "@/data/posts";
import { AVATARS, resolveAvatar, type AvatarId } from "@/data/avatars";

const stories: { name: string; isCreate?: boolean; variant: AvatarId }[] = [
  { name: "Create story", isCreate: true, variant: "green" },
  { name: "Vlad Tenev", variant: "green" },
  { name: "Robinhood Chain", variant: "cyan" },
  { name: "Trump Accounts", variant: "inverted" },
  { name: "Predictions", variant: "magenta" },
  { name: "HOOD Earnings", variant: "green" },
];

function darken(hex: string, amount = 0.35): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, ((n >> 16) & 0xff) * (1 - amount));
  const g = Math.max(0, ((n >> 8) & 0xff) * (1 - amount));
  const b = Math.max(0, (n & 0xff) * (1 - amount));
  return `#${[r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;
}

function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function Feed() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [openComments, setOpenComments] = useState<Set<string>>(new Set());
  const [composing, setComposing] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }, []);

  function toggleLike(id: string) {
    setLikedIds((prev) => {
      const next = new Set(prev);
      const wasLiked = next.has(id);
      if (wasLiked) next.delete(id);
      else next.add(id);
      setPosts((ps) =>
        ps.map((p) =>
          p.id === id ? { ...p, likes: p.likes + (wasLiked ? -1 : 1) } : p
        )
      );
      return next;
    });
  }

  function toggleComments(id: string) {
    setOpenComments((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function sharePost(id: string) {
    const target = posts.find((p) => p.id === id);
    setPosts((ps) =>
      ps.map((p) => (p.id === id ? { ...p, shares: p.shares + 1 } : p))
    );
    showToast(
      target?.link ? "Post shared — link copied!" : "Post shared to your hood!"
    );
  }

  function addComment(postId: string, text: string) {
    const comment = {
      id: newId(),
      author: "Your Profile",
      avatar: resolveAvatar("Your Profile"),
      text,
      time: "Just now",
    };
    setPosts((ps) =>
      ps.map((p) =>
        p.id === postId ? { ...p, comments: [...p.comments, comment] } : p
      )
    );
    setOpenComments((prev) => new Set(prev).add(postId));
  }

  function publishPost() {
    const trimmed = newPostText.trim();
    if (!trimmed) return;
    const post: Post = {
      id: newId(),
      author: "Your Profile",
      avatar: resolveAvatar("Your Profile"),
      time: "Just now",
      content: trimmed,
      likes: 0,
      comments: [],
      shares: 0,
      tag: "$HOOD",
    };
    setPosts((ps) => [post, ...ps]);
    setNewPostText("");
    setComposing(false);
    showToast("Posted on Facehood 🧢");
  }

  return (
    <main className="relative mx-auto w-full max-w-[680px] space-y-4 py-4">
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#1c1e21] px-5 py-3 text-sm font-semibold text-[#d1ff00] shadow-lg">
          {toast}
        </div>
      )}

      <div className="overflow-x-auto rounded-lg bg-white p-4 shadow-sm">
        <div className="flex gap-2">
          {stories.map((story) => {
            const bg = AVATARS[story.variant].bg;
            const bgDark = darken(bg);
            return (
              <button
                key={story.name}
                className="flex w-[112px] shrink-0 flex-col items-center gap-1"
                onClick={() =>
                  !story.isCreate &&
                  showToast(`${story.name} story — coming soon`)
                }
              >
                <div
                  className={`relative flex h-[200px] w-full flex-col items-center justify-end overflow-hidden rounded-xl pb-3 ${
                    story.isCreate
                      ? "border-2 border-dashed border-[#d1ff00] bg-[#f0f2f5]"
                      : ""
                  }`}
                  style={
                    story.isCreate
                      ? undefined
                      : { background: `linear-gradient(to bottom, ${bg}, ${bgDark})` }
                  }
                >
                  {!story.isCreate && (
                    <div
                      className="absolute top-3 left-3 rounded-full"
                      style={{ boxShadow: `0 0 0 4px ${bg}` }}
                    >
                      <HoodAvatar size={36} variant={story.variant} />
                    </div>
                  )}
                  {story.isCreate && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <HoodAvatar size={48} variant="green" />
                      <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#1c1e21] text-[#d1ff00] text-lg leading-none">
                        +
                      </span>
                    </div>
                  )}
                  <span
                    className={`relative z-10 px-2 text-center text-xs font-semibold drop-shadow ${
                      story.isCreate ? "text-[#65676b]" : "text-white"
                    }`}
                  >
                    {story.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <HoodAvatar size={40} variant={resolveAvatar("Your Profile")} />
          {composing ? (
            <div className="flex-1">
              <textarea
                autoFocus
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                placeholder="What's your take on Robinhood, Vlad, or $HOOD?"
                rows={3}
                className="w-full resize-none rounded-xl bg-[#f0f2f5] px-4 py-3 text-[17px] text-[#050505] outline-none placeholder:text-[#65676b] focus:ring-2 focus:ring-[#d1ff00]"
              />
              <div className="mt-2 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setComposing(false);
                    setNewPostText("");
                  }}
                  className="rounded-lg px-4 py-2 text-[15px] font-semibold text-[#65676b] hover:bg-[#f0f2f5]"
                >
                  Cancel
                </button>
                <button
                  onClick={publishPost}
                  disabled={!newPostText.trim()}
                  className="rounded-lg bg-[#d1ff00] px-5 py-2 text-[15px] font-bold text-[#1c1e21] hover:bg-[#b8e600] disabled:opacity-40"
                >
                  Post
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setComposing(true)}
              className="flex-1 rounded-full bg-[#f0f2f5] px-4 py-2.5 text-left text-[17px] text-[#65676b] hover:bg-[#e4e6eb]"
            >
              What's on your mind, Anon?
            </button>
          )}
        </div>
        {!composing && (
          <div className="mt-3 border-t border-[#ced0d4] pt-3">
            <div className="flex justify-around">
              {[
                { emoji: "📹", label: "Live video" },
                { emoji: "📷", label: "Photo/video" },
                { emoji: "🎯", label: "Prediction" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => showToast(`${item.label} — coming soon`)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-[15px] font-semibold text-[#65676b] hover:bg-[#f0f2f5]"
                >
                  <span>{item.emoji}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          liked={likedIds.has(post.id)}
          showComments={openComments.has(post.id)}
          onLike={() => toggleLike(post.id)}
          onToggleComments={() => toggleComments(post.id)}
          onShare={() => sharePost(post.id)}
          onAddComment={(text) => addComment(post.id, text)}
        />
      ))}
    </main>
  );
}
