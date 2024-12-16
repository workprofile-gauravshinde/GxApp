const Loader = () => {
  return (
    <div
      className=" h-12 w-12 animate-spin rounded-full border-4 border-current border-t-transparent text-neonYellow"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
