//function to handle notifications
function notificationsHandler() {
  const notificationWrapper = document.querySelector("[data-notification-wrapper]");
  const sidebarNav = document.querySelector("[data-sidebar-nav]");

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("notifications-link") || event.target.closest(".notifications-link")) {
      sidebarNav.classList.remove("overflow-hidden");
      notificationWrapper.classList.add("show");
      return;
    }

    sidebarNav.classList.add("overlow-hidden");
    notificationWrapper.classList.remove("show");
  });
}

notificationsHandler();

//function to handle messages tabs
function tabsHandler() {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab, index, tabs) => {
    tab.addEventListener("click", () => {
      Array.from(tabs).filter(inactivetab => inactivetab !== tab).
        forEach(incativetab => incativetab.classList.remove("show"));

      tab.classList.add("show");
    });
  })
}

tabsHandler();