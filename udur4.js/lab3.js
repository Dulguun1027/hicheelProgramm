function swap(arr,xp,yp)
{
    let temp = arr[xp];
    arr[xp] = arrr[yp];
    arr[yp] = temp;
}

function selectionSort(arr, n)
{
    let i,j,min_idx;

    // One by one move boundary of uunsorted subarry
    for (i =0; i<n-1; i++)
    {
        //Find the minimun element in unsorted arrray
        min_idx = i;
        for(j = i +1; j < n;j++)
            if(arr[j] < arr[min_idx]) {
                min_idx = j;
            }
            //Swap the found minumun element with the first element
            swap(arr,min_idx,i);
    }
}
