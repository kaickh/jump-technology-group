import { vaultiq } from "@/content/vaultiq";
import { AscendingMark } from "@/components/ascending-mark";

function CaptureSheet() {
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-label="A page being set onto a sheet">
      <rect x="70" y="46" width="150" height="176" fill="none" stroke="#252B29" strokeWidth="1.25" transform="rotate(-7 145 134)" />
      <rect x="124" y="28" width="156" height="180" fill="#FBFAF7" stroke="#252B29" strokeWidth="1.25" />
      <path d="M148 72h108M148 92h84M148 112h96M148 132h64" stroke="#3F4844" strokeWidth="1.15" />
      <path d="M248 40h22M259 29v22" stroke="#D87560" strokeWidth="1.25" />
    </svg>
  );
}

function OrganizeSheet() {
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-label="Three records in a column">
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(36 ${36 + row * 62})`}>
          <rect width="288" height="46" fill="none" stroke="#252B29" strokeWidth="1.15" />
          <rect x="16" y="15" width="16" height="16" fill="none" stroke="#D87560" strokeWidth="1.15" />
          <path d={`M48 23h${120 + row * 28}`} stroke="#3F4844" strokeWidth="1.15" />
        </g>
      ))}
    </svg>
  );
}

function RetrieveSheet() {
  return (
    <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-label="One record marked among quieter lines">
      {[48, 84, 156, 192].map((y) => (
        <path key={y} d={`M40 ${y}h250`} stroke="#E3DDD4" strokeWidth="1.25" />
      ))}
      <path d="M40 120h268" stroke="#252B29" strokeWidth="1.6" />
      <circle cx="322" cy="120" r="4" fill="#D87560" />
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
      <div className="grid items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex flex-col gap-4 border-b border-ink/15 sm:flex-row sm:gap-8">
            {vaultiq.stages.map((stage, index) => (
              <label key={stage.id} className="vault-stage pb-3 font-serif text-[1.7rem] leading-none tracking-[-0.03em]">
                <input
                  className="stage-input"
                  type="radio"
                  name="vault-stage"
                  id={`stage-${stage.id}`}
                  defaultChecked={index === 0}
                />
                <span className="flex items-center gap-2">
                  <span className="stage-mark">
                    <AscendingMark />
                  </span>
                  {stage.title}
                </span>
              </label>
            ))}
          </div>
          <div className="mt-6 min-h-[220px] bg-white px-4 py-6 sm:px-8">
            {vaultiq.stages.map((stage) => {
              const Visual = visuals[stage.id];
              return (
                <div key={stage.id} className={`vault-visual visual-${stage.id}`}>
                  <Visual />
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:pt-20">
          {vaultiq.stages.map((stage) => (
            <div key={stage.id} className={`vault-copy copy-${stage.id}`}>
              <p className="num text-muted">{stage.number}</p>
              <p className="mt-4 text-lg leading-relaxed">{stage.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
