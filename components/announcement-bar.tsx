const message = "Aménagement intérieur & extérieur · Sur mesure à Selouane, Nador · Parlons de votre projet";

function MessageGroup() {
  return (
    <span className="flex shrink-0 items-center gap-7 px-6 text-[clamp(11px,0.78vw,13px)] font-semibold uppercase tracking-[0.19em] text-[#f7f2eb]">
      <span>{message}</span>
      <span aria-hidden="true" className="h-px w-7 bg-[#d5a27c]" />
      <span>{message}</span>
      <span aria-hidden="true" className="h-px w-7 bg-[#d5a27c]" />
    </span>
  );
}

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-[#211f1b] py-[9px]" aria-label="T.cap announcement">
      <p className="sr-only">Aménagement intérieur et extérieur sur mesure à Selouane, Nador.</p>
      <div className="flex w-max animate-[cuveroo-marquee_30s_linear_infinite] motion-reduce:hidden hover:[animation-play-state:paused]">
        <MessageGroup />
        <span aria-hidden="true">
          <MessageGroup />
        </span>
      </div>
      <p className="m-0 hidden text-center text-[clamp(11px,0.78vw,13px)] font-semibold uppercase tracking-[0.19em] text-[#f7f2eb] motion-reduce:block">
        {message}
      </p>
    </div>
  );
}
