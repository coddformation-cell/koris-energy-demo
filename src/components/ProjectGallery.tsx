type Props = {
  images: string[];
  title?: string;
};

export default function ProjectGallery({ images, title }: Props) {
  if (!images.length) return null;
  return (
    <section className="section project-gallery">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Galerie</span>
          <h2 className="section-title">
            {title ?? 'Quelques visuels du projet.'}
          </h2>
        </header>

        <ul className="project-gallery-grid" role="list">
          {images.map((src, i) => (
            <li key={i} className={`project-gallery-item ${i === 0 ? 'is-primary' : ''}`}>
              <img src={src} alt="" loading="lazy" />
            </li>
          ))}
        </ul>

        <p className="project-gallery-note mono">
          Visuels d’illustration — les images ne représentent pas des installations réelles.
        </p>
      </div>
    </section>
  );
}
