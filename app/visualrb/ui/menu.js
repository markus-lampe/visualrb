app.visualrb.ui.menu = ((menu) => {
  const entries = [
    {
      icon: 'folder',
      label: 'uploads',
      onclick: "--salert('folder')"
    },
    {
      icon: 'settings',
      label: 'settings',
      onclick: "--salert('setting')"
    },
    {
      icon: 'info',
      label: 'about',
      onclick: "--salert('about')"
    },
  ]

  menu.init = () => {
    const container = document.getElementById('menu')
    container.innerHTML =
      entries.map(entry => menu.item(entry).toString()).join('\n')
  }

  return menu
})({})
