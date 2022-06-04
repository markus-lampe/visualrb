app.visualrb.ui.pages.about = ((page) => {
  const template = `
    <div id="page-about" class="page">
      <div class="page-header">
        <div class="page-icon icon-info"></div>
        <div class="page-title">about this tool</div>
      </div>
    </div>
  `

  page.show = () => {
    const container = document.getElementById('content')
    container.innerHTML = template
  }

  return page
})({})
