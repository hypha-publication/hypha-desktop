import { app, Menu } from 'electron'

import { PLATFORM } from '../common/enum'

export default () => {
  const items = [
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectall' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' }
      ]
    },
    {
      role: 'window',
      submenu: []
    },
    {
      role: 'help',
      submenu: []
    }
  ]

  if (process.platform === PLATFORM.MAC) {
    items.unshift({
      label: app.getName(),
      submenu: []
    })
  }

  const menu = Menu.buildFromTemplate(items)
  Menu.setApplicationMenu(menu)

  console.log('[MENU] started')
}
