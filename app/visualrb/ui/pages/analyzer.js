app.visualrb.ui.pages.analyzer = ((page) => {
  page.show = () => {
    const { skeleton } = app.visualrb.ui.pages
    skeleton.render('compare', 'compare & visualize')
  }

  return page
})({})
