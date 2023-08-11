export default function HashTablesPage() {
  return (
    <div className="flex ml-5 space-x-1 space-y-1 w-5/6 place-self-stretch justify-center pt-6">
      <div className="flex flex-col">
        <h1 className="text-center font-semibold py-5">
          Hash Tables.
        </h1>
        <h3 className="text-left p-5">
          A hash table is a data structure that stores key/value pairs in memory. Hash tables are built around the idea of hashing, which is the
          process of mapping an input of any size to an output of a fixed size, using a hashing function. Good hashing functions are usually fast
          and extremely complex, and are designed to minimize collisions. Collisions occur when two different inputs are mapped onto the same output.
          There are many solutions to deal with collisions, such as linear and quadratic probing, which will be talked about later.<br /><br />

          Hash tables are very useful because they allow for constant time insertion, deletion, and lookup of elements. This is because the hashing
          function maps each key to a unique index. If we want to insert a key/value pair, we hash the key and insert the value at the resulting
          index. If we want to look up a value, we hash the key and return the value at the resulting index.<br /><br />

          Hashing functions are incredibly complex, and building even a decent one is a very difficult task. Luckily, most programming languages have
          built-in hashing functions that we can use, including Python.<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            text = &quot;Hello World!&quot;<br />
            hashval = hash(text)<br />
            print(hashval)<br />
          </code>
          </p> <br />
          The three lines of code above outputs to the console <code className="text-sm">-6745432538389672979</code>, which represents the hash value
          for the string &quot;Hello World!&quot;. The hash value can then be further used to insert the string into a given hash table.<br /><br />
        </h3>
      </div>
    </div>
  )
}