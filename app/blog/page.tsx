import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fetchProjects } from "@/lib/api";

export const metadata: Metadata = {
    title: "Blog Impact | Évorev",
    description:
        "Explorez les projets en cours de financement et plongez dans les histoires détaillées qui donnent vie à la section Impact d'Évorev.",
};

// Force dynamic rendering to ensure API is called at request time
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPage() {
    const projects = await fetchProjects();
    const featuredProject = projects[0];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white">
                <div className="absolute inset-0 h-full w-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                    >
                        <source
                            src="https://unboundxinc.com/wp-content/uploads/2025/03/4052869-uhd_3840_2160_25fps.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-slate-900" />
                </div>
                <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
                    <p className="mt-10 text-xs uppercase tracking-[0.4em] text-slate-300 md:mt-14 lg:mt-16">
                        Blog Impact
                    </p>
                    <h1 className="mt-6 font-heading text-4xl text-white tracking-tight md:text-5xl">
                        Projets en cours de financement
                    </h1>
                    <p className="mt-4 text-base text-slate-300 md:text-lg">
                        Soutenez l&apos;innovation, investissez dans l&apos;avenir. Découvrez
                        comment chaque franc se transforme en emplois, en formations et en
                        solutions tangibles sur le terrain.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="#articles"
                            className="rounded-xl bg-primary px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
                        >
                            Découvrir les projets
                        </Link>
                        {featuredProject && (
                            <Link
                                href={`/blog/${featuredProject.slug}`}
                                className="rounded-xl border border-white/30 px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
                            >
                                Participer Maintenant
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            <section
                id="articles"
                className="bg-slate-50 py-16 md:py-20 lg:py-24"
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="mb-12 flex flex-col gap-3 text-center">
                        {/* <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
                            Journal Terrain
                        </p> */}
                        <h2 className="font-heading text-3xl text-secondary md:text-4xl">
                            Des histoires concrètes pour mesurer votre impact
                        </h2>
                        {/* <p className="text-base text-gray-600 md:text-lg">
                            Chaque projet présenté ci-dessous est également mis en avant dans
                            la section Impact du site. Retrouvez ici les coulisses, les données
                            et les rencontres qui donnent du sens à votre soutien.
                        </p> */}
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.length > 0 ? (
                            projects.map((project) => {
                                const imageUrl =
                                    project.image && Array.isArray(project.image) && project.image.length > 0
                                        ? project.image[0]
                                        : "/images/placeholder.jpg";

                                return (
                                    <article
                                        key={project.id}
                                        className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        <div className="relative">
                                            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                                <Image
                                                    src={imageUrl}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover"
                                                    priority={project.slug === featuredProject?.slug}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-1 flex-col p-6 pt-4">
                                            <h3 className="text-2xl font-semibold text-secondary">
                                                <Link href={`/blog/${project.slug}`}>
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                                                {project.description}
                                            </p>

                                            <Link
                                                href={`/blog/${project.slug}`}
                                                className="mt-6 inline-flex items-center justify-center rounded-lg border-2 border-primary px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-slate-900"
                                            >
                                                Lire l&apos;article →
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-500">Aucun projet disponible pour le moment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

