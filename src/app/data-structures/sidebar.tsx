'use client';
import { Topic, getTopicName } from './content';
import { MouseEvent } from 'react';

export default function Sidebar(props: { change_topic: (new_topic: Topic) => void }) {
  return (
    <>
      <div className="sticky flex flex-col place-self-stretch border-r-2 border-gray-600 sidebar space-y-4 text-sm">
        <div className="pt-4 px-4">
          <button
            className="text-center px-1 py-3 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.Arrays, props.change_topic)}
          >
            <p className="text-left">
              Arrays
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 py-3 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.LinkedLists, props.change_topic)}
          >
            <p className="text-left">
              Linked Lists
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 py-3 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.Stacks, props.change_topic)}
          >
            <p className="text-left">
              Stacks
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 py-3 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.Queues, props.change_topic)}
          >
            <p className="text-left">
              Queues
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-right px-1 py-3 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.HashTables, props.change_topic)}
          >
            <p className="text-left">
              Hash Tables
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 py-3 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.Trees, props.change_topic)}
          >
            <p className="text-left">
              Trees
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 py-3 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.Heaps, props.change_topic)}
          >
            <p className="text-left">
              Heaps
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 py-3 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.Tries, props.change_topic)}
          >
            <p className="text-left">
              Tries
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 py-3 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.AVLTrees, props.change_topic)}
          >
            <p className="text-left">
              AVL Trees
            </p>
          </button>
        </div>
        <div className="px-4">
          <button
            className="text-center px-1 py-3 font-bold hover:text-blue-400"
            onClick={(e) => handle_click(e, Topic.Graphs, props.change_topic)}
          >
            <p className="text-left">
              Graphs
            </p>
          </button>
        </div>
      </div>
    </>
  )
}

function handle_click(e: MouseEvent<HTMLButtonElement>, page: Topic, change_topic: (newTopic: Topic) => void) {
  e.preventDefault();
  console.log(getTopicName(page));
  change_topic(page);
}