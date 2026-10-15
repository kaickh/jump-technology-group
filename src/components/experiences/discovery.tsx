import { discovery } from "@/content/home";
import { AscendingMark } from "@/components/ascending-mark";

export function Discovery() {
  return (
    <section className="discovery bg-white" aria-labelledby="discovery-title">
      <div className="frame py-20 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2
              id="discovery-title"
              className="max-w-[12ch] font-serif text-[clamp(2.4rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em]"
            >
              {discovery.title}
            </h2>
            <div className="mt-10 flex flex-col">
              {discovery.options.map((option, index) => (
                <label
                  key={option.id}
                  className={`discovery-label label-${option.id} flex items-start gap-3 border-t border-line py-4 font-serif text-2xl leading-snug tracking-[-0.02em] sm:text-[1.7rem]`}
                >
                  <input
                    className="discovery-input"
                    type="radio"
                    name="forward"
                    id={`forward-${option.id}`}
                    value={option.id}
                    defaultChecked={index === 0}
                  />
                  <span className="discovery-mark mt-1 shrink-0">
                    <AscendingMark />
                  </span>
                  <span>{option.prompt}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="discovery-panels lg:col-span-5 lg:col-start-8 lg:pt-28">
            {discovery.options.map((option) => (
              <div key={option.id} className={`discovery-panel panel-${option.id}`}>
                <p className="text-lg leading-relaxed">{option.body}</p>
                <p className="mt-6">
                  <a className="link-strong" href={option.href}>
                    {option.action}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
