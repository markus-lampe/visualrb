app.visualrb.ui.pages.about = ((page) => {
  const template = `
    <div id="page-about" class="page">
      <div class="page-headline">about</div>
    
    
    </div>
  `

  page.show = () => {
    const container = document.getElementById('content')
    container.innerHTML = template
  }

  return page
})({})
