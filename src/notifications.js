const notificationWrapper = document.querySelector("[data-notification-wrapper]");
const notificationLink = document.querySelector("[data-notification-link]");
const sidebarNav = document.querySelector("[data-sidebar-nav]");

document.addEventListener("click",(event) => {
  if(event.target.classList.contains("notifications-link") || event.target.closest(".notifications-link")) {
    sidebarNav.classList.remove("overflow-hidden");
    notificationWrapper.classList.add("show");
    return;
  }

  sidebarNav.classList.add("overlow-hidden");  
  notificationWrapper.classList.remove("show");
});