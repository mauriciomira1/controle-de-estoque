interface DashboardWindowProps {
  title: string;
  quantity: number;
}

const DashboardWindow = ({ title, quantity }: DashboardWindowProps) => {
  return (
    <div className="bg-gray-900 py-2 flex flex-col gap-3 justify-between items-center rounded w-52 h-32">
      <h2 className="text-sm">{title}</h2>
      <span className="text-4xl">{quantity}</span>
      <div className="h-5"></div>
    </div>
  );
};

export default DashboardWindow;
