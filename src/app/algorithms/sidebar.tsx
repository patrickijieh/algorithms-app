'use client';

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col w-min place-self-stretch border-r-2 border-gray-600 sidebar space-y-8 min-h-full text-sm">
        <div className="pt-8 px-4">
            <p className="text-left px-1 font-bold">
              Sorts
            </p>
            <ul className="list-disc">
              <li className="ml-4 font-bold text-xs hover:text-blue-400">Insertion Sort</li>
              <li className="ml-4 font-bold text-xs hover:text-blue-400">Selection Sort</li>
              <li className="ml-4 font-bold text-xs hover:text-blue-400">Bubble Sort</li>
              <li className="ml-4 font-bold text-xs hover:text-blue-400">Merge Sort</li>
              <li className="ml-4 font-bold text-xs hover:text-blue-400">Quick Sort</li>
              <li className="ml-4 font-bold text-xs hover:text-blue-400">Bogo Sort</li>
            </ul>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Binary Search
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Dijkstra&#39;s Algorithm
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Floyd-Warshall Algorithm
            </p>
          </a>
        </div>
      </div>
    </>
  )
}