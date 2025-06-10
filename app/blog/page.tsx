import { getAllPosts } from "@/lib/wordpress";
import { PostCard } from "@/components/posts/post-card";
import { SearchInput } from "@/components/posts/search-input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Blog | HLD",
  description: "Latest articles and insights from our team",
};

interface BlogPageProps {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const search = params?.search || '';
  const page = parseInt(params?.page || '1');
  const perPage = 9; // Number of posts per page

  const posts = await getAllPosts({
    search,
    page,
    per_page: perPage,
  });

  return (
    <div className="antialiased text-gray-800 bg-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl font-bold text-gray-900">Blog</h1>
          <p className="mb-6 sm:mb-8 text-lg sm:text-xl text-gray-600">
            Latest articles and insights from our team
          </p>
          <div className="mx-auto max-w-md px-4 sm:px-0">
            <SearchInput defaultValue={search} />
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <p className="text-base sm:text-lg text-gray-600">No posts found.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 