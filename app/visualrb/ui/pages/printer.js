app.visualrb.ui.pages.printer = ((page) => {
  page.show = () => {
    const { skeleton } = app.visualrb.ui.pages
    skeleton.render('printer', 'printable reports')
  }

  return page
})({})
