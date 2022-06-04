app.visualrb.ui.pages.about = ((page) => {
  const template = `
    <div class="page hidden">
      <div class="page-header">
        <div class="page-icon icon-info"></div>
        <div class="page-title">about this tool</div>
      </div>
      <div class="page-content">
        
      </div>
    </div>
  `

  page.show = () => {
    const container = document.getElementById('content')
    for (page of container.getElementsByClassName('page')) {
      page.classList.add('hidden')
    }

    setTimeout(() => container.innerHTML = template, 400)
    setTimeout(() => {
      for (page of container.getElementsByClassName('page')) {
        page.classList.remove('hidden')
      }
    }, 420);
  }

  return page
})({})
