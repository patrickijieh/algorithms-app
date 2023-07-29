'use client';

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col h-full border-r-2 border-gray-600 sidebar text-xs space-y-8">
        <div className="pt-4 px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Arrays
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Linked Lists
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Stacks
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Queues
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-right px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Hash Tables
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Trees
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Heaps
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              Tries
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
          >
            <p className="text-left">
              AVL Trees
            </p>
          </a>
        </div>
      </div>
    </>
  )
}