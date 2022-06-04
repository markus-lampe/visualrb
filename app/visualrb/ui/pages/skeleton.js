app.visualrb.ui.pages.skeleton = ((skeleton) => {
  skeleton.render = (icon, title, content) => {
    const output = `
      <div class="page hidden">
        <div class="page-header">
          <div class="page-icon icon-${icon}"></div>
          <div class="page-title">${title}</div>
        </div>
        <div class="page-content">
          ${content}
        </div>
      </div>
    `
    const container = document.getElementById('content')
    container.innerHTML = output
  }

  return skeleton
})({})
