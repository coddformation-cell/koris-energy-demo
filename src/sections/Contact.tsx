import { useState, type FormEvent } from 'react';
import { site } from '../data/site';

type FormState = {
  name: string;
  company: string;
  email: string;
  country: string;
  scope: string;
  message: string;
};

const emptyForm: FormState = {
  name: '',
  company: '',
  email: '',
  country: '',
  scope: 'Pipeline',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, business email and message.');
      return;
    }
    setError(null);
    setSent(true);
    setForm(emptyForm);
    setTimeout(() => setSent(false), 7000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Talk to our engineering team.</h2>
          <p className="contact-lead">
            Décrivez brièvement votre projet offshore, subsea ou pipeline —
            notre équipe revient vers vous sous 48 heures ouvrées.
          </p>

          <ul className="contact-items" role="list">
            <li>
              <span className="contact-label mono">Phone</span>
              <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
                {site.contact.phone}
              </a>
            </li>
            <li>
              <span className="contact-label mono">Business email</span>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <span className="contact-label mono">Headquarters</span>
              <span>{site.contact.hq}</span>
            </li>
            <li>
              <span className="contact-label mono">Operations base</span>
              <span>{site.contact.operationsBase}</span>
            </li>
          </ul>

          <p className="contact-note mono">
            Fictional contact information for demonstration purposes only.
          </p>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-row">
            <label className="field">
              <span>Full name</span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Jane Doe"
                required
              />
            </label>
            <label className="field">
              <span>Company</span>
              <input
                type="text"
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                placeholder="Company name"
              />
            </label>
          </div>

          <div className="form-row">
            <label className="field">
              <span>Business email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="you@company.com"
                required
              />
            </label>
            <label className="field">
              <span>Country</span>
              <input
                type="text"
                value={form.country}
                onChange={(e) => update('country', e.target.value)}
                placeholder="Côte d’Ivoire"
              />
            </label>
          </div>

          <label className="field">
            <span>Project scope</span>
            <select
              value={form.scope}
              onChange={(e) => update('scope', e.target.value)}
            >
              <option>Pipeline</option>
              <option>Subsea</option>
              <option>Offshore</option>
              <option>Inspection & Maintenance</option>
              <option>Other</option>
            </select>
          </label>

          <label className="field">
            <span>Project description</span>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              placeholder="Brief description of your project (scope, location, timing…)"
              required
            />
          </label>

          {error && <p className="form-error">{error}</p>}
          {sent && (
            <p className="form-success">
              Thank you — your request has been recorded (demo only, no data
              transmitted).
            </p>
          )}

          <button type="submit" className="btn btn-primary form-submit">
            Send inquiry
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
