'use client';

import Main from './pages/main';
import Arrays from './pages/arrays';
import AVLTrees from './pages/avl-trees';
import Graphs from './pages/graphs';
import HashTables from './pages/hash-tables';
import Heaps from './pages/heaps';
import LinkedLists from './pages/linked-lists';
import Queues from './pages/queues';
import Stacks from './pages/stacks';
import Trees from './pages/trees';
import Tries from './pages/tries';
import Sidebar from './sidebar';
import { useState } from 'react';

export enum Topic {
  Main = "main",
  Arrays = "arrays",
  LinkedLists = "linked-lists",
  Stacks = "stacks",
  Queues = "queues",
  HashTables = "hash-tables",
  Trees = "trees",
  Heaps = "heaps",
  Tries = "tries",
  AVLTrees = "avl-trees",
  Graphs = "graphs",
}

export function getTopicName(topic: Topic): string {
  switch (topic) {
    case Topic.Main:
      return "Main";
    case Topic.Arrays:
      return "Arrays";
    case Topic.LinkedLists:
      return "Linked Lists";
    case Topic.Stacks:
      return "Stacks";
    case Topic.Queues:
      return "Queues";
    case Topic.HashTables:
      return "Hash Tables";
    case Topic.Trees:
      return "Trees";
    case Topic.Heaps:
      return "Heaps";
    case Topic.Tries:
      return "Tries";
    case Topic.AVLTrees:
      return "AVL Trees";
    case Topic.Graphs:
      return "Graphs";
    default:
      return "Unknown";
  }
}

export default function Content() {
  const [topic, setTopic] = useState(Topic.Main);

  function changeTopic(newTopic: Topic) {
    if (newTopic === topic) {
      return;
    }
    setTopic(newTopic);
  }

  switch (topic) {
    case Topic.Main:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <Main />
        </>
      )

    case Topic.Arrays:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <Arrays />
        </>
      )

    case Topic.LinkedLists:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <LinkedLists />
        </>
      )

    case Topic.Stacks:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <Stacks />
        </>
      )

    case Topic.Queues:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <Queues />
        </>
      )

    case Topic.HashTables:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <HashTables />
        </>
      )

    case Topic.Trees:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <Trees />
        </>
      )

    case Topic.Heaps:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <Heaps />
        </>
      )

    case Topic.Tries:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <Tries />
        </>
      )

    case Topic.AVLTrees:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <AVLTrees />
        </>
      )

    case Topic.Graphs:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <Graphs />
        </>
      )

    default:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <Main />
        </>
      )
  }
}