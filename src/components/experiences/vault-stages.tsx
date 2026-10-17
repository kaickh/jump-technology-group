import { vaultiq } from "@/content/vaultiq";

function CaptureSheet() {
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-label="A page being set onto a sheet">
      <rect x="70" y="46" width="150" height="176" fill="none" stroke="#021639" strokeWidth="1.4" transform="rotate(-7 145 134)" />
      <rect x="124" y="28" width="156" height="180" rx="12" fill="#F3F6F9" stroke="#021639" strokeWidth="1.4" />
      <path d="M148 72h108M148 92h84M148 112h96M148 132h64" stroke="#3E5168" strokeWidth="1.2" />
      <circle cx="258" cy="48" r="8" fill="#00DED8" />
    </svg>
  );
}

function OrganizeSheet() {
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-label="Three records in a column">
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(36 ${36 + row * 62})`}>
          <rect width="288" height="46" rx="12" fill="#F3F6F9" stroke="#021639" strokeWidth="1.3" />
          <circle cx="28" cy="23" r="7" fill={row === 1 ? "#00DED8" : "#0174AD"} />
          <path d={`M48 23h${120 + row * 28}`} stroke="#3E5168" strokeWidth="1.2" />
        </g>
      ))}
    </svg>
  );
}

function RetrieveSheet() {
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-label="One record marked among quieter lines">
      {[48, 84, 156, 192].map((y) => (
        <path key={y} d={`M40 ${y}h250`} stroke="#D8DEE6" strokeWidth="2" strokeLinecap="round" />
      ))}
      <rect x="28" y="100" width="280" height="40" rx="12" fill="#F3F6F9" stroke="#0174AD" strokeWidth="1.6" />
      <circle cx="318" cy="120" r="6" fill="#00DED8" />
    </svg>
  );
}

const visuals = {
  capture: CaptureSheet,
  organize: OrganizeSheet,
  retrieve: RetrieveSheet,
} as const;

export function VaultStages() {
  return (
    <div className="vault">
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="VaultIQ stages">
        {vaultiq.stages.map((stage, index) => (
          <label key={stage.id} className="vault-stage">
            <input
              className="stage-input"
              type="radio"
              name="vault-stage"
              id={`stage-${stage.id}`}
              defaultChecked={index === 0}
            />
            {stage.title}
          </label>
        ))}
      </div>
      <div className="mt-5 grid items-center gap-6 rounded-3xl border border-line bg-white p-5 sm:p-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {vaultiq.stages.map((stage) => {
            const Visual = visuals[stage.id];
            return (
              <div key={stage.id} className={`vault-visual visual-${stage.id}`}>
                <Visual />
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-5">
          {vaultiq.stages.map((stage) => (
            <div key={stage.id} className={`vault-copy copy-${stage.id}`}>
              <p className="text-sm font-semibold text-blue">{stage.number}</p>
              <h3 className="mt-2 text-2xl">{stage.title}</h3>
              <p className="mt-3 text-lg leading-relaxed">{stage.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
