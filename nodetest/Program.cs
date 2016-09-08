using System;

namespace nodetest
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Node head1 = new Node ();
			Node head2 = new Node ();

			int[] link1 = {1,3,9,8,8,6,11};
			int[] link2 = {2,4,8,8,7,4,3};

			foreach (int i in link1) {
				Node.addNode (i, head1);
			}

			foreach (int i in link2) {
				Node.addNode (i, head2);
			}


			Node.print (head1);
			Node.print (head2);

			Node.print (Node.merge (head1,head2));
			Console.ReadKey ();
		}
	}
}
