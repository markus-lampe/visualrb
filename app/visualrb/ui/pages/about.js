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
    for (page of container.getElementsByClassName('page')) {
      page.classList.add('hidden')
    }

    setTimeout(() => container.innerHTML = template, 400)
  }

  return page
})({})
