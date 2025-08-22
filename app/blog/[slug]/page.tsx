import Image from "next/image";
import { notFound } from "next/navigation";
// import { Calendar } from "lucide-react"; // Unused import
import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getPostBySlug } from "@/lib/wordpress";
import type { Post } from "@/lib/wordpress.d";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// This would typically come from your CMS or database
type BlogPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  author: string;
  image: string;
  tags: string[];
};

// Function to get blog post by slug using WordPress API
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await getPostBySlug(slug);

    // Transform WordPress Post to BlogPost format
    return {
      slug: post.slug,
      title: post.title.rendered,
      description: post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "",
      content: post.content.rendered,
      publishedAt: post.date,
      author: post._embedded?.author?.[0]?.name || "Unknown Author",
      image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/placeholder.jpg",
      tags: post._embedded?.["wp:term"]?.[1]?.map((tag: any) => tag.name) || [],
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | HLD Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://www.hirelaraveldeveloper.dev/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="antialiased text-black bg-white">
      <Header />
      <article className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {post.image && (
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-900 text-sm">
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
