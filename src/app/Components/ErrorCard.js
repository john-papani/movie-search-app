function ErrorCard({ message }) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-red-100 border border-red-400 text-red-700 rounded-2xl shadow-lg h-fit flex items-start gap-3">
      <div className="text-red-500 text-2xl">⚠️</div>
      <div>
        <h2 className="font-bold text-xl mb-1">Error</h2>
        <p className="text-base">{message}</p>
      </div>
    </div>
  );
}

export default ErrorCard;
