
const handleusersubmit =async()=>{
    let speed = Number(document.querySelector(".speed-menu").value);
    let algo = Number(document.querySelector(".algo-menu").value);
    let inputlist = document.querySelectorAll(".inputbox");
    let values = [];
    inputlist.forEach(element => {
        values.push(element.value);

    });
    console.log(values);
    if (!values){
        console.log("user input needed");
    }
    let array = values;
    console.log(array);
    await clearScreen();
    const arrayNode = document.querySelector(".array");
    for (ele in values){
        console.log(values[ele]);
        const val = values[ele];
        const node = document.createElement("div");
        node.className = "cell";
        node.setAttribute("value", val);
        node.style.height = `${3.8 * val}px`;
        arrayNode.appendChild(node);
    }

    const algorithms=new sortAlgorithms(speed);
    console.log(algo);
    if (algo === 0) {
        alert("No Algorithm Selected");
        return;
    }
    
    if(algo===1) await algorithms.BubbleSort();
    if (algo === 2) await algorithms.InsertionSort();
    if (algo === 3) await algorithms.MergeSort();
    if (algo === 4) await algorithms.QuickSort();
    if (algo === 5) await algorithms.SelectionSort();

    
}

renderinput = async()=>{
    await renderBoxes();
    
};

renderBoxes=async()=>{
    await clearboxes();
    await clearScreen ();
    let inputsize = Number(document.querySelector(".size-menu").value);
    console.log(inputsize);
    let boxdiv=document.querySelector(".box-div");
    for (let i = 0; i < inputsize; i++) {
        console.log("creating box");
        
        const box = document.createElement("input");
        box.type = 'number';  
        box.className = "inputbox";
        box.required=true;
        box.style.width= `50px`;
        console.log("appending box");
        boxdiv.appendChild(box);
    }
    if (inputsize !== 0) {
    const breaktag=document.createElement("br");
    boxdiv.appendChild(breaktag);
    let btn=document.createElement("button");
    btn.className="box-btn";
    btn.textContent="Sort";
    boxdiv.appendChild(btn);
    }
    
    document.querySelector(".box-btn").addEventListener("click", handleusersubmit);
}
// const boxinputarray = async ()=>{
//     let list = document.querySelectorAll(".inputbox");
//     let values=[];
//     list.forEach(element => {
//         values.push(element.value);
        
//     });
//     console.log(values);
// }

const clearScreen =async()=>{
    const arrayNode = document.querySelector(".array");
    arrayNode.innerHTML="";
}

const clearboxes= async()=>{
    const inputboxes = document.querySelector(".box-div");
    inputboxes.innerHTML = ""
}

const homered = async () => {

    window.location.href = "index.html";
}


//document.querySelector(".user-sort-btn").addEventListener("click",handleusersubmit);
document.querySelector(".size-menu").addEventListener("change",renderinput);
document.querySelector(".title").addEventListener("click", homered);