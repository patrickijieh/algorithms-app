'use client';

import LoadingIcon from './loading-icon';
import { useState, MouseEvent } from 'react';

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
            onClick={e => handleClick(e, setLoading)}
          >
            Home
          </a>
          <a
            className="text-left p-0.5 px-2 font-bold hover:text-blue-400"
            href="/data-structures"
            onClick={e => handleClick(e, setLoading)}
          >
            Data Structures
          </a>
          <a
            className="text-left p-0.5 px-2 font-bold hover:text-blue-400"
            href="/algorithms"
            onClick={e => handleClick(e, setLoading)}
          >
            Algorithms
          </a>
        </div>
      </nav>
    </>
  )
}

function handleClick(e: MouseEvent<HTMLAnchorElement>, setLoading: (arg: boolean) => any) {
  let new_window = e.currentTarget.href;
  e.preventDefault();
  setLoading(true);
  setTimeout(() => window.location.href = new_window, 1000);
}