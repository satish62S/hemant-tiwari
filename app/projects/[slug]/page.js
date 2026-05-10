import { notFound } from "next/navigation";
import { projects } from "@/constants/data";
import Lightbox from "@/components/Lightbox";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} | Hemant Tiwari`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Side - Image Lightbox */}
        <div className="md:col-span-8 overflow-hidden rounded-sm">
          <Lightbox src={project.imageUrl} alt={project.title} />
        </div>

        {/* Right Side - Details */}
        <div className="md:col-span-4 flex flex-col justify-center">
          <span className="text-sm tracking-widest uppercase mb-4 text-black/50 dark:text-white/50">
            {project.category}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            {project.title}
          </h1>
          
          <p className="text-lg font-light leading-relaxed mb-12 text-black/80 dark:text-white/80">
            {project.description}
          </p>

          <div className="border-t border-black/10 dark:border-white/10 pt-8 grid grid-cols-2 gap-y-6 text-sm">
            <div>
              <span className="block text-black/40 dark:text-white/40 uppercase tracking-widest text-xs mb-1">Camera</span>
              <span className="font-medium">{project.metadata.camera}</span>
            </div>
            <div>
              <span className="block text-black/40 dark:text-white/40 uppercase tracking-widest text-xs mb-1">Aperture</span>
              <span className="font-medium">{project.metadata.aperture}</span>
            </div>
            <div>
              <span className="block text-black/40 dark:text-white/40 uppercase tracking-widest text-xs mb-1">Shutter Speed</span>
              <span className="font-medium">{project.metadata.shutterSpeed}</span>
            </div>
            <div>
              <span className="block text-black/40 dark:text-white/40 uppercase tracking-widest text-xs mb-1">ISO</span>
              <span className="font-medium">{project.metadata.iso}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
