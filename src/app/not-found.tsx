export default function Page404() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-60 text-xl">
      <h1 className="text-center font-semibold py-5">
        404 - Page Not Found
      </h1>
      <a
        className="text-center px-1 font-bold text-blue-400 hover:text-blue-800"
        href="/"
      >
        <p className="text-left">
          Return to Home
        </p>
      </a>
    </div>
  )
}