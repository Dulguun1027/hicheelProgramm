function swap(arr,xp,yp)
{
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSort(arr, n)
{
    let i, j,min_idx;

    //One by one move boundary of unsurted subarrya
    for (i = 0; i < n-1; i++)
    {
        //find the minimun element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
            if(arr[j] <arr [min_idx]){
                min_idx = j;
            }
            //Swap the found minimun element with the first element
            swap(arr,min_idx,i);
    }
}
