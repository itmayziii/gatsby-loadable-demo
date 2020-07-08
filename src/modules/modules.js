import React from 'react'
import { isServer } from '../utilities'
import loadable from '@loadable/component'

const appModules = {
  'module-one': { moduleFileName: 'module-one', shouldLoadJavascript: true },
  'module-two': { moduleFileName: 'module-two', shouldLoadJavascript: false }
}

export function loadModules (modulesToLoad) {
  return modulesToLoad.map((module, index) => {
    const { moduleFileName, shouldLoadJavascript } = getModule(module._type)
    if (isServer) {
      // The server should always render the module so we get the static HTML.
      return renderModule(moduleFileName, module, index)
    }

    const wasUserPreviouslyOnSite = window.history.state
    const htmlEl = document.querySelector(`[data-module-index="${index.toString()}"]`)
    if (htmlEl && !shouldLoadJavascript && !wasUserPreviouslyOnSite) {
      return staticRenderModule(index, htmlEl)
    }

    const fallback = htmlEl ? staticRenderModule(index, htmlEl) : null
    return renderModule(moduleFileName, module, index, fallback)
  })
}

// Render the module with the HTML currently rendered from the static HTML file without importing the javascript.
function staticRenderModule (index, htmlEl) {
  return (
    <section
      key={index.toString()}
      data-module-index={index.toString()}
      dangerouslySetInnerHTML={{ __html: htmlEl.innerHTML }}
    />
  )
}

// Render the module with all the javascript.
function renderModule (moduleFileName, module, index, fallback = null) {
  console.log('RENDING MODULE', moduleFileName)
  const ModuleComponent = loadable(() => import(`../modules/${moduleFileName}`))
  return (
    <ModuleComponent
      moduleIndex={index}
      fallback={fallback}
      module={module}
    />
  )
}

function getModule (moduleName) {
  if (!appModules[moduleName]) {
    throw new Error(`Could not find module: ${moduleName}`)
  }

  return appModules[moduleName]
}
