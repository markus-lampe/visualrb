app.visualrb.ui.menu = ((menu) => {
  const entries = [
    {
      icon: 'folder',
      label: 'heap dumps',
      onclick: 'app.visualrb.ui.show_heap_dumps()'
    },
    {
      icon: 'compare',
      label: 'compare & analyze',
      onclick: 'app.visualrb.ui.show_analyzer()'
    },
    {
      icon: 'export',
      label: 'export',
      onclick: 'app.visualrb.ui.show_export_dialog()'
    },
    {
      icon: 'import',
      label: 'import',
      onclick: 'app.visualrb.ui.show_import_dialog()'
    },
    {
      icon: 'printer',
      label: 'print',
      onclick: 'app.visualrb.ui.show_print_dialog()'
    },
    {
      icon: 'settings',
      label: 'settings',
      onclick: 'app.visualrb.ui.show_settings()'
    },
    {
      icon: 'info',
      label: 'about',
      onclick: 'app.visualrb.ui.show_info()'
    },
  ]

  menu.init = () => {
    const container = document.getElementById('menu')
    container.innerHTML =
      entries.map(entry => menu.item(entry).toString()).join('\n')
  }

  return menu
})({})
