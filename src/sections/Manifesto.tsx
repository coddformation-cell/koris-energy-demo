import { manifestoBlock } from '../data/company';

export default function Manifesto() {
  return (
    <section className="section manifesto">
      <div className="container manifesto-inner">
        <div className="manifesto-head">
          <span className="eyebrow">{manifestoBlock.eyebrow}</span>
          <h2 className="manifesto-title">{manifestoBlock.title}</h2>
        </div>
        <div className="manifesto-body">
          {manifestoBlock.paragraphs.map((p, i) => (
            <p key={i} className="manifesto-p">{p}</p>
          ))}
        </div>
      </div>
      <div className="manifesto-divider" aria-hidden="true" />
    </section>
  );
}
