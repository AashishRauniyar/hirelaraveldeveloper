import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
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

// This is a placeholder - replace with actual data fetching
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Implement your data fetching logic here
  // For now, returning null to trigger 404
  return null;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | HLD Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
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
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://www.hirelaraveldeveloper.dev/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="antialiased text-gray-800 bg-white">
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
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 text-sm">
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
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