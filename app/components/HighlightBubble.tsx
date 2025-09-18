import type { Highlight } from "~/schemas/highlight.schema";

export function HighlightGridItem({ highlight }: { highlight: Highlight }) {
  return (
    <div className='relative w-full aspect-[9/16] overflow-hidden bg-gray-200'>
      <img
        src={highlight.thumbnail_url}
        alt={highlight.caption || "Highlight thumbnail"}
        className='w-full h-full object-cover'
      />
      <div className='absolute bottom-2 left-2 text-white text-sm font-semibold flex items-center'>
        ▶️ {highlight.views}
      </div>
    </div>
  );
}