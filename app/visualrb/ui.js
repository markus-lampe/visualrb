app.visualrb.ui = ((ui) => {
  ui.init = () => {
    ui.menu.init()

    const { db } = app.visualrb
    // if (db.heap_dump.all().empty()) {
    //   ui.show_welcome()
    // } else {
    //   ui.show_heap_dumps()
    // }
  }

  let page = 'welcome'
  Object.defineProperty(ui, 'page', {
    get: () => {
      return page
    },
    set: (value) => {

    }
  })

  return ui
})({})
