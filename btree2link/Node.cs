using System;
namespace btree2link
{
	public class Node
	{
		public int value;
		public Node left;
		public Node right;

		public Node(int v, Node l, Node r)
		{
			this.value = v;
			this.left = l;
			this.right = r;
		}

		public static Node treeAddNode(int val,Node head){
			if(head == null){
				head = new Node(val,null,null);
				return head;
			}

			Node current = head;
			while(true){
				if(val>current.value){
					if(current.right==null){
						current.right = new Node(val,null,null);
						break;
					}else{
						current = current.right;
						continue;
					}
				}else{
					if(current.left==null){
						current.left = new Node(val,null,null);
						break;
					}else{
						current = current.left;
						continue;
					}
				}
			}
			return head;
		}

		public static void printTree(Node head){
			
			printTree (head, "");
		}

		public static void printTree(Node n, string pre){
			if (n == null)
				return;
			pre = pre + "    ";
			Console.WriteLine (pre+n.value);
			printTree (n.left,pre);
			printTree (n.right,pre);
		}

		public static void printLink(Node head){
			if (head == null) {
				throw new System.ArgumentException ("Parameter cannot be null", "head");
			}
			Console.Write("asc:");
			Node current = head;
			while (true) {
				Console.Write (current.value.ToString()+",");
				if (current.right == null)
					break;
				current = current.right;
			}
			Console.WriteLine("");
			Console.Write("desc:");

			while (true) {
				Console.Write (current.value.ToString()+",");
				if (current.left == null)
					break;
				current = current.left;
			}
		}


		public static Node tree2link(Node head){
			Node begin = null;
			Node end = null;
			treeNode2link (head,out begin,out end);
			return begin;
		}

		public static void treeNode2link(Node n,out Node begin, out Node end){
			if (n == null) {
				throw new System.ArgumentException ("Parameter cannot be null", "head");
			}

			begin = end = n;

			Node left = n.left;
			Node right = n.right;

			Node tmpBegin = null;
			Node tmpEnd = null;

			if (left != null) {
				treeNode2link (left,out tmpBegin,out tmpEnd);
				begin = tmpBegin;
				tmpEnd.right = n;
				n.left = tmpEnd;
			}

			if (right != null) {
				treeNode2link (right,out tmpBegin,out tmpEnd);
				end = tmpEnd;
				tmpBegin.left = n;
				n.right = tmpBegin;
			}

		}
	}
}

