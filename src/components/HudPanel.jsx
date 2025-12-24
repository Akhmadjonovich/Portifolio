export default function HudPanel({ title, children }) {
  return (
    <div className="relative bg-black/40 border border-green-400/20 p-6 backdrop-blur-md">
      {/* corner accents */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-green-400" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-green-400" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-green-400" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-green-400" />

      <h3 className="mb-4 text-sm tracking-widest text-green-400/80">
        {title}
      </h3>

      {children}
    </div>
  );
}
