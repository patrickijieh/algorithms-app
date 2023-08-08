export default function StacksPage() {
  return (
    <div className="flex ml-5 space-x-1 space-y-1 w-5/6 place-self-stretch justify-center pt-6">
      <div className="flex flex-col">
        <h1 className="text-center font-semibold py-5">
          Stacks.
        </h1>
        <h3 className="text-left p-5">
          A stack is a data structure that stores items in a Last-In-First-Out (LIFO) system. This means that the last item added to the stack will
          be the first item removed from the stack. Stacks are usually implemented using a linked list, but can also be implemented using an array.
          Stacks are usually implemented with the following methods:<br />
          <ul className="list-disc list-inside">
            <li>Push: Adds an item to the top of the stack.</li>
            <li>Pop: Returns the element at the top of the stack <em>and</em> removes it.</li>
            <li>Peek: Returns the element at the top of the stack <em>without</em> removing it.</li>
            <li>isEmpty: Checks to see if the stack is empty or not.</li>
            <li>isFull: Checks to see if the stack is full or not.</li>
          </ul>
          For many programming languages, stacks are contained in the standard library, and can be imported and used as needed.<br /><br />
        </h3>
      </div>
    </div>
  )
}