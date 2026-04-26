import React from 'react'
import { Panel } from './components'
import SceneCanvas from './scene/SceneCanvas'
import { ThemeProvider } from './theme/ThemeProvider'
import { TopBar, ToolShelf, PropertiesPanel } from './components'
import { initSceneSync } from './lib/sceneSync'

const mockPresences = [
  { userId: 'u1', x: 30, y: 40, color: 'var(--presence-blue)', initials: 'AL' },
  { userId: 'u2', x: 70, y: 60, color: 'var(--presence-orange)', initials: 'PM' }
]

export default function AppExample() {
  React.useEffect(() => {
    void initSceneSync()
  }, [])

  return (
    <ThemeProvider>
      <div className="app-shell" style={{ flexDirection: 'column' }}>
        {/** Top bar removed per request to clear the viewport header */}
        <div style={{ display: 'flex', flex: 1 }}>
          <ToolShelf />
          <main style={{ flex: 1, position: 'relative', background: 'linear-gradient(180deg, #fff, #fbfaf9)' }}>
            <SceneCanvas />
          </main>
          <PropertiesPanel />
        </div>
      </div>
    </ThemeProvider>
  )
}
