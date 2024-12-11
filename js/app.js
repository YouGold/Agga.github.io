var message_box = document.getElementById("message_box")
var send_message = document.getElementById("send_message")
var message_section = document.getElementById("message_section")

send_message.onclick = function() 
{
 if (message_box.value.length > 0) 
    {
        const message_form = document.createElement("figure");
        const message_text = document.createElement("p");

        message_form.classList.add("message_container");
        message_section.appendChild(message_form);
        message_form.appendChild(message_text);

        message_text.textContent = message_box.value

    }

}
