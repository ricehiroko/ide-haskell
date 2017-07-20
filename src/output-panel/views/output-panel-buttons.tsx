import {Button, IProps as IBtnProps} from './output-panel-button'
import * as etch from 'etch'
const $ = etch.dom

export interface IBtnDesc {
  name: string
  count: number
  onClick: () => void
  uriFilter: boolean
  autoScroll: boolean
}

export interface IProps extends JSX.Props {onChange?: (btn: string) => void}

export class OutputPanelButtons implements JSX.ElementClass {
  private buttons: Map<string, IBtnDesc>
  private activeBtn: string
  constructor (public props: IProps) {
    this.buttons = new Map()
    this.activeBtn = 'error';
    ['error', 'warning', 'lint'].forEach((btn) => this.createButton(btn))
    this.createButton('build', {uriFilter: false, autoScroll: true})
    etch.initialize(this)
  }

  public render () {
    return (
      <ide-haskell-panel-buttons>
        {Array.from(this.renderButtons())}
      </ide-haskell-panel-buttons>
    )
  }

  public async update (props?: IProps) {
    if (props) { this.props = props }
    return etch.update(this)
  }

  public createButton (btn: string, {uriFilter = true, autoScroll = false}: UPI.ISeverityTabDefinition = {}) {
    if (atom.config.get('ide-haskell.messageDisplayFrontend') !== 'builtin' &&
          uriFilter === true) { return }
    const button: IBtnDesc = {
      name: btn,
      count: 0,
      onClick: () => this.setActive(btn),
      uriFilter,
      autoScroll,
    }
    this.buttons.set(btn, button)
    this.update()
  }

  public options (btn: string): IBtnDesc | undefined {
    return this.buttons.get(btn)
  }

  public buttonNames () {
    return Array.from(this.buttons.keys())
  }

  public setCount (btn: string, count: number) {
    const p = this.buttons.get(btn)
    if (p) {
      p.count = count
    }
  }

  public getCount (btn: string) {
    const p = this.buttons.get(btn)
    if (p) {
      return p.count
    }
  }

  public setActive (btn: string) {
    if (btn === this.activeBtn) { return }
    if (! this.buttons.has(btn)) {
      // tslint:disable-next-line: no-console
      console.warn(`IDE-Haskell: Unknown button activated: ${btn}`)
      return
    }
    this.activeBtn = btn
    this.update()
    if (this.props.onChange) { this.props.onChange(btn) }
  }

  public async destroy () {
    await etch.destroy(this)
    this.buttons.clear()
  }

  public getActive () {
    return this.activeBtn
  }

  private * renderButtons () {
    for (const [btn, props] of this.buttons.entries()) {
      yield $(Button, {
        active: btn === this.activeBtn,
        name: props.name,
        count: props.count,
        onClick: props.onClick
      })
    }
  }
}
