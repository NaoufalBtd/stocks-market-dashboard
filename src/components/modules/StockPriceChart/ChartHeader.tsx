const ChartHeader: React.FC<{ timeIntervalLabel: string, percentageChange: string }> = ({
  timeIntervalLabel,
  percentageChange,
}) => (
  <div className="flex justify-between items-center mb-4">
    <div>
      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-500">{timeIntervalLabel}</p>
        <p className="badge badge-accent">{percentageChange}%</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <span>Score</span>
      <input type="checkbox" className="toggle toggle-sm" />
      <span>MOS</span>
      <input type="checkbox" className="toggle toggle-sm" />
    </div>
  </div>
);

export default ChartHeader;
