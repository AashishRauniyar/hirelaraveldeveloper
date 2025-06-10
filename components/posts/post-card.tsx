import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import type { Post } from "@/lib/wordpress.d";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const author = post._embedded?.author?.[0];
  const category = post._embedded?.["wp:term"]?.[0]?.[0];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      {featuredImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw"
          />
        </div>
      )}
      
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        {category && (
          <Link
            href={`/blog/category/${category.slug}`}
            className="mb-2 inline-block text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            {category.name}
          </Link>
        )}
        
        <Link href={`/blog/${post.slug}`} className="flex-1">
          <h2
            className="mb-2 text-lg sm:text-xl font-bold text-gray-900 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>
        
        <div
          className="mb-4 text-xs sm:text-sm text-gray-600 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-gray-500">
          {author && (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{author.name}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
}
