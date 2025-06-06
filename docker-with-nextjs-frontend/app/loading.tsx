export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin mx-auto" />
        <p className="text-white mt-4 text-xl font-semibold">Loading...</p>
      </div>
    </div>
  );
}
