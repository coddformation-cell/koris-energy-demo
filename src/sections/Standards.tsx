import { standards, standardsIntro } from '../data/standards';

export default function Standards() {
  return (
    <section className="section standards">
      <div className="container">
        <header className="section-head standards-head">
          <span className="eyebrow">{standardsIntro.eyebrow}</span>
          <h2 className="section-title">{standardsIntro.title}</h2>
          <p className="section-lead">{standardsIntro.lead}</p>
        </header>

        <ul className="standards-grid" role="list">
          {standards.map((s) => (
            <li key={s.code} className="standard-item">
              <span className="standard-code mono">{s.code}</span>
              <span className="standard-scope">{s.scope}</span>
            </li>
          ))}
        </ul>

        <p className="standards-note mono">{standardsIntro.note}</p>
      </div>
    </section>
  );
}
