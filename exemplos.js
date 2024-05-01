const swap = (arr, pos1, pos2) => {
    
   
    const temp = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = temp;
    };
    
    const shuffle = (arr, numSwaps) => {
        const len = arr.length;
        for (let i = 0; i < numSwaps; i++) {
            const j = Math.floor(Math.random() * len); 
            const k = Math.floor(Math.random() * len); 
            swap(arr, j, k); 
        }
    };
    
    
    const bubble_sort = (arr) => {
        const len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                }
            }
        }
    };
    


    const selection_sort = (arr) => {
        const len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                swap(arr, i, minIndex);
            }
        }
    };

    const quick_sort = (arr, left = 0, right = arr.length - 1) => {
        if (left < right) {
            const pivotIndex = partition(arr, left, right);
            quick_sort(arr, left, pivotIndex - 1);
            quick_sort(arr, pivotIndex + 1, right);
        }
    };
    



    const partition = (arr, left, right) => {
        const pivot = arr[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, right);
        return i + 1;
    };

