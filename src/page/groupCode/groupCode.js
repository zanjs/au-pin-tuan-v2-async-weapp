import on from './on'
import data from './data'
import props from './props'
import bind from './bind'

const Component = Object.assign(on, data, props, bind)
Page(Component)