export default function Footer() {
  return (
    <footer className="text-center py-10 text-gray-500 dark:text-gray-400">

      <p>IADSystem © {new Date().getFullYear()}</p>

      <p className="text-sm mt-2">
        Sistema de gestión de trabajos para técnicos
      </p>

    </footer>
  );
}