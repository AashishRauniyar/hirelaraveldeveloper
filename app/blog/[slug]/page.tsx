import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, User } from "lucide-react";
import { getPostBySlug } from "@/lib/wordpress";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const slug = params?.slug;
  if (!slug) {
    return {
      title: "Post Not Found",
    };
  }
  
  const post = await getPostBySlug(slug).catch(() => null);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post._embedded?.author?.[0]?.name || "WPD"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const author = post._embedded?.author?.[0];
  const category = post._embedded?.["wp:term"]?.[0]?.[0];

  return (
    <div className="antialiased text-gray-800 bg-white">
      <Header />
      <article className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {featuredImage && (
            <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image
                src={featuredImage.source_url}
                alt={featuredImage.alt_text || post.title.rendered}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          <header className="mb-8">
            {category && (
              <div className="mb-4">
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  {category.name}
                </span>
              </div>
            )}

            <h1
              className="mb-4 text-4xl font-bold text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>
      <Footer />
    </div>
  );
} 