var textInput = document.querySelector(".inputItem");
var addItem = document.querySelector(".addItem");
var incom_list = document.querySelector(".incom_list");



function printValue(Enter){
    if(textInput!==null){
        const li = document.createElement("li");
        li.className = "Item";
        const liTextContent = document.createTextNode(textInput.value);
        li.appendChild(liTextContent);
        document.getElementById("incom_list").appendChild(li);

        const btnDel = document.createElement("button");
        btnDel.className = "delete";
        const delTextContent = document.createTextNode("Delete");
        btnDel.appendChild(delTextContent);
        document.getElementById("incom_list").appendChild(btnDel);
        btnDel.addEventListener("click",function(){
            document.getElementById("incom_list").removeChild(li);
            document.getElementById("incom_list").removeChild(btnDel);
        });
        const btnEdit = document.createElement("button");
        document.getElementById("incom_list").appendChild(btnEdit);
        btnEdit.textContent = "Edite";
        btnEdit.className = "Edite";
        btnEdit.addEventListener("click",addFunctionBtnEdit);
        function addFunctionBtnEdit(){
            const Input = document.createElement("input");
        
            document.getElementById("incom_list").appendChild(Input);
            Input.className = "editInput"
            const ok = document.createElement("button");
            ok.textContent = "OK"
            ok.className = "okBtn"
            document.getElementById("incom_list").appendChild(ok);
            ok.addEventListener("click",()=>{
                if(Input.value !==null){
                    Input.disabled = true;
                    li.textContent = Input.value;
        
                }
            })
            
        }
    }
};
