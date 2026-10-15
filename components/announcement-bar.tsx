const message = "Handcrafted copper · Made in Morocco · Timeless by design";

function MessageGroup() {
  return (
    <span className="flex shrink-0 items-center gap-7 px-6 text-[9px] font-semibold uppercase tracking-[0.19em] text-[#f7f2eb]">
      <span>{message}</span>
      <span aria-hidden="true" className="h-px w-7 bg-[#d5a27c]" />
      <span>{message}</span>
      <span aria-hidden="true" className="h-px w-7 bg-[#d5a27c]" />
    </span>
  );
}

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-[#211f1b] py-[9px]" aria-label="Cuveroo announcement">
      <p className="sr-only">Handcrafted copper, made in Morocco. Timeless by design.</p>
      <div className="flex w-max animate-[cuveroo-marquee_30s_linear_infinite] motion-reduce:hidden hover:[animation-play-state:paused]">
        <MessageGroup />
        <span aria-hidden="true">
          <MessageGroup />
        </span>
      </div>
      <p className="m-0 hidden text-center text-[9px] font-semibold uppercase tracking-[0.19em] text-[#f7f2eb] motion-reduce:block">
        {message}
      </p>
    </div>
  );
}
