'use client';

import LoadingIcon from './loading-icon';
import { useState, MouseEvent } from 'react';

export default function Header() {
  const [is_loading, set_loading] = useState(false);

  return (
    <>
      <LoadingIcon render={is_loading} />
      <nav className="min-w-full border-b border-gray-600">
        <div className="align-left flex flex-row p-4">
          <a
            className="text-left p-0.5 px-3 font-bold hover:text-blue-400"
            href="/"
            onClick={e => handle_click(e, set_loading)}
          >
            Home
          </a>
          <a
            className="text-left p-0.5 px-3 font-bold hover:text-blue-400"
            href="/algorithms"
            onClick={e => handle_click(e, set_loading)}
          >
            Algorithms
          </a>
          <a
            className="text-left p-0.5 px-3 font-bold hover:text-blue-400"
            href="/data-structures"
            onClick={e => handle_click(e, set_loading)}
          >
            Data Structures
          </a>
          <a
            className="text-left p-0.5 px-3 font-bold hover:text-blue-400"
            href="/resources"
            onClick={e => handle_click(e, set_loading)}
          >
            Resources
          </a>
        </div>
      </nav>
    </>
  )
}

function handle_click(e: MouseEvent<HTMLAnchorElement>, set_loading: (arg0: boolean) => void) {
  e.preventDefault();
  let new_window = e.currentTarget.href;
  set_loading(true);
  if (new_window === window.location.href) {
    window.location.reload();
    return;
  }

  // add delay (for fun)
  let delay = (Math.random() * 2000) + 1000;

  setTimeout(() => window.location.href = new_window, delay);
}