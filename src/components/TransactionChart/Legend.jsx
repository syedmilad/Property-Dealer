// --- Custom Legend Component (To match the style) ---
const CustomLegend = () => {
  return (
    <div className="flex flex-col gap-2 text-sm px-10 space-x-4">
      <div>
        <p className="text-base font-semibold text-[#272729]">Billed</p>
        <p className="text-xs font-semibold text-[#003A92]">$ 20876394</p>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-4 h-4 rounded bg-[#71EDE2]" />
        <div className='flex flex-col'>
          <p className="text-[#272729] text-base font-semibold">Paid</p>
          <p className="text-[#71EDE2] text-xs font-semibold">$598720918</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-4 h-4 rounded bg-[#1D90D8]" />
        <div>
          <p className="text-[#272729]  font-medium">Unpaid</p>
          <p className="text-[#1D90D8] font-semibold">$20876394</p>
        </div>
      </div>
    </div>
  );
};

export default CustomLegend;