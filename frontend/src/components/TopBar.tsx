import React from 'react'
import './TopBar.css'
import { Button } from './ui'
import { exportSceneAsGLTF } from '../lib/exportScene'

export default function TopBar() {
  return (
    <header className="v3s-topbar">
      <div className="v3s-topbar__left">
        <strong>v3s</strong>
        <span className="v3s-topbar__divider" />
        <Button variant="ghost" size="md">File</Button>
        <Button variant="ghost" size="md">Edit</Button>
        <Button variant="ghost" size="md">View</Button>
      </div>
      <div className="v3s-topbar__right">
        <Button variant="ghost" size="md" onClick={() => exportSceneAsGLTF()}>Export</Button>
        <Button variant="accent" size="md">Save</Button>
      </div>
    </header>
  )
}
