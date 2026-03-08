export default function StatCard({ title, value, color = "blue", icon }) {

  const colors = {
    yellow: "text-yellow-500",
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-between">

      <div>

        <h3 className="text-gray-500 text-sm dark:text-gray-400">
          {title}
        </h3>

        <p className={`text-3xl font-bold ${colors[color]}`}>
          {value}
        </p>

      </div>

      <div className="text-2xl">
        {icon}
      </div>

    </div>
  );
}