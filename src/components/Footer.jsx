export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Vibe Coding — Built with love and great DX.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Docs</a>
          <a href="#" className="hover:text-gray-900">Changelog</a>
          <a href="#" className="hover:text-gray-900">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
