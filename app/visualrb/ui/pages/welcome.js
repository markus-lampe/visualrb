app.visualrb.ui.pages.welcome = ((page) => {

  page.show = () => {
    const { skeleton } = app.visualrb.ui.pages
    skeleton.render('training', 'first steps')
  }

  return page
})({})
