app.visualrb = ((visualrb) => {
  visualrb.init = () => {
    visualrb.db.init()
    visualrb.ui.init()
  }

  return visualrb
})({})
