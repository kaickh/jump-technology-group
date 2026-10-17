import Link from "next/link";
import { practice } from "@/content/home";
import { services } from "@/content/services";

export function PracticeSwitch() {
  return (
    <div className="practice">
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap" role="radiogroup" aria-label="Areas of work">
        {services.map((service, index) => (
          <label key={service.id} className="choice-label">
            <input
              className="choice-input"
              type="radio"
              name="practice"
              id={`practice-${service.id}`}
              defaultChecked={index === 0}
            />
            {practice.labels[service.id as keyof typeof practice.labels]}
          </label>
        ))}
      </div>
      <div className="mt-5">
        {services.map((service) => (
          <article key={service.id} className={`practice-panel panel-${service.id} rounded-3xl border border-line bg-white p-6 sm:p-8`}>
            <p className="text-sm font-semibold text-blue">{service.number}</p>
            <h3 className="mt-3 max-w-xl text-2xl leading-snug">{service.title}</h3>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed">{service.challenge}</p>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{service.approach}</p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
              <Link className="btn btn-primary" href={`/contact/?interest=${service.interest}&topic=${service.topic}`}>
                {service.inquire}
              </Link>
              <Link className="btn btn-ghost" href={`/services/#${service.id}`}>
                Read this service
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
