import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

function TarjetaTrabajo({ trabajo }) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: trabajo.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white dark:bg-gray-900 p-3 rounded shadow cursor-grab select-none hover:shadow-lg transition"
    >
      <h3 className="font-semibold dark:text-gray-100">
        {trabajo.titulo}
      </h3>

      <p className="text-sm text-gray-500">
        {trabajo.clienteNombre || "Sin cliente"}
      </p>
    </div>
  );
}

function Columna({ estado, trabajos }) {

  const { setNodeRef } = useDroppable({
    id: estado,
  });

  const colores = {
    pendiente: "border-yellow-400",
    proceso: "border-blue-400",
    terminado: "border-green-400"
  };

  const iconos = {
    pendiente: "🟡",
    proceso: "🔵",
    terminado: "🟢"
  };

  return (
    <div
      ref={setNodeRef}
      className={`bg-gray-100 dark:bg-gray-800 p-4 rounded min-h-[300px] border-t-4 ${colores[estado]}`}
    >

      <h2 className="font-bold mb-4 capitalize dark:text-gray-100 flex items-center gap-2">
        {iconos[estado]} {estado}
      </h2>

      <div className="space-y-3">
        {trabajos.map((t) => (
          <TarjetaTrabajo key={t.id} trabajo={t} />
        ))}
      </div>

    </div>
  );
}

export default function KanbanTrabajos({ trabajos, onMove }) {

  const estados = ["pendiente", "proceso", "terminado"];

  const handleDragEnd = (event) => {

    const { active, over } = event;

    if (!over) return;

    const trabajoId = active.id;
    const nuevoEstado = over.id;

    onMove(trabajoId, nuevoEstado);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>

      <div className="grid md:grid-cols-3 gap-4">

        {estados.map((estado) => {

          const trabajosEstado = trabajos.filter(
            (t) => t.estado === estado
          );

          return (
            <Columna
              key={estado}
              estado={estado}
              trabajos={trabajosEstado}
            />
          );
        })}

      </div>

    </DndContext>
  );
}