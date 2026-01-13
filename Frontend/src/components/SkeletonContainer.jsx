export default function SkeletonContainer() {
  return (
    <main className="mx-4 max-w-[1200px] lg:mx-auto mt-20 md:mt-28 animate-pulse">
      <section className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2">
        <section className="flex gap-8">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-[120px] h-[90px] bg-gray-200 rounded-md"
              />
            ))}
          </div>
          <div className="w-[300px] h-[300px] bg-gray-200 rounded-md" />
        </section>

        <article className="space-y-4 w-full">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="h-8 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />

          <div className="h-5 bg-gray-200 rounded w-1/3 mt-4" />
          <div className="flex gap-2 flex-wrap">
            {["S", "M", "L", "XL"].map((size) => (
              <div key={size} className="w-12 h-8 bg-gray-200 rounded-md" />
            ))}
          </div>

          <div className="w-32 h-10 bg-gray-300 rounded-md mt-4" />
          <hr className="my-8" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </article>
      </section>

      {/* Tabs */}
      <section className="my-28">
        <div className="flex gap-4">
          <div className="w-24 h-8 bg-gray-200 rounded-md" />
          <div className="w-24 h-8 bg-gray-200 rounded-md" />
        </div>
        <div className="mt-4 space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-16 bg-gray-100 rounded-md" />
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section className="mb-28">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-[200px] bg-gray-200 rounded-md" />
          ))}
        </div>
      </section>
    </main>
  );
}
