export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-6xl font-bold">Twitting Camel</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Video Section */}
        <section className="mb-16">
          <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg shadow-lg">
            {/* Placeholder for the video embed */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400">Video player will be embedded here</p>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8">הכתבות שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article placeholders - we will populate this dynamically later */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">כתבה לדוגמה 1</h3>
              <p className="text-gray-400">תקציר הכתבה יופיע כאן...</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">כתבה לדוגמה 2</h3>
              <p className="text-gray-400">תקציר הכתבה יופיע כאן...</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">כתבה לדוגמה 3</h3>
              <p className="text-gray-400">תקציר הכתבה יופיע כאן...</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 mt-16">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Twitting Camel. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
