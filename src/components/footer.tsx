export default function Footer() {
  return (
    <footer className="min-w-full fixed left-0 bottom-0 flex flex-row">
        <div className="w-full">
        <p className="text-right px-2 text-sm">
            Made by Patrick Ijieh (July 2023).
          </p>
          <a
            className="text-blue-400 hover:text-blue-800" 
            href="https://github.com/patrickijieh/algorithms-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-right px-2 text-sm">
              GitHub page
            </p>
          </a>
        </div>
    </footer>
  )
}