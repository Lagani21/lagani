export default function ColorStripe({ palette }) {
    return (
      <div className="flex h-12 w-full overflow-hidden rounded-lg shadow-md border border-white/20">
        {palette.map((color, idx) => (
          <div
            key={idx}
            className="flex-1 transition-all duration-300"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
    );
  }
  