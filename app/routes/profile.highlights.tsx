import { useLoaderData } from 'react-router';
import { api } from '~/services/api';
import { highlightSchema, type Highlight } from '~/schemas/highlight.schema';
import HighlightBubble from '~/components/HighlightBubble';

export async function loader() {
  try {
    const response = await api.get('/highlights');
    return highlightSchema.array().parse(response.data);
  } catch (error) {
    console.error('Failed to load highlights:', error);
    throw new Response('Could not load highlights.', { status: 500 });
  }
}

export default function ProfileHighlights() {
  const highlights = useLoaderData() as Highlight[];
  return (
    <div className="flex space-x-4 overflow-x-auto py-4 px-2">
      {highlights.map((highlight) => (
        <HighlightBubble key={highlight.id} highlight={highlight} />
      ))}
    </div>
  );
}