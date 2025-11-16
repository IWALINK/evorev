import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import { fetchProjectBySlug, fetchProjects } from "@/lib/api";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = await fetchProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Article introuvable | Évorev",
      description:
        "L'article que vous cherchez n'existe pas ou n'est plus disponible.",
    };
  }

  const imageUrl =
    project.image && Array.isArray(project.image) && project.image.length > 0
      ? project.image[0]
      : "";

  return {
    title: `${project.title} | Blog Évorev`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `https://evorev.ch/blog/${project.slug}`,
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: project.title,
          },
        ],
      }),
    },
  };
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-CH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default async function BlogArticlePage({ params }: PageProps) {
  const project = await fetchProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const allProjects = await fetchProjects();
  const relatedProjects = allProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  const images = project.image && Array.isArray(project.image) ? project.image : [];
  const videos = project.video_url && Array.isArray(project.video_url) ? project.video_url : [];
  const firstImage = images.length > 0 ? images[0] : null;
  const firstVideo = videos.length > 0 ? videos[0] : null;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article>
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Image Background */}
          <div className="absolute inset-0 w-full h-full">
            {firstImage ? (
              <Image
                src={firstImage}
                alt={project.title}
                fill
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 w-full h-full bg-slate-900" />
            )}
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-slate-900" />
          </div>

          <div className="container-custom w-full relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="space-y-6 md:space-y-8 max-w-4xl">
                <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] md:leading-[1.1] tracking-tight text-white">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
                  <span>Publié le {formatDate(project.created_at)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {project.description}
            </div>
          </div>

          {/* Galerie d'images */}
          {images.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl text-secondary mb-6">
                Galerie d&apos;images
              </h2>
              <ImageCarousel images={images} />
            </div>
          )}

          {/* Galerie de vidéos */}
          {videos.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl text-secondary mb-6">
                Vidéos du projet
              </h2>
              <VideoCarousel videos={videos} />
            </div>
          )}

          <div className="mt-16 rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-secondary">
              Passer à l&apos;action
            </h3>
            <p className="mt-4 text-gray-600">
              Rejoignez la communauté Évorev pour suivre ce projet, rencontrer
              ses porteurs et découvrir les prochaines étapes de financement.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#impact"
                className="rounded-xl bg-primary px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:opacity-90"
              >
                Découvrir les projets
              </Link>
              <Link
                href="/#cta"
                className="rounded-xl border border-gray-300 px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-secondary transition hover:border-secondary"
              >
                Être recontacté·e
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                  Pour aller plus loin
                </p>
                <h3 className="mt-3 font-heading text-3xl text-secondary">
                  Autres projets à suivre
                </h3>
              </div>
              <Link
                href="/blog"
                className="hidden rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-secondary transition hover:border-secondary hover:text-secondary/80 md:inline-flex"
              >
                Voir tous les projets
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedProjects.map((related) => {
                const relatedImageUrl =
                  related.image && Array.isArray(related.image) && related.image.length > 0
                    ? related.image[0]
                    : "/images/placeholder.jpg";

                return (
                  <article
                    key={related.id}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
                  >
                    <h4 className="text-lg font-semibold text-secondary">
                      {related.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {related.description}
                    </p>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-primary"
                    >
                      Lire l&apos;article →
                    </Link>
                  </article>
                );
              })}
            </div>

            <Link
              href="/blog"
              className="mt-10 inline-flex w-full justify-center rounded-full border border-gray-200 px-4 py-3 text-sm font-semibold text-secondary transition hover:border-secondary hover:text-secondary/80 md:hidden"
            >
              Voir tous les projets
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}

