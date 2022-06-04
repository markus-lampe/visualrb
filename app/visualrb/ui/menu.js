app.visualrb.ui.menu = ((menu) => {
  const entries = [
    {
      icon: 'folder',
      label: 'heap dumps',
      onclick: "--salert('folder')"
    },
    {
      icon: 'import',
      label: 'import',
      onclick: "--salert('folder')"
    },
    {
      icon: 'export',
      label: 'export',
      onclick: "--salert('folder')"
    },
    {
      icon: 'printer',
      label: 'print',
      onclick: "--salert('setting')"
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
