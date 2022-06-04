app.visualrb.ui.pages.overview = ((page) => {
  page.show = () => {
    const { skeleton } = app.visualrb.ui.pages
    skeleton.render('folder', 'heap dump overview')
  }



  return page
})({})
