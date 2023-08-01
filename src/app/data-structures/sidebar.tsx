'use client';

import Topic from './structuresTopics';
import { MouseEvent } from 'react';

export default function Sidebar(props: { changeTopic: (newTopic: Topic) => void }) {
  return (
    <>
      <div className="flex flex-col place-self-stretch border-r-2 border-gray-600 sidebar space-y-8 min-h-full text-sm">
        <div className="pt-4 px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Arrays, props.changeTopic)}
          >
            <p className="text-left">
              Arrays
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.LinkedLists, props.changeTopic)}
          >
            <p className="text-left">
              Linked Lists
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Stacks, props.changeTopic)}
          >
            <p className="text-left">
              Stacks
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Queues, props.changeTopic)}
          >
            <p className="text-left">
              Queues
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-right px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.HashTables, props.changeTopic)}
          >
            <p className="text-left">
              Hash Tables
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Trees, props.changeTopic)}
          >
            <p className="text-left">
              Trees
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Heaps, props.changeTopic)}
          >
            <p className="text-left">
              Heaps
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Tries, props.changeTopic)}
          >
            <p className="text-left">
              Tries
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.AVLTrees, props.changeTopic)}
          >
            <p className="text-left">
              AVL Trees
            </p>
          </a>
        </div>
        <div className="px-4">
          <a
            className="text-center px-1 font-bold hover:text-blue-400"
            onClick={(e) => changePage(e, Topic.Graphs, props.changeTopic)}
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

function changePage(e: MouseEvent<HTMLAnchorElement>, page: Topic, changeTopic: (newTopic: Topic) => void) {
  e.preventDefault();
  console.log(page);
  changeTopic(page);
}