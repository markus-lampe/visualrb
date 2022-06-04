app.visualrb.ui.menu = ((menu) => {
  const entries = [
    {
      icon: 'folder',
      label: 'heap dump overview',
      onclick: 'app.visualrb.ui.pages.overview.show()'
    },
    {
      icon: 'compare',
      label: 'compare & visualize',
      onclick: 'app.visualrb.ui.pages.analyzer.show()'
    },
    {
      icon: 'export',
      label: 'export visualizations',
      onclick: 'app.visualrb.ui.pages.exporter.show()'
    },
    {
      icon: 'import',
      label: 'import visualizations',
      onclick: 'app.visualrb.ui.pages.importer.show()'
    },
    {
      icon: 'printer',
      label: 'printable reports',
      onclick: 'app.visualrb.ui.pages.printer.show()'
    },
    {
      icon: 'settings',
      label: 'tool settings',
      onclick: 'app.visualrb.ui.pages.settings.show()'
    },
    {
      icon: 'info',
      label: 'about this tool',
      onclick: 'app.visualrb.ui.pages.about.show()'
    },
  ]

  menu.init = () => {
    const container = document.getElementById('menu')
    container.innerHTML =
      entries.map(entry => menu.item(entry)).join('\n')
  }

  return menu
})({})
