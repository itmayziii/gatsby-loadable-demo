import { loadModules } from '../modules/modules'

export default function ModulePageTemplate ({ pageContext }) {
  return loadModules(pageContext.modules)
}

