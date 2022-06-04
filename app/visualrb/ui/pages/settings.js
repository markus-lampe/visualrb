app.visualrb.ui.pages.settings = ((page) => {

  page.show = () => {
    const { skeleton } = app.visualrb.ui.pages
    skeleton.render('settings', 'tool settings')
  }

  return page
})({})
