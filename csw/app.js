
// javascript program for different tree traversals

/* Class containing left and right child of current
node and key value*/
class Node {
	constructor(val) {
		this.key = val;
		this.left = null;
		this.right = null;
	}
}


	
	/*
	* Given a binary tree, print its nodes according to the "bottom-up" postorder
	* traversal.
	*/

  var preorder =""
  var inorder =""
  var postorder =""
	function printPostorder(node) {
		if (node == null)
			return;

		// first recur on left subtree
		printPostorder(node.left);

		// then recur on right subtree
		printPostorder(node.right);

		// now deal with the node
		// document.write(node.key + " ");
    postorder = postorder + node.key + " "
	}

	/* Given a binary tree, print its nodes in inorder */
	function printInorder(node) {
		if (node == null)
			return;

		/* first recur on left child */
		printInorder(node.left);

		/* then print the data of node */
		// document.write(node.key + " ");
    inorder = inorder + node.key + " "

		/* now recur on right child */
		printInorder(node.right);
	}

	/* Given a binary tree, print its nodes in preorder */
	function printPreorder(node) {
		if (node == null)
			return;

		/* first print data of node */
		// document.write(node.key + " ");
    preorder = preorder + node.key +  " "

		/* then recur on left sutree */
		printPreorder(node.left);

		/* now recur on right subtree */
		printPreorder(node.right);
		
	}



	// Driver method
	
	
		// root = new Node(1);
		// root.left = new Node(2);
		// root.right = new Node(3);
		// root.left.left = new Node(4);
		// root.left.right = new Node(5);

		// document.write("Preorder traversal of binary tree is <br/>");
		// printPreorder(root);

		// document.write("<br/>Inorder traversal of binary tree is <br/>");
		// printInorder(root);

		// document.write("<br/>Postorder traversal of binary tree is <br/>");
		// printPostorder(root);


	// Javascript program to construct binary tree from
	// given array in level order fashion
	
	let root;
	
	
	// Function to insert nodes in level order
	function insertLevelOrder(arr, root, i)
	{
		// Base case for recursion
		if (i < arr.length) {
			let temp = new Node(arr[i]);
			root = temp;

			// insert left child
			root.left = insertLevelOrder(arr, root.left,
											2 * i + 1);

			// insert right child
			root.right = insertLevelOrder(arr, root.right,
											2 * i + 2);
		}
		return root;
	}

	// Function to print tree nodes in InOrder fashion
	function inOrder(root)
	{
		if (root != null) {
			inOrder(root.left);
			document.write(root.data + " ");
			inOrder(root.right);
		}
	}
	
	
	

  function fun(){
    var btin = document.getElementById("btin").value
    var arr = btin.toString().split(" ");
    root = insertLevelOrder(arr, root, 0);
		printPreorder(root);
		printInorder(root);
		printPostorder(root);
    console.log(inorder)
    document.getElementById("inorder").innerHTML = "inorder: " + inorder
    document.getElementById("preorder").innerHTML = "preorder: " + preorder 
    document.getElementById("postorder").innerHTML = "postorder: " + postorder 
  }



// This code is contributed by aashish1995
