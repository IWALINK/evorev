import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="font-heading font-bold text-9xl gradient-text mb-4">404</h1>
        <h2 className="font-heading font-bold text-4xl text-secondary mb-6">
          Page non trouvée
        </h2>
        <p className="font-sans text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été
          déplacée.
        </p>
        <Link
          href="/"
          className="bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 inline-block"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}

