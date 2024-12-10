function insertionsort(arr)
{
    let i,key, j;
    for (i=1; i < arr.length; i++)
    {
        key = arr[i];
        j = i - 1;

        /* move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current postion */
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}