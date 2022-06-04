app.visualrb.ui.pages.importer = ((page) => {
  page.show = () => {
    const { skeleton } = app.visualrb.ui.pages
    skeleton.render('import', 'import visualization')
  }

  return page
})({})
