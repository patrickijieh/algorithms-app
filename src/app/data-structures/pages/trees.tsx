export default function TreesPage() {
  return (
    <div className="flex ml-5 space-x-1 space-y-1 w-5/6 place-self-stretch justify-center pt-6">
      <div className="flex flex-col">
        <h1 className="text-center font-semibold py-5">
          Binary Search Trees.
        </h1>
        <h3 className="text-left p-5">
          Binary search trees are a type of tree data structure in which each node has a value, and at most two children, referred to as the left
          child and the right child. Nodes that do not have a left nor right child are called leaf nodes. Eventually, if you have enough nodes, with
          each node having one or two children, and a substantial number of leaf nodes, the structure can look similar to an upside-down tree, which
          is where the structure gets part of its name from. The reason why the structure that will be talked about is called a binary
          <em>search</em> tree, not just a binary tree, is because of how it is structured to make searching for elements easier.<br /><br />

          Binary search trees are structured in such a way that the value of the left child of a node is less than the value of the parent node, and
          the value of the right child of a node is greater than the value of the parent node. This makes searching for a value in the tree much
          easier. You can compare the value you are searching for to the value of the current node, and if it is less than the current node, you
          can search the left subtree, otherwise you can search the right subtree. This leads to a time complexity of O(log(n)) for searching for a
          value in a binary search tree, which is much better than the O(n) time complexity of searching for a value in a linked list, given a very
          large data set.<br /><br />

          Binary search trees can be used for a variety of things, and a lot of the time they are used to implement other tree data structures, such
          as AVL trees and red-black trees.
        </h3>
      </div>
    </div>
  )
}