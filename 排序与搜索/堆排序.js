// 堆是全完二叉树，是顺序表结构存储
// 1，过程，初始建立堆，
// 2，把堆顶元素和最后一个元素交换（此时最后一个元素已经有序），重建剩余元素
// 3，重复步骤2

function swap(A, i, j) {
    [A[i],A[j]] = [A[j],A[i]]
}

//调整i
function shiftDown(A, i, len) {
    let temp = A[i]; // 当前父节点
// j<length 的目的是对结点 i 以下的结点全部做顺序调整
    for(let j = 2*i+1; j<len; j = 2*j+1) {
        // temp = A[i];  // 将 A[i] 取出，整个过程相当于找到 A[i] 应处于的位置
        if(j+1 < len && A[j] < A[j+1]) {
            j++;   // 找到两个孩子中较大的一个，再与父节点比较
        }
        if(temp < A[j]) {
            swap(A, i, j) // 如果父节点小于子节点:交换；否则跳出
            i = j;  // 交换后，temp 的下标变为 j
        } else {
            break;
        }
    }
}

// 堆排序
function heapSort(arr) {
    // 初始化大顶堆，从第一个非叶子结点开始
    for(let i = Math.floor(arr.length/2-1); i>=0; i--) {
        shiftDown(arr, i, arr.length);
    }
    // 排序，每一次for循环找出一个当前最大值，数组长度减一
    for(let i = Math.floor(arr.length-1); i>0; i--) {
        swap(A, 0, i); // 根节点与最后一个节点交换
        shiftDown(arr, 0, i); // 从根节点开始调整，并且最后一个结点已经为当
        // 前最大值，不需要再参与比较，所以第三个参数
        // 为 i，即比较到最后一个结点前一个即可
    }
}

let Arr = [1,4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
heapSort(Arr);
console.log(Arr);
