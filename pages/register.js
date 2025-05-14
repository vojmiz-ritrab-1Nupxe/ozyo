export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">Créer un compte</h1>
        <p className="mb-6 text-sm text-gray-600">
          Veuillez entrer votre email et mot de passe.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            S’inscrire
          </button>
        </form>
      </div>
    </div>
  );
}