import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 inline-block">
        {title}
        <div className="h-1 w-1/3 bg-primary mt-2 rounded-full"></div>
      </h2>
      {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
    </div>
  );
}
