export default function ArraysPage() {
  return (
    <div className="flex ml-5 space-x-1 space-y-1 w-5/6 place-self-stretch justify-center pt-6">
      <div className="flex flex-col">
        <h1 className="text-center font-semibold py-5">
          Arrays.
        </h1>
        <h3 className="text-left p-5">
          Arrays are a basic data structure that stores a collection of elements of the same data type in memory. Each element is stored in a
          contiguous block of memory, and each element is accessed by its index. Arrays are useful because elements in the array can be accessed in
          constant time, making them very efficient. However, arrays have a fixed size, and adding to an array that is already full can be a costly
          operation, depending on the size and implementation.<br /><br />

          Python code (Prints to the console: &quot;ham&quot;):<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
              toppings = [&quot;ham&quot;, &quot;peppers&quot;, &quot;bacon&quot;, &quot;pepperoni&quot;, &quot;pineapple&quot;]<br />
              print(toppings[0], end=&quot;&quot;)<br />
            </code>
          </p> <br />
          Notice that in order to access the first element in the array, we use the index 0. Arrays in most programming languages (Python, C, Java,
          etc.) are zero-indexed, meaning they start at 0 and end at the length of the array minus 1.<br />
          The index for &quot;ham&quot; is 0, the index for &quot;peppers&quot; is 1, the index for &quot;bacon&quot; is 2, etc...<br /><br />
          Arrays are a very useful data structure, and can be used as a building block for more complex data structures.<br /><br />

          <span className="font-bold">Time and Space Complexities:</span><br /><br />
          Time Complexity (Accessing an element): O(1)<br />
          Time Complexity (Inserting a new element): O(n)<br />
          Time Complexity (Removing an element): O(n)<br />
          Space Complexity: O(n)<br /><br />
          ...With <em>n</em> being the number of elements currently in the array.<br />
        </h3>
      </div>
    </div>
  )
}