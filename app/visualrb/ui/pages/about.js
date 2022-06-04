app.visualrb.ui.pages.about = ((page) => {


  page.show = () => {
    const { skeleton } = app.visualrb.ui.pages
    skeleton.render('info', 'about this tool')
  }

  return page
})({})
