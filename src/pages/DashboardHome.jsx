import StatCard from "../components/dashboard/StatCard";

export default function DashboardHome() {
  return (
    <div className="grid grid-cols-4 gap-4">

      <StatCard title="Clientes" value="12" />
      <StatCard title="Trabajos" value="8" />
      <StatCard title="Pendientes" value="3" />
      <StatCard title="Ingresos del mes" value="$1200" />

    </div>
  );
}