app.visualrb.ui.menu = ((menu) => {
  const entries = [
    {
      icon: 'folder',
      label: 'heap dumps',
      onclick: 'app.visualrb.ui.pages.overview.show()'
    },
    {
      icon: 'compare',
      label: 'compare & analyze',
      onclick: 'app.visualrb.ui.pages.analyzer.show()'
    },
    {
      icon: 'export',
      label: 'export',
      onclick: 'app.visualrb.ui.pages.exporter.show()'
    },
    {
      icon: 'import',
      label: 'import',
      onclick: 'app.visualrb.ui.pages.importer.show()'
    },
    {
      icon: 'printer',
      label: 'print',
      onclick: 'app.visualrb.ui.pages.printer.show()'
    },
    {
      icon: 'settings',
      label: 'settings',
      onclick: 'app.visualrb.ui.pages.settings.show()'
    },
    {
      icon: 'info',
      label: 'about',
      onclick: 'app.visualrb.ui.pages.about.show()'
    },
  ]

  menu.init = () => {
    const container = document.getElementById('menu')
    container.innerHTML =
      entries.map(entry => menu.item(entry).toString()).join('\n')
  }

  return menu
})({})
