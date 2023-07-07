function todolist(){
    
    let valueinput = document.getElementById("input").value;
    const node = document.createElement("li");
    node.setAttribute('id','checkbox1');
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute('id','checkbox1');
    node.appendChild(checkbox);
    // Create a text node:
    const span = document.createElement("span");
    const textnode = document.createTextNode(valueinput);
    span.appendChild(textnode);
    // Append the text node to the "li" node:
    node.appendChild(span); 
    // Append the "li" node to the list:
    document.getElementById("todo").appendChild(node);
    
}

