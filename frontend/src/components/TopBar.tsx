import React from 'react'
import './TopBar.css'

export default function TopBar() {
  return (
    <header className="v3s-topbar">
      <div className="v3s-topbar__left">
        <strong>v3s</strong>
        <span className="v3s-topbar__divider" />
        <button className="v3s-btn v3s-btn--ghost">File</button>
        <button className="v3s-btn v3s-btn--ghost">Edit</button>
        <button className="v3s-btn v3s-btn--ghost">View</button>
      </div>
      <div className="v3s-topbar__right">
        <button className="v3s-btn v3s-btn--accent">Save</button>
      </div>
    </header>
  )
}
