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

          Stacks are useful for many different applications, such as reversing a string, or checking for balanced parentheses.<br />
          For our Python example, we will be implementing a stack using an array:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
            class Stack:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, size):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.size = size<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.stack = []<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.top = -1<br /><br />
                  
            &nbsp;&nbsp;&nbsp;&nbsp;def push(self, data):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if self.top == self.size - 1:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Stack is full!")<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.stack.append(data)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.top += 1<br /><br />
                
            &nbsp;&nbsp;&nbsp;&nbsp;def pop(self):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if self.top == -1:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Stack is empty!")<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.top -= 1<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self.stack.pop()<br /><br />
                
            &nbsp;&nbsp;&nbsp;&nbsp;def peek(self):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if self.top == -1:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Stack is empty!")<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self.stack[self.top]<br /><br />
                  
            &nbsp;&nbsp;&nbsp;&nbsp;def isEmpty(self):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self.top == -1<br /><br />
                
            &nbsp;&nbsp;&nbsp;&nbsp;def isFull(self):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self.top == self.size - 1<br />
          </code>
          </p> <br />
          To add an item to the stack, we initialize the stack and we use the .push() method like so:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
              myStack = Stack(5)<br />
              myStack.push(1)<br />
              myStack.push(2)<br />
            </code>
          </p> <br />
          And if we pop the stack and print it, we get the following:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
              # prints 2<br />
              &gt;&gt;&gt; print(myStack.pop())<br />
              2<br />
            </code>
          </p> <br />
          And if we pop the stack two more times, we get the following:<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
              # prints 1, None<br />
              &gt;&gt;&gt; print(myStack.pop())<br />
              1<br />
              &gt;&gt;&gt; print(myStack.pop())<br />
              Stack is empty!<br />
              None<br />
            </code>
          </p> <br />
          As you can see, the stack is empty after popping the stack twice. You can also double-check by printing out the underlying array in the
          stack.<br /><br />
          <p className="w-fit border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
                        dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="text-sm">
              # prints []<br />
              &gt;&gt;&gt; print(myStack.stack)<br />
              []<br />
            </code>
          </p> <br />

          <span className="font-bold">Time and Space Complexities:</span><br /><br />
          Time Complexities:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Calling push() with a pointer to the top: O(1)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Calling pop() with a pointer to the top: O(1)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Calling peek() with a pointer to the top: O(1)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Calling isEmpty(): O(1)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Calling isFull(): O(1)<br /><br />
          Space Complexities:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;O(n) for the stack; O(1) for its operations<br /><br />
          ...Where <em>n</em> is the size of the stack.<br />
        </h3>
      </div>
    </div>
  )
}