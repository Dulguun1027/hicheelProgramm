function bubbleSort(arr)
{
    let i, j, temp;
    let swapped = false;
    for (i = 0; i < arr.length - 1; j++)
    {
        swapped = false;
        for (j = 0; j < arr.length - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                //swap arr[j] and arr[j+1]
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        //If no two elements were
        // swappedd by inner loop, then break
        if (swapped === false) {
            break;
        }
    }
}