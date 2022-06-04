app.visualrb.ui.menu.item = (() => {
  return ({ icon, label, onclick }) => {
    return `
      <div class="menu-item" onclick="${onclick}">
        <div class="menu-icon icon-${icon}"></div>
        <div class="menu-label">${label}</div>
      </div>
    `
  }
})()
