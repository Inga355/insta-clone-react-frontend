import type { Highlight } from "~/schemas/highlight.schema";
import { Link } from "react-router";

export default function HighlightBubble({ highlight }: { highlight: Highlight }) {
  return (
    <Link
      to={`/profile/highlights/${highlight.id}`}
      className="block relative w-full aspect-[9/16] overflow-hidden bg-gray-200 group"
    >
      <img
        src={highlight.cover_img_url}
        alt={highlight.title || "Highlight thumbnail"}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
        {highlight.title}
      </div>
    </Link>
  );
}