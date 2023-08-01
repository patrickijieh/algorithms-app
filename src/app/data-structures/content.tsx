'use client';

import Topic from './structuresTopics';
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

export default function Content() {

  const [topic, setTopic] = useState(Topic.Main);

  function changeTopic(newTopic: Topic) {
    setTopic(newTopic);
  }

  switch (topic) {
    case Topic.Main:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <Main />
        </>
      )

    case Topic.Arrays:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <Arrays />
        </>
      )

    case Topic.LinkedLists:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <LinkedLists />
        </>
      )

    case Topic.Stacks:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <Stacks />
        </>
      )

    case Topic.Queues:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <Queues />
        </>
      )

    case Topic.HashTables:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <HashTables />
        </>
      )

    case Topic.Trees:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <Trees />
        </>
      )

    case Topic.Heaps:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <Heaps />
        </>
      )

    case Topic.Tries:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <Tries />
        </>
      )

    case Topic.AVLTrees:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <AVLTrees />
        </>
      )
      
    case Topic.Graphs:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <Graphs />
        </>
      )

    default:
      return (
        <>
          <Sidebar changeTopic={changeTopic}/>
          <Main />
        </>
      )
  }
}