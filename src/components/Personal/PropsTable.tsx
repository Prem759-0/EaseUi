interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-x-auto neo-box-no-hover bg-white dark:bg-zinc-800 border-[4px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-neo-yellow dark:bg-zinc-700 border-b-[4px] border-black dark:border-white">
            <th className="px-6 py-4 font-comic font-black text-black dark:text-white uppercase tracking-wider border-r-[4px] border-black dark:border-white">Prop</th>
            <th className="px-6 py-4 font-comic font-black text-black dark:text-white uppercase tracking-wider border-r-[4px] border-black dark:border-white">Type</th>
            <th className="px-6 py-4 font-comic font-black text-black dark:text-white uppercase tracking-wider border-r-[4px] border-black dark:border-white">
              Default
            </th>
            <th className="px-6 py-4 font-comic font-black text-black dark:text-white uppercase tracking-wider">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b-[3px] border-black dark:border-white last:border-0 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors">
              <td className="px-6 py-4 text-base font-bold font-mono text-neo-blue border-r-[4px] border-black dark:border-white bg-white dark:bg-zinc-800">
                {row.prop}
              </td>
              <td className="px-6 py-4 text-sm font-bold font-mono text-neo-pink border-r-[4px] border-black dark:border-white bg-gray-50 dark:bg-zinc-900 break-all">
                {row.type}
              </td>
              <td className="px-6 py-4 text-sm font-bold font-mono text-neo-green border-r-[4px] border-black dark:border-white bg-white dark:bg-zinc-800">
                {row.default}
              </td>
              <td className="px-6 py-4 text-base font-bold text-black dark:text-white bg-gray-50 dark:bg-zinc-900">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
