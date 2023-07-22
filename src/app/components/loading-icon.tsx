export default function Loading(props: { render: boolean }) {
  return (
    props.render ? (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
      <div className="fixed z-50 top-1/2 items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white-900"></div>
        <div className="mt-4 text-2xl font-bold text-center">Loading...</div>
      </div>
    </>) : false
  )
}