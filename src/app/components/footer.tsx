export default function Footer() {
  return (
    <footer className="min-w-full fixed left-0 bottom-0 flex flex-row">
        <div className="basis-1/2">
          <p className="text-left px-2">
            Made by Patrick Ijieh (July 2023).
          </p>
        </div>
        <div className="basis-1/2 self-end">
          <a
            className="hover:text-blue-400" 
            href="https://github.com/patrickijieh/algorithms-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="px-2 text-right">
              GitHub page
            </p>
          </a>
        </div>
    </footer>
  )
}