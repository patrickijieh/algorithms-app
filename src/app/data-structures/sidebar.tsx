'use client';

import Topic from './structuresTopics';
import { MouseEvent } from 'react';

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col place-self-stretch border-r-2 border-gray-600 sidebar space-y-8 min-h-full text-sm">
        <div className="pt-4 px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Arrays)}
          >
            <p className="text-left">
              Arrays
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.LinkedLists)}
          >
            <p className="text-left">
              Linked Lists
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Stacks)}
          >
            <p className="text-left">
              Stacks
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Queues)}
          >
            <p className="text-left">
              Queues
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-right px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.HashTables)}
          >
            <p className="text-left">
              Hash Tables
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Trees)}
          >
            <p className="text-left">
              Trees
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Heaps)}
          >
            <p className="text-left">
              Heaps
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Tries)}
          >
            <p className="text-left">
              Tries
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.AVLTrees)}
          >
            <p className="text-left">
              AVL Trees
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Graphs)}
          >
            <p className="text-left">
              Graphs
            </p>
          </a>
        </div>
      </div>
    </>
  )
}

function changePage(e: MouseEvent<HTMLAnchorElement>, page: Topic) {
  e.preventDefault();
  console.log(page);
}