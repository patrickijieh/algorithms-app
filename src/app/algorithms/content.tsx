'use client';

import Main from './pages/main';
import Sidebar from './sidebar';
import { useState } from 'react';

export enum Topic {
  Main = "main",
  Insertion = "insertion-sort",
  Selection = "selection-sort",
  Bubble = "bubble-sort",
  Merge = "merge-sort",
  Quick = "quick-sort",
  Bogo = "bogo-sort",
  BinarySearch = "binary-search",
  Dijkstra = "dijkstra",
  FloydWarshall = "floyd-warshall",
}

export function getTopicName(topic: Topic): string {
  switch (topic) {
    case Topic.Main:
      return "Main";
    case Topic.Insertion:
      return "Insertion Sort";
    case Topic.Selection:
      return "Selection Sort";
    case Topic.Bubble:
      return "Bubble Sort";
    case Topic.Merge:
      return "Merge Sort";
    case Topic.Quick:
      return "Quick Sort";
    case Topic.Bogo:
      return "Bogo Sort";
    case Topic.BinarySearch:
      return "Binary Search";
    case Topic.Dijkstra:
      return "Dijkstra's Algorithm";
    case Topic.FloydWarshall:
      return "Floyd-Warshall Algorithm";
    default:
      return "Unknown";
  }
}

export default function Content() {
  const [topic, setTopic] = useState(Topic.Main);

  function changeTopic(newTopic: Topic) {
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

    default:
      return (
        <>
          <Sidebar change_topic={changeTopic}/>
          <Main />
        </>
      )
  }
}