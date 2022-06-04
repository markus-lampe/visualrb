app.visualrb.ui.menu = ((menu) => {
  const entries = [
    {
      icon: 'folder',
      label: 'uploads',
      onclick: "alert('folder')"
    },
    {
      icon: 'settings',
      label: 'settings',
      onclick: "alert('setting')"
    },
    {
      icon: 'info',
      label: 'about',
      onclick: "alert('about')"
    },
  ]

  menu.init = () => {
    const container = document.getElementById('menu')
    container.innerHTML =
      entries.map(entry => menu.item(entry).toString()).join('\n')
  }

  return menu
})({})
