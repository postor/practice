using System;

namespace nodetest
{
	/// <summary>
	/// Node struct for node test
	/// </summary>
	public class Node
	{
		private int data = 0;
		private Node next = null;

		/// <summary>
		/// Initializes a new instance of the <see cref="nodetest.Node"/> class.
		/// </summary>
		public Node ()
		{
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="nodetest.Node"/> class.
		/// </summary>
		/// <param name="d">data</param>
		/// <param name="n">next</param>
		public Node (int d, Node n)
		{
			this.data = d;
			this.next = n;
		}

		/// <summary>
		/// Adds the node to a list, sorted.
		/// </summary>
		/// <param name="d">data</param>
		/// <param name="head">Head</param>
		public static void addNode (int d, Node head)
		{
			if (head == null) {
				throw new System.ArgumentException ("Parameter cannot be null", "head");
			}
			Node current = head;

			while (true) {
				Node nextNode = current.next;
				if (nextNode == null) {
					current.next = new Node (d, null);
					break;
				} else {
					if (d < nextNode.data) {
						current.next = new Node (d, null);
						current.next.next = nextNode;
						break;
					} else {
						current = nextNode;
						continue;
					}
				}
			}
		}

		/// <summary>
		/// Print the specified link list.
		/// </summary>
		/// <param name="head">Head.</param>
		public static void print (Node head)
		{
			if (head == null) {
				throw new System.ArgumentException ("Parameter cannot be null", "head");
			}

			Node current = head;
			while (current.next != null) {
				current = current.next;
				Console.Write (current.data.ToString () + ',');
			}
			Console.WriteLine ();
		}

		/// <summary>
		/// Merge two sorted lists head1 and head2.
		/// </summary>
		/// <param name="head1">Head1.</param>
		/// <param name="head2">Head2.</param>
		public static Node merge (Node head1, Node head2)
		{
			if (head1 == null) {
				throw new System.ArgumentException ("Parameter cannot be null", "head1");
			}
			if (head2 == null) {
				throw new System.ArgumentException ("Parameter cannot be null", "head2");
			}

			Node head = new Node ();
			Node current = head;
			Node cur1 = head1.next;
			Node cur2 = head2.next;

			while (true) {
				if (cur1 != null && cur2 != null) {
					if (cur1.data < cur2.data) {
						current.next = new Node (cur1.data, null);
						current = current.next;
						cur1 = cur1.next;
					} else {
						current.next = new Node (cur2.data, null);
						current = current.next;
						cur2 = cur2.next;
					}
				} else if (cur1 != null) {
					current.next = new Node (cur1.data, null);
					current = current.next;
					cur1 = cur1.next;
				} else if (cur2 != null) {
					current.next = new Node (cur2.data, null);
					current = current.next;
					cur2 = cur2.next;
				} else {
					break;
				}
			}
			return head;
		}
	}
}

