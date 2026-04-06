function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3 shadow-sm">
        <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-border border-t-primary" />
        <span className="text-sm font-medium text-text-main">Loading page...</span>
      </div>
    </div>
  );
}

export default Loader;
