type props = {
  className?: string | null;
  fill?: string | null;
  texto?: string;
};

export default function Loading(props: props) {
  return (
    <div
      className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 ${props.className || ''}`}
    >
      <div className="absolute inset-0 bg-slate-950/95" />
      <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border border-cyan-300/30 animate-spin"
            style={{ animationDuration: '2.2s' }}
          />
          <div className="absolute inset-5 rounded-full border border-white/20 animate-pulse" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-slate-950/95 shadow-[0_0_80px_rgba(56,189,248,0.15)]">
            <svg
              className="h-12 w-12 animate-spin text-white"
              style={{ animationDuration: '1.3s' }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-15"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-90"
                fill={props.fill || 'currentColor'}
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <span className="text-lg font-semibold tracking-wide text-white">
            Carregando o portfolio
          </span>
          <span className="text-sm text-slate-300/90">
            {props.texto || 'Aguarde só um instante enquanto tudo é preparado...'}
          </span>
        </div>
      </div>
    </div>
  );
}
