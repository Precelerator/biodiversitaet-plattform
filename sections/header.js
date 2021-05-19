export default function Header() {
  return (
    <header className="bg-green-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="sr-only">Biodiversitätsplattform</span>
              <img
                className="sm:h-6 h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
              <span className="ml-4 text-white text-xl">Biodiversitätsplattform</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
