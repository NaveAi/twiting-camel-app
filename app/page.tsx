export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <header className="text-center py-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Twitting Camel
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Video Section */}
        <section className="mb-20">
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg shadow-2xl overflow-hidden">
            {/* Placeholder for the video embed */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">נגן וידאו יוטמע כאן</p>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12">הכתבות שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Article placeholders - we will populate this dynamically later */}
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-purple-500/20 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3">כתבה לדוגמה 1</h3>
              <p className="text-gray-400">תקציר קצר של הכתבה המרתקת הזו יופיע כאן בקרוב...</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-purple-500/20 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3">כתבה לדוגמה 2</h3>
              <p className="text-gray-400">תקציר קצר של הכתבה המרתקת הזו יופיע כאן בקרוב...</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-purple-500/20 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-3">כתבה לדוגמה 3</h3>
              <p className="text-gray-400">תקציר קצר של הכתבה המרתקת הזו יופיע כאן בקרוב...</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-10 mt-20">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Twitting Camel. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}
