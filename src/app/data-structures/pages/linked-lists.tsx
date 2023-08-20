export default function LinkedListsPage() {
  return (
    <div className="flex ml-5 space-x-1 space-y-1 w-5/6 place-self-stretch justify-center pt-6">
      <div className="flex flex-col">
        <h1 className="text-center font-semibold py-5">
          Linked Lists.
        </h1>
        <a 
          className="text-right text-blue-400 hover:text-blue-800"
          href="#complexities"
        >
            Jump to time & space complexities
        </a>
        <h3 className="text-left p-5">
          A linked list is a data structure that is used to store data in a list format. They are similar to arrays, but to access an element in a
          linked list, one must iterate through the list until the desired element is found. Linked lists are made up of nodes, which contain a value
          and a <em>pointer</em> to the next element in the list. To traverse the list, you must use each node's pointer to the next element to go
          through the list. As you can imagine, this can take a long time compared to arrays if the linked list grows to a moderate size.<br /><br />
          Python code (prints to the console: &quot;List: 1 2 3 &quot;)<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            class Node:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, data):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.data = data<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.next = None<br /><br />

              class LinkedList:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.head = None<br /><br />

              &nbsp;&nbsp;&nbsp;&nbsp;def printList(self):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(&quot;List: &quot;, end=&quot;&quot;)<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp = self.head<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while(temp):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(temp.data, end=&quot; &quot;)<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp = temp.next<br /><br />

              my_list = LinkedList()<br />
              my_list.head = Node(1)<br />
              my_list.head.next = Node(2)<br />
              llist.head.next.next = Node(3)<br /><br />
              my_list.printList()<br />
            </code>
          </p> <br />
          Linked lists are very useful when wanting to store data in a structure that will not have a known size at compile time. Since they do not
          have a set size and can be modified in many ways to be much more efficient (double-linked lists and skip lists, for example), they are an
          incredibly useful and important data structure that is used in many applications.<br /><br />

          <span 
            className="font-bold" 
            id="complexities"
          >
            Time and Space Complexities:
          </span> <br /><br />
          
          Time Complexity (Accessing an element): O(n) (can end up being closer to O(1) in best case)<br />
          Time Complexity (Inserting a new element):<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Front of the list: O(1)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;End of the list: O(n)<br />
          Time Complexity (Removing an element): O(1) (not counting the time to find said element)<br />
          Space Complexity: O(n)<br /><br />
          ...With <em>n</em> being the number of elements currently in the linked list.<br />
        </h3>
      </div>
    </div>
  )
}