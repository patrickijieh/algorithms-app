export default function QueuesPage() {
  return (
    <div className="flex ml-5 space-x-1 space-y-1 w-5/6 place-self-stretch justify-center pt-6">
      <div className="flex flex-col">
        <h1 className="text-center font-semibold py-5">
          Queues.
        </h1>
        <h3 className="text-left p-5">
          Queues are a data structure that stores items in a First-In-First-Out (FIFO) system. This means that the first item added to the queue will
          be the first item removed from the queue. Queues are useful for storing items that need to be accessed in a specific order. For example, a
          queue can be used to store the order of customers in a line at a store. The first order in the queue will be the first order processed. <br /><br />
        </h3>
      </div>
    </div>
  )
}