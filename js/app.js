var message_box = document.getElementById("message_box")
var send_message = document.getElementById("send_message")

send_message.onclick = function() 
{
 if (message_box.value.length > 0) 
    {
        window.alert(`You clicked me :< ${String(2)}`) 
    }

    for (let index = 0; index < 10; index++) {
        
    }
}
