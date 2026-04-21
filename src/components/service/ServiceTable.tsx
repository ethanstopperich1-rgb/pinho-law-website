// Reusable service-page data table. Every visa/service page uses the
// same rate/timeline/cost grid; factoring it here avoids 30+ lines of
// repeated table markup per page and keeps visual consistency.
export function ServiceTable({
  headers,
  rows,
  className,
}: {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white ${className ?? ""}`}
    >
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-warm-gray">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="border-b border-border px-4 py-3 text-xs font-medium uppercase tracking-wider text-ink-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border last:border-b-0 hover:bg-cream/60"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 align-top ${
                    j === 0 ? "font-medium text-ink" : "text-ink-muted"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
