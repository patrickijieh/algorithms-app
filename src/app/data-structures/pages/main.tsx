export default function Main() {

  return (
    <div className="flex ml-5 space-x-1 space-y-1 w-5/6 place-self-stretch justify-center pt-6">
      <div className="flex flex-col">
        <h1 className="text-center font-semibold py-5">
          Data Structures.
        </h1>
        <h3 className="text-left p-5">
          Data structures are a way to store data so its easy to access and manipulate. They are the main building blocks of computer science.
          Things such as arrays, linked lists, and trees are all examples of data structures that are used on a daily basis in
          software development. For example, arrays are used to store data in a list format:<br /><br />
          Python code (prints to the console: &quot;1 2 3 4 5 &quot;):<br /><br />
          <p className="w-1/4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
              arr = [1, 2, 3, 4, 5]<br />
              for i in range(len(arr)): <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(arr[i], &quot; &quot;, end=&quot;&quot;)<br />
            </code>
          </p> <br />
          Structuring data in different ways allows us as programmers to solve problems more efficiently. For example, if one wanted to store
          data in a structure that will not have a fixed size, one would preferably use a linked list over an array, since arrays are created in
          memory with a fixed length.
        </h3>
      </div>
    </div>  
  );
}