document.addEventListener("DOMContentLoaded", function () {
  let searchButton = document.querySelector("#search-button"),
    searchPopup = document.querySelector("#search-popup"),
    closePopup = document.querySelector("#close-popup"),
    message = document.querySelector("#type-message"),
    sendMessage = document.querySelector("#send-message"),
    chatWindowWrapper = document.querySelector("#chat-window .wrapper"),
    toggleTheme = document.querySelector("#toggle-theme"),
    openChatWindow = document.querySelector("#open-chat-window"),
    closeChatWindow = document.querySelector("#close-chat-window");

  searchButton.addEventListener("click", function () {
    searchPopup.classList.add("show");
  });

  closePopup.addEventListener("click", function () {
    searchPopup.classList.remove("show");
  });

  sendMessage.addEventListener("click", function () {
    if (message.value === "") return;
    let time = new Date().getHours() + ":" + new Date().getMinutes();
    let newMessage = `<div class="message message-opponent">
    <div class="inner">
        <div class="group">
            <div class="dp">
                <img src="public/images/model4.jpg" alt="DP">
            </div>
            <div class="contents">
                <div class="msg">
                    <p>${message.value}</p>
                    <p><ion-icon name="time-outline" class="icon md hydrated" role="img"></ion-icon>${time}</p>
                </div>
                <h5>Patricia Smith</h5>
            </div>
        </div>
        <div class="actions">
            <button class="ellipsis" id="ellipsis">
                <ion-icon name="ellipsis-vertical-outline" role="img" class="md hydrated"></ion-icon>
            </button>
            <ul class="options" id="options">
                <li>Reply</li>
                <li>Forword</li>
                <li>Pin</li>
                <li>Delete</li>
                <li>Copy</li>
                <li>Star</li>
                <li>Select</li>
            </ul>
        </div>
    </div>
</div>`;
    chatWindowWrapper.innerHTML += newMessage;
    message.value = "";
  });

  toggleTheme.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

  if (openChatWindow) {
    openChatWindow.addEventListener("click", function () {
      document.body.classList.add("chat-window-open");
    });
  }

  if(closeChatWindow) {
    closeChatWindow.addEventListener("click", function(){
      document.body.classList.remove("chat-window-open");
    });
  }
});
