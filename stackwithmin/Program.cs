using System;

namespace stackwithmin
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Stack s = new Stack ();
			int[] arr = {5,5,8,9,7,4,4,4,6,2,1,1};
			foreach (int i in arr) {
				s.push (i);
				int min;
				s.getMin (out min);
				Console.WriteLine ("pushed:"+i.ToString()+",min:"+min+",stack:"+s.ToString());
			}

			int pop;
			while (s.pop (out pop)) {
				int min;
				if (s.getMin (out min)) {
					Console.WriteLine ("poped:" + pop.ToString () + ",min:" + min + ",stack:" + s.ToString ());
				} else {
					Console.WriteLine ("poped:" + pop.ToString () + ",min:-,stack:" + s.ToString ());
				}
				
			}
			Console.ReadKey ();

		}
	}
}
