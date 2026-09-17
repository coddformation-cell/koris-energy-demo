import { useMemo, useState } from 'react';
import { projectFilters, projects, type ProjectFilter } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const items = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <header className="section-head projects-head">
          <div>
            <span className="eyebrow">Projects</span>
            <h2 className="section-title">Selected illustrative projects.</h2>
            <p className="section-lead">
              Fictitious project references built for demonstration — no real
              client data or field location is disclosed.
            </p>
          </div>
          <div
            className="projects-filters"
            role="tablist"
            aria-label="Filter projects by discipline"
          >
            {projectFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                className={`filter-btn ${filter === f.id ? 'is-active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </header>

        <div className="projects-grid">
          {items.map((p, i) => (
            <article
              key={p.id}
              className="project-card"
              style={{ transitionDelay: `${Math.min(i, 4) * 60}ms` }}
            >
              <div className="project-media">
                <img src={p.image} alt="" loading="lazy" />
                <span className="project-cat mono">{p.categoryLabel}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <dl className="project-specs">
                  <div>
                    <dt className="mono">Field</dt>
                    <dd>{p.field}</dd>
                  </div>
                  <div>
                    <dt className="mono">Water depth</dt>
                    <dd>{p.waterDepth}</dd>
                  </div>
                  <div>
                    <dt className="mono">Scope</dt>
                    <dd>{p.scope}</dd>
                  </div>
                  <div>
                    <dt className="mono">Year</dt>
                    <dd>{p.year}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 && (
          <p className="projects-empty">No project in this discipline yet.</p>
        )}
      </div>
    </section>
  );
}
