using System;

namespace stackwithmin
{
	public class Stack
	{
		private Node head = new Node(0,null);
		private System.Collections.Generic.Stack<int> minstack  = new System.Collections.Generic.Stack<int>();

		public Stack ()
		{
			
		}

		public void push(int v){
			head.next = new Node (v,head.next);
			if (minstack.Count == 0) {
				minstack.Push (v);
			} else {
				int top = minstack.Peek ();
				if (top >= v) {
					minstack.Push (v);
				}
			}
		}

		public bool pop(out int v){
			if (head.next == null) {
				v = 0;
				return false;
			}
			Node tmp = head.next;
			head.next = tmp.next;

			int top = minstack.Peek ();
			if (tmp.value == top) {
				minstack.Pop ();
			}
			v = tmp.value;
			return true;
		}

		public bool getMin(out int v){
			if (head.next == null) {
				v = 0;
				return false;
			}
			v = minstack.Peek ();
			return true;
		}

		override public string  ToString(){
			string rtn = "[";
			Node current = head.next;
			while (current!=null) {
				rtn += current.value.ToString() + ",";
				current = current.next;
			}
			rtn+="]";
			return rtn;
		}


	}
}

