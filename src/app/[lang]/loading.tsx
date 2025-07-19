export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-16 flex items-center border-b px-4 md:px-6 animate-pulse">
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
      </header>
      <main className="flex-1 animate-pulse">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-4">
            <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-2">
              <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-5 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-5 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-5 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="h-16 flex items-center border-t px-4 md:px-6 animate-pulse">
        <div className="h-5 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </footer>
    </div>
  );
}
