import {Point} from 'atom'
import {PluginManager} from '../../plugin-manager'
import {IResultItem, TSeverity} from '../../results-db'
import {IStatus, ISetTypesParams} from '../../output-panel'

export interface IMainInterface {
  /**
  Sets backend status
  @param status {Object}
    status: one of 'progress', 'ready', 'error', 'warning'
    progress: float between 0 and 1, only relevant when status is 'progress'
              if 0 or undefined, progress bar is not shown
  */
  status (status: IStatus): void

  /**
  Add messages to ide-haskell output
  @param messages: {Array<Object>}
    uri: String, File URI message relates to
    position: Point, or Point-like Object, position to which message relates
    message: String or {<text | html>, highlighter?}, message
    severity: String, one of 'error', 'warning', 'lint', 'build',
              or user-defined, see `setMessageTypes`
  @param types: Array of String, containing possible message `severity`. If undefined,
         will be taken from `messages`
  */
  add (messages: IResultItem[], types: TSeverity[]): void

  /**
  Set messages in ide-haskell output. Clears all existing messages with
  `severity` in `types`
  messages: Array of Object
    uri: String, File URI message relates to
    position: Point, or Point-like Object, position to which message relates
    message: String, message
    severity: String, one of 'error', 'warning', 'lint', 'build',
              or user-defined, see `setMessageTypes`
  types: Array of String, containing possible message `severity`. If undefined,
         will be taken from `messages`
  */
  set (messages: IResultItem[], types: TSeverity[]): void

  /**
  Clear all existing messages with `severity` in `types`
  This is shorthand from `setMessages([],types)`
  */
  clear (types: TSeverity[]): void

  /**
  Set possible message `severity` that your package will use.
  types: Object with keys representing possible message `severity` (i.e. tab name)
         and values being Objects with keys
    uriFilter: Bool, should uri filter apply to tab?
    autoScroll: Bool, should tab auto-scroll?

  This allows to define custom output panel tabs.
  */
  setTypes (types: ISetTypesParams): void // TODO: should add disposable
}

export function create (pluginName: string, pluginManager: PluginManager): IMainInterface {
  return {
    status (status) {
      pluginManager.outputPanel.backendStatus(pluginName, status)
    },
    add (messages, types) {
      messages = messages.map((m) => {
        if (m.position) {
          m.position = Point.fromObject(m.position)
        }
        return m
      })
      pluginManager.resultsDB.appendResults(messages, types)
    },
    set (messages, types) {
      messages = messages.map((m) => {
        if (m.position) {
          m.position = Point.fromObject(m.position)
        }
        return m
      })
      pluginManager.resultsDB.setResults(messages, types)
    },
    clear (types) {
      pluginManager.resultsDB.setResults([], types)
    },
    setTypes (types) {
      for (const type of Object.keys(types)) {
        const opts = types[type]
        pluginManager.outputPanel.createTab(type, opts)
      }
    },
  }
}