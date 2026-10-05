"use client";
import { useRef, useState } from "react";
import { TWIN_PAGE, TWIN_URL } from "../data";

export default function Twin({ variant = "button" }: { variant?: "button" | "fab" }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [loaded, setLoaded] = useState(false);
  const open = () => {
    setLoaded(true);
    ref.current?.showModal();
  };
  return (
    <>
      <button
        type="button"
        onClick={open}
        className={
          variant === "fab"
            ? "fixed bottom-4 right-4 z-40 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-ink shadow-lg hover:brightness-110"
            : "rounded-md border border-accent/60 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/10"
        }
      >
        Ask my digital twin
      </button>
      <dialog
        ref={ref}
        aria-label="Chat with Miracle's digital twin"
        className="w-[min(960px,calc(100vw-1rem))] rounded-lg border border-line bg-panel p-0 text-white backdrop:bg-black/70"
        onClick={(e) => e.target === ref.current && ref.current?.close()}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-2 text-sm">
          <span className="font-mono text-mute">digital twin, trained on my work</span>
          <div className="flex gap-3">
            <a href={TWIN_PAGE} target="_blank" rel="noopener noreferrer" className="text-mute hover:text-white">Open on Hugging Face</a>
            <button type="button" onClick={() => ref.current?.close()} className="text-mute hover:text-white">Close</button>
          </div>
        </div>
        {loaded && <iframe src={TWIN_URL} title="Miracle's digital twin" className="h-[75vh] w-full" allow="clipboard-write; microphone" />}
      </dialog>
    </>
  );
}
