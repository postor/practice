﻿using System;

namespace stackwithmin
{
	public class Node
	{
		public int value;
		public Node next;

		public Node (int v, Node n)
		{
			this.value = v;
			this.next = n;
		}
	}
}

