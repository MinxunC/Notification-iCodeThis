/*
Clicking on the bell button 
will minimize the entire notifications container. 
Clicking again will make it appear back.
*/

const notification = document.querySelector(".notifications-wrapper")
//when show is true, container is normal size. Otherwise will minimise
notification.setAttribute("show", true)  
document.querySelector(".bell-btn").addEventListener("click", function () {
    notification.show = !notification.show;
    notification.style.display = notification.show ? null : "none"
})


/* 
Clicking on the “Mark all as read” button 
will remove all the notification items from the notifications list.
*/
document.querySelector(".mark-as-read-btn").addEventListener("click", function () {
    document.querySelector(".notifications-list").innerHTML = null
})


/*
Clicking on the “Decline”/“Accept” button 
will remove the “Decline” and “Accept” buttons 
and will show a paragraph saying: “The notification has been declined” /“The notification has been accepted”.
*/

const declineBtn = document.querySelector(".decline-btn");
const acceptBtn = document.querySelector(".accept-btn");
const notificationTime = document.querySelector(".notification-time")
const newNotification = document.createElement("p");
newNotification.setAttribute("class", "new-notification")

//remove the “Decline” and “Accept” buttons
function remove_buttons() {
    const acceptDeclineButton = document.querySelector(".notification-item-btns");
    acceptDeclineButton.remove();
}


declineBtn.addEventListener("click", function acceptDecline() {
    remove_buttons()
    newNotification.innerHTML = "The notification has been declined"
    notificationTime.parentNode.insertBefore(newNotification, notificationTime.nextSibling)
})

acceptBtn.addEventListener("click", function acceptDecline() {
    remove_buttons()
    newNotification.innerHTML = "The notification has been accepted"
    notificationTime.parentNode.insertBefore(newNotification, notificationTime.nextSibling)
})




    
