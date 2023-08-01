'use client';

import { MouseEvent } from 'react';
import { Topic, getTopicName } from './content';

export default function Sidebar(props: { change_topic: (new_topic: any) => void }) {
  return (
    <>
      <div className="flex flex-col w-min place-self-stretch border-r-2 border-gray-600 sidebar space-y-8 min-h-full text-sm">
        <div className="pt-8 px-4">
            <p className="text-left px-1 font-bold">
              Sorts
            </p>
            <ul className="list-disc">
              <li className="ml-4 font-bold text-xs hover:text-blue-400">
                <button
                  className="text-left px-1 font-bold hover:text-blue-400"
                  onClick={(e) => handle_click(e, Topic.Insertion)}
                >
                  Insertion Sort
                </button>
              </li>
              <li className="ml-4 font-bold text-xs hover:text-blue-400">
                <button
                  className="text-left px-1 font-bold hover:text-blue-400"
                  onClick={(e) => handle_click(e, Topic.Selection)}
                >
                  Selection Sort
                </button>
              </li>
              <li className="ml-4 font-bold text-xs hover:text-blue-400">
                <button
                  className="text-left px-1 font-bold hover:text-blue-400"
                  onClick={(e) => handle_click(e, Topic.Bubble)}
                >
                  Bubble Sort
                </button>
              </li>
              <li className="ml-4 font-bold text-xs hover:text-blue-400">
                <button
                  className="text-left px-1 font-bold hover:text-blue-400"
                  onClick={(e) => handle_click(e, Topic.Merge)}
                >
                  Merge Sort
                </button>
              </li>
              <li className="ml-4 font-bold text-xs hover:text-blue-400">
                <button
                  className="text-left px-1 font-bold hover:text-blue-400"
                  onClick={(e) => handle_click(e, Topic.Quick)}
                >
                  Quick Sort
                </button>
              </li>
              <li className="ml-4 font-bold text-xs hover:text-blue-400">
                <button
                  className="text-left px-1 font-bold hover:text-blue-400"
                  onClick={(e) => handle_click(e, Topic.Bogo)}
                >
                  Bogo Sort
                </button>
              </li>
            </ul>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.BinarySearch)}
          >
            <p className="text-left">
              Binary Search
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.Dijkstra)}
          >
            <p className="text-left">
              Dijkstra&#39;s Algorithm
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.FloydWarshall)}
          >
            <p className="text-left">
              Floyd-Warshall Algorithm
            </p>
          </button>
        </div>
      </div>
    </>
  )
}

function handle_click(e: MouseEvent<HTMLButtonElement>, topic: Topic) {
  e.preventDefault();
  console.log(getTopicName(topic));
}