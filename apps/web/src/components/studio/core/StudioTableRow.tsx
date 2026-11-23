type StudioTableRowProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

type StudioTableProps = {
  headers: string[];
  children: React.ReactNode;
  empty?: React.ReactNode;
  isEmpty?: boolean;
};

export const StudioTable = ({ headers, children, empty, isEmpty }: StudioTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="border-b border-zinc-100">
            {headers.map((h) => (
              <th
                key={h}
                className="whitespace-nowrap px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isEmpty ? (
            <tr>
              <td colSpan={headers.length} className="py-0">
                {empty}
              </td>
            </tr>
          ) : (
            children
          )}
        </tbody>
      </table>
    </div>
  );
};

export const StudioTableRow = ({ children, onClick }: StudioTableRowProps) => {
  return (
    <tr
      onClick={onClick}
      className="border-b border-zinc-100 transition hover:bg-zinc-50/50 cursor-pointer"
    >
      {children}
    </tr>
  );
};

export const StudioTableCell = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <td className={`px-4 py-3 text-zinc-600 ${className}`}>{children}</td>
  );
};
