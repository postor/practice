using System;

namespace btree2link
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Node head = null;
			int[] arr = {8,4,2,5,12,9,16 };
			foreach (int i in arr) {
				head = Node.treeAddNode (i,head);
			}

			Node.printTree (head);
			Node linkhead = Node.tree2link (head);
			Node.printLink (linkhead);
			Console.ReadKey ();

		}
	}
}
