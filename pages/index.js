// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 text-gray-800 font-sans">
      <header className="p-6 shadow-md bg-white flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Ozyo logo" width={60} height={60} />
          <h1 className="text-3xl font-bold tracking-wide text-purple-700">Ozyo</h1>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="/login" className="hover:underline">Connexion</a>
          <a href="/register" className="hover:underline">Créer un compte</a>
          <a href="/dashboard" className="hover:underline">Mon compte</a>
        </nav>
      </header>

      <main className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4 text-purple-800">L'élégance au naturel</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Découvrez nos bijoux en acier inoxydable et nos brumes d’intérieur sélectionnés pour leur beauté, leur douceur et leur durabilité. Pensé pour le bien-être et le style de toutes.
        </p>
        <a href="/dashboard" className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700">
          Accéder à la boutique
        </a>
      </main>

      <footer className="p-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ozyo – L’élégance au naturel
      </footer>
    </div>
  );
}