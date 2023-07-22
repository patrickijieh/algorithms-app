'use client';

import LoadingIcon from './loading-icon';
import { useState } from 'react';

export default function Header() {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <LoadingIcon render={loading}/>
      <nav className="min-w-full fixed top-0 left-0 flex-row">
        <div className="align-left flex flex-row p-5">
          <a
            className="text-left p-0.5 px-2 font-bold hover:text-blue-400"
            href="/"
            onClick={e => handleClick(setLoading)}
          >
            Home
          </a>
          <a
            className="text-left p-0.5 px-2 font-bold hover:text-blue-400"
            href="/data-structures"
            onClick={e => handleClick(setLoading)}
          >
            Data Structures
          </a>
          <a
            className="text-left p-0.5 px-2 font-bold hover:text-blue-400"
            href="/algorithms"
            onClick={e => handleClick(setLoading)}
          >
            Algorithms
          </a>
        </div>
      </nav>
    </>
  )
}

function handleClick(setLoading: (arg: boolean) => any) {
  setLoading(true);
}