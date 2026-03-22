interface SectionHeadingProps {
  label: string;
  title: string;
  highlightWord?: string;
  highlightColor?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  highlightWord,
  highlightColor = "gradient-text",
  description,
  centered = true,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className={highlightColor}>{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`mb-16 ${centered ? "text-center flex flex-col items-center" : "flex flex-col items-start"}`}>
      <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/10 mb-6">
        {label}
      </span>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl mb-6 max-w-3xl">
        {renderTitle()}
      </h2>
      {description && (
        <p className="max-w-2xl text-slate-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
