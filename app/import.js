app.import = (() => {
  const module = {}

  const overlay = document.getElementById('import')
  overlay.dragCount = 0

  let state = 'idle'
  Object.defineProperty(module, 'state', {
    get() {
      return state;
    },
    set(newState) {
      overlay.classList.remove(state)
      state = newState
      overlay.classList.add(state)
    }
  })

  const files = []
  module.addFile = (file) => {
    files.push(file)
  }

  module.loadFiles = async () => {
    let totalSize = 0
    for (const file of files) {
      totalSize += file.size
    }

    const sizeFormatted = app.utils.formatBytes(totalSize)
    console.log(`${files.length} file(s) - ${sizeFormatted}`)

    const feedback = document.getElementById('import-feedback')
    const progress = document.getElementById('import-progress')

    let bytesRead = 0;
    const load = reader => {
      reader.read().then(({done, value}) => {
        if (done) return

        bytesRead += value.length
        feedback.innerText = app.utils.formatBytes(bytesRead,0)

        const a = (bytesRead / totalSize).toFixed(2)
        const b = 1 - a
        progress.setAttribute('stroke-dasharray', `${a} ${b}`)

        setTimeout(() => load(reader), 50)
      })
    }

    for (const file of files) {
      const reader = file.stream().getReader()
      load(reader)
    }

    while (files.length > 0) {
      files.shift()
    }
  }

  document.addEventListener('dragenter', () => {
    overlay.dragCount += 1
    overlay.classList.add('active')
  })
  document.addEventListener('dragleave', () => {
    overlay.dragCount -= 1

    if (overlay.dragCount === 0) {
      overlay.classList.remove('active')
    }
  })
  document.addEventListener('dragover', e => e.preventDefault())
  document.addEventListener('drop', e => {
    e.preventDefault();

    module.state = 'upload'

    if (e.dataTransfer.items) {
      for (const item of e.dataTransfer.items) {
        if (item.kind === 'file') {
          module.addFile(item.getAsFile())
        }
      }
    } else {
      for (const file of e.dataTransfer.files) {
        module.addFile(file)
      }
    }

    module.loadFiles()
  })

  return module
})()
