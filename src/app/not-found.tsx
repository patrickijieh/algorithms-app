export default function Page404() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-60 text-xl">
      <h1 className="text-center font-semibold py-5">
        404 - Page Not Found
      </h1>
      <h3 className="text-left p-5">
        <em>&quot;These aren't the droids you're looking for.&quot;</em>
      </h3>
      <a
        className="text-center px-1 font-bold text-blue-400 hover:text-blue-800"
        href="/"
      >
        <p className="text-left">
          Return Home
        </p>
      </a>
    </div>
  )
}