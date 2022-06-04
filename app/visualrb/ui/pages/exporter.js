app.visualrb.ui.pages.exporter = ((page) => {
  page.show = () => {
    const { skeleton } = app.visualrb.ui.pages
    skeleton.render('export', 'export visualizations')
  }


  return page
})({})
