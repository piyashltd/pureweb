const Skeleton = () => {
  return (
    <div className="p-4 w-full bg-[#0f0a19] min-h-screen">
      {/* উপরের গোল সার্কেল গুলোর জন্য */}
      <div className="flex space-x-4 mb-8 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-20 w-20 bg-gray-800 rounded-full animate-pulse shrink-0"></div>
        ))}
      </div>

      {/* মাঝখানের বড় কার্ড গুলোর জন্য */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="h-32 bg-gray-800 rounded-lg animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-800 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* নিচের লম্বা কার্ড গুলোর জন্য */}
      <div className="grid grid-cols-2 gap-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="h-52 bg-gray-800 rounded-lg animate-pulse"></div>
            <div className="h-4 w-full bg-gray-800 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
