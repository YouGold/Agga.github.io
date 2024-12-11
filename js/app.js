var message_box = document.getElementById("message_box")
var send_message = document.getElementById("send_message")
var message_section = document.getElementById("message_section")

send_message.onclick = function() 
{
 if (message_box.value.length > 0) 
    {

        Add_New_Message_Box()

    }

}

function Add_New_Message_Box() 
{
    const message_form = document.createElement("figure");
    const message_text = document.createElement("p");
    const message_remove_button = document.createElement("input");
    message_remove_button.setAttribute("type","button");

    message_form.classList.add("message_container");
    message_section.appendChild(message_form);
    message_form.appendChild(message_remove_button);
    message_form.appendChild(message_text);
        
    message_text.textContent = message_box.value
    message_box.value = ""
    message_remove_button.value = "X"

    Remove_Box_Handler(message_remove_button, message_form)
}

function Remove_Box_Handler(message_remove_button, message_form) 
{
    message_remove_button.onclick = function() 
    {
        message_form.remove();
    }
}
