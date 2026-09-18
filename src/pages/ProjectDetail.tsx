import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectGallery from '../components/ProjectGallery';
import CTAFinal from '../sections/CTAFinal';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projets" replace />;
  }

  return (
    <>
      <section className="project-hero">
        <div className="project-hero-media" aria-hidden="true">
          <img src={project.image} alt="" loading="eager" />
          <div className="project-hero-overlay" />
        </div>
        <div className="container project-hero-inner">
          <div className="project-hero-meta mono">
            <span>{project.categoryLabel}</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>{project.waterDepth}</span>
          </div>
          <h1 className="project-hero-title">{project.title}</h1>
          <p className="project-hero-summary">{project.summary}</p>
          <Link to="/projets" className="project-hero-back mono">
            ← Retour aux projets
          </Link>
        </div>
      </section>

      <section className="section project-intro">
        <div className="container project-intro-inner">
          <div className="project-intro-body">
            <span className="eyebrow">Présentation</span>
            <h2 className="section-title">Vue d’ensemble du projet.</h2>
            <p className="project-intro-desc">{project.presentation}</p>
          </div>
          <aside className="project-specs-card">
            <span className="eyebrow">Fiche technique</span>
            <dl className="project-specs-detailed">
              <div>
                <dt className="mono">Champ</dt>
                <dd>{project.field}</dd>
              </div>
              <div>
                <dt className="mono">Profondeur</dt>
                <dd>{project.waterDepth}</dd>
              </div>
              <div>
                <dt className="mono">Périmètre</dt>
                <dd>{project.scope}</dd>
              </div>
              <div>
                <dt className="mono">Année</dt>
                <dd>{project.year}</dd>
              </div>
              {project.specs.map((s) => (
                <div key={s.label}>
                  <dt className="mono">{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="project-specs-note mono">
              Données fictives — maquette de démonstration.
            </p>
          </aside>
        </div>
      </section>

      <section className="section project-blocks">
        <div className="container">
          <div className="project-block">
            <span className="eyebrow">Contexte</span>
            <h2 className="section-title">Environnement et contraintes.</h2>
            <p className="project-block-desc">{project.context}</p>
          </div>

          <div className="project-block">
            <span className="eyebrow">Défi technique</span>
            <h2 className="section-title">Les principaux défis rencontrés.</h2>
            <p className="project-block-desc">{project.challenge}</p>
          </div>

          <div className="project-block">
            <span className="eyebrow">Approche</span>
            <h2 className="section-title">La solution mise en œuvre.</h2>
            <p className="project-block-desc">{project.approach}</p>
          </div>
        </div>
      </section>

      <ProjectGallery images={project.gallery} />

      <CTAFinal />
    </>
  );
}
