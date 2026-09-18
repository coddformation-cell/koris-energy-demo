type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
};

export default function PageHero({ eyebrow, title, lead, image }: Props) {
  return (
    <section className={`page-hero ${image ? 'has-image' : ''}`}>
      {image && (
        <div className="page-hero-media" aria-hidden="true">
          <img src={image} alt="" loading="eager" />
          <div className="page-hero-overlay" />
        </div>
      )}
      <div className="container page-hero-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-hero-title">{title}</h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
      </div>
    </section>
  );
}
