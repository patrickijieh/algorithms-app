export default function LoadingIcon(props: { render: boolean }) {
  return (
    props.render ? (
    <>
      <div className="fixed w-full h-full bg-black opacity-50 z-50"></div>
      <div className="fixed z-50 top-1/3 items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white-900"></div>
        <div className="mt-4 text-l font-bold text-center">Loading...</div>
      </div>
    </>) : false
  )
}