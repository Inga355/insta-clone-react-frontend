import { useLoaderData } from "react-router";
import { api } from "~/services/api";
import { taggedsSchema, type Tagged } from "~/schemas/tagged.schema";
import { PostCard } from "~/components/PostCard";

export async function loader() {
  try {
    const response = await api.get("/tagged");
    return taggedsSchema.parse(response.data);
  } catch (error) {
    console.error("Failed to load tagged posts:", error);
    throw new Response("Could not load tagged posts.", { status: 500 });
  }
}

export default function PostsGrid() {
  const taggeds = useLoaderData() as Tagged[];
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {taggeds.map((tagged) => (
        <PostCard key={tagged.id} post={tagged} />
      ))}
    </div>
  );
}