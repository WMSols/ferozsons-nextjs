interface ProductDescriptionProps {
  descriptionHtml: string | null;
  keyFeatures?: string;
}

export default function ProductDescription({
  descriptionHtml,
  keyFeatures,
}: ProductDescriptionProps) {
  if (descriptionHtml) {
    return (
      <div
        className="text-muted-foreground leading-relaxed prose prose-sm max-w-none prose-p:mb-3"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />
    );
  }

  if (keyFeatures) {
    return (
      <p className="text-muted-foreground leading-relaxed">{keyFeatures}</p>
    );
  }

  return null;
}
