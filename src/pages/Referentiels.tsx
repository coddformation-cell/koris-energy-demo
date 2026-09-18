import PageHeader from '../components/PageHeader';
import Standards from '../sections/Standards';
import CTAFinal from '../sections/CTAFinal';
import { referentielsUsage } from '../data/company';

export default function Referentiels() {
  return (
    <>
      <PageHeader
        eyebrow="Référentiels applicables"
        title="Un cadre de référence international."
        lead="Nos opérations et méthodes peuvent être conduites en alignement avec les référentiels applicables au secteur pétrolier et gazier, offshore et subsea. Aucune accréditation ni certification n’est revendiquée dans cette maquette."
      />
      <Standards hideHeader />

      <section className="section referentiels-usage">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow">{referentielsUsage.eyebrow}</span>
            <h2 className="section-title">{referentielsUsage.title}</h2>
          </header>
          <ol className="referentiels-steps">
            {referentielsUsage.steps.map((s, i) => (
              <li key={s.step} className="referentiels-step">
                <div className="referentiels-step-head">
                  <span className="referentiels-step-index mono">{s.step}</span>
                  {i < referentielsUsage.steps.length - 1 && (
                    <span className="referentiels-step-line" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <h3 className="referentiels-step-title">{s.title}</h3>
                  <p className="referentiels-step-desc">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}
