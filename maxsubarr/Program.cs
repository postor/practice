using System;

namespace maxsubarr
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			int[] arr = { 1, -2, 3, 10, -4, 7, 2, -5 };

			int max = arr[0],startMax=0,endMax=0;
			for (int i=1; i<arr.Length;i++ ) {
				if (arr[i] > max) {
					startMax = i;
					endMax = i;
					max = arr [i];
				}
			}

			if (max <= 0) {
				Console.WriteLine ("all below 0, max is result:"+max.ToString());
				return;
			}

			int sumMax = max;
			for (int j=0; j<arr.Length;j++ ) {
				for (int k=j+1; k<arr.Length;k++ ) {
					int rtn = getSum(arr,j,k);
					if(rtn>max){
						startMax = j;
						endMax = k;
						sumMax = rtn;
					}
				}
			}

			Console.WriteLine("max is "+sumMax.ToString());
			for(int x=startMax;x<=endMax;x++){
				console.write( arr[x].ToString()+",");
			}
			Console.ReadKey();

		}

		public static int getSum(int[] arr, int startIndex, int endIndex){
			int sum = 0;
			for(int i=startIndex;i<=endIndex;i++){
				sum+=arr[i];
				if(sum<=0){
					//出现负数或0则丢弃
					return 0;
				}
			}
			return sum;
		}
	}
}
