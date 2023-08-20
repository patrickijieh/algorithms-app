export default function HashTablesPage() {
  return (
    <div className="flex ml-5 space-x-1 space-y-1 w-5/6 place-self-stretch justify-center pt-6">
      <div className="flex flex-col">
        <h1 className="text-center font-semibold py-5">
          Hash Tables.
        </h1>
        <a 
          className="text-right text-blue-400 hover:text-blue-800"
          href="#complexities"
        >
            Jump to time & space complexities
        </a>
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
          for the string &quot;Hello World!&quot;. The hash value can then be further used to insert the string into a given hash table.<br />
          If we want to create a hash table in Python, we can use Python's built-in dictionary data type, which maps keys to values. We would
          implement such a hash table as shown below:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            hashtable = &#123;&#125;<br />
            hashtable.update(&#123;hashval : text&#125;)<br />
          </code>
          </p> <br />
          The first line of code creates an empty dictionary, which we will use as our hash table. The second line of code inserts the string with
          the hash value as its key. We can then look up the string by using the hash value as the key:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            hashtable.get(hashval)<br />
          </code>
          </p> <br />
          Some programming languages, such as C, do not have built-in hash tables. In this case, we would have to implement our own simple hash table
          and simple hashing function. We can implement a simple hash table in C with an array. First, lets put in some import statements, and define
          some constants and types:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            #include &lt;stdio.h&gt;<br />
            #include &lt;stdlib.h&gt;<br />
            #include &lt;string.h&gt;<br />
            #define TABLESIZE 3000<br />
            typedef char* String;<br />
            typedef struct hashable &#123;<br />
            &nbsp;&nbsp;int key;<br />
            &nbsp;&nbsp;char *value;<br />
            &#125; Hashable;<br />
          </code>
          </p> <br />
          Lines 1-3 import some useful functions, namely the <code className="text-sm">strlen</code> and <code className="text-sm">malloc</code> functions.
          The fourth line is a constant that defines the size of our hash table. The fifth line defines a type called String, since C does not have a
          String type. Lines 6-9 define a type called Hashable, which will be used to store key/value pairs.<br /><br />
          Now, let's implmement a simple hash function. The hash function here is shown below:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            int hash(String str, int strlen) &#123;<br />
            &nbsp;&nbsp;int hashval = 0;<br />

            &nbsp;&nbsp;for (int i = 0; i &lt; strlen; i++) &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;hashval = hashval + str[i];<br />
            &nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;return hashval;<br />
            &#125;<br />
          </code>
          </p> <br />
          You don't need to know how this hashing function works, but it is important to know that it is a very simple hashing function and it
          returns a hash value for a given string. Now, lets define some helper functions for our hashtable, so that we can create a new one, insert
          into an existing one, check if it contains a value, and delete a hashtable if we need to.<br /><br />
          Creating a new hashtable is done by creating space in memory for our table using <code className="text-sm">malloc</code>, and setting
          everything inside of it to NULL:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            Hashable **hashtable_create() &#123;<br />
            &nbsp;&nbsp;Hashable **hashtable = (Hashable**) malloc(TABLESIZE * sizeof(Hashable*));<br />
            &nbsp;&nbsp;for (int i = 0; i &lt; TABLESIZE; i++) &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;hashtable[i] = NULL;<br />
            &nbsp;&nbsp;&#125;<br /><br />

            &nbsp;&nbsp;return hashtable;<br />
            &#125;<br />
          </code>
          </p> <br />
          Inserting into a hashtable is done by first creating a new Hashable object, and then inserting it into the hashtable at an index.&nbsp;
          <text className="font-bold">
            The important takeaway here is that the index is determined by taking the hash value of the string and modding it by the size of the
            table.
          </text><br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            void hashtable_insert(Hashable **hashtable, String val) &#123;<br />
            &nbsp;&nbsp;Hashable *keyval = (Hashable*) malloc(sizeof(Hashable));<br />
            &nbsp;&nbsp;keyval-&gt;key = hash(val, strlen(val));<br />
            &nbsp;&nbsp;keyval-&gt;value = val;<br /><br />

            &nbsp;&nbsp;int index = keyval-&gt;key % TABLESIZE;<br /><br />

            &nbsp;&nbsp;if (hashtable[index] == NULL) &#123; // Only inserts value if it is not already present<br />
            &nbsp;&nbsp;&nbsp;&nbsp;hashtable[index] = keyval;<br />
            &nbsp;&nbsp;&#125;<br />
            &#125;<br />
          </code>
          </p> <br />
          Checking if a hashtable contains a value is done by first hashing the value to get the key, and then checking if the key exists in the 
          hashtable:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            int hashtable_contains(Hashable **hashtable, String val) &#123;<br />
            &nbsp;&nbsp;int index = hash(val, strlen(val));<br />
            &nbsp;&nbsp;index = index % TABLESIZE;<br /><br />

            &nbsp;&nbsp;// Returns a 0 if if val is NOT in the table, or 1 if it IS in the table<br />
            &nbsp;&nbsp;return (hashtable[index] != NULL);<br />
            &#125;<br />
          </code>
          </p> <br />
          Deleting a hashtable is done by freeing up all the memory taken up by the hashtable and its contents:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            void hashtable_delete(Hashable **hashtable) &#123;<br />
            &nbsp;&nbsp;for (int i = 0; i &lt; TABLESIZE; i++) &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;if (hashtable[i] != NULL) &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;free(hashtable[i]-&gt;value);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;free(hashtable[i]);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&#125;<br /><br />

            &nbsp;&nbsp;free(hashtable);<br />
            &#125;<br />
          </code>
          </p> <br />
          Now that we have all of our helper functions defined, we can start using our hashtable. Lets create a new hashtable, insert a value, and
          then check if it contains that value, and then check to see if it contains a dummy value that we know should not be in it:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            int main() &#123;<br />
            &nbsp;&nbsp;String string1 = "Hello World!";<br /><br />

            &nbsp;&nbsp;Hashable **hashtable = hashtable_create();<br /><br />

            &nbsp;&nbsp;hashtable_insert(hashtable, string1);<br /><br />

            &nbsp;&nbsp;printf("Output:\n");<br />
            &nbsp;&nbsp;printf("%d\n", hashtable_contains(hashtable, &quot;Hello World!&quot;));<br />
            &nbsp;&nbsp;printf("%d\n", hashtable_contains(hashtable, &quot;Hi World!&quot;));<br /><br />

            &nbsp;&nbsp;hashtable_delete(hashtable);<br />
            &nbsp;&nbsp;return 0;<br />
            &#125;<br />
          </code>
          </p> <br />
          Running this code outputs 1 and 0, showing that our hashtable works effectively:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            patrick $ gcc -o hashtable hashtable.c<br />
            patrick $ ./hashtable<br />
            Output:<br />
            1<br />
            0<br />
            patrick $<br />
          </code>
          </p> <br />

          <span 
            className="font-bold" 
            id="complexities"
          >
            Time and Space Complexities:
          </span> <br /><br />

          Time Complexities:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Insert: O(1)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Contains: O(1)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Remove: O(1)<br /><br />
          Space Complexity: O(n)<br /><br />
          ...Where <em>n</em> is the number of elements in the hash table.<br /><br />
        </h3>
      </div>
    </div>
  )
}