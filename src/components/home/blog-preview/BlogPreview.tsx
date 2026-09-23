import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { LATEST_BLOGS } from "@/data/blogs";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPreviewProps {
  posts?: BlogPost[];
}

export const BlogPreview: React.FC<BlogPreviewProps> = ({
  posts = LATEST_BLOGS,
}) => {
  return (
    <section id="blogs" className="py-20 lg:py-24 bg-gray-50/50 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            align="left"
            eyebrow="Editorial Inspiration"
            title="Stories & Insider Guides From"
            highlight="Our Curators"
            description="Practical preparation advice, hidden architectural gems, and cultural essays for curious minds."
          />

          <Link href="/blogs" className="shrink-0 hidden md:block">
            <Button variant="outline" size="md" pill rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All Articles
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="primary" size="sm">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {post.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    <Link href={`/blogs/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-muted line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border">
                      <Image
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{post.author.name}</p>
                      <p className="text-[10px] text-muted">{post.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/blogs">
            <Button variant="outline" size="md" pill rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
