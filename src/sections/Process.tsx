import { processSteps } from '../data/company';

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Processus</span>
          <h2 className="section-title">
            Du cadrage du projet à la livraison offshore.
          </h2>
        </header>

        <ol className="process-timeline">
          {processSteps.map((p, i) => (
            <li key={p.step} className="process-step">
              <div className="process-step-head">
                <span className="process-step-index mono">{p.step}</span>
                {i < processSteps.length - 1 && (
                  <span className="process-step-line" aria-hidden="true" />
                )}
              </div>
              <div className="process-step-body">
                <h3 className="process-step-title">{p.title}</h3>
                <p className="process-step-desc">{p.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
