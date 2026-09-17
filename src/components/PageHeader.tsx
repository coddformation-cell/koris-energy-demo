type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export default function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <section className="page-header">
      <div className="container page-header-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-header-title">{title}</h1>
        {lead && <p className="page-header-lead">{lead}</p>}
      </div>
    </section>
  );
}
