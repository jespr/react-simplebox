import { LTR, ROW } from './constants'

const defaults = {
  dir: LTR,
  debug: false,
  debugType: null,
  isFirst: false,
  flow: ROW,
  gap: null,
  justify: null,
  forceGridSize: null,
  gridSize: null,
}

const cache = new Map()

const getConfig = ({
  dir,
  debug,
  debugType,
  isFirst,
  flow,
  gap,
  justify,
  forceGridSize,
  gridSize,
  isParentScroll,
} = defaults) => {
  const key = `${dir}-${debug}-${debugType}-${isFirst}-${flow}-${gap}-${justify}-${forceGridSize}-${gridSize}-${isParentScroll}`
  if (!cache.has(key)) {
    cache.set(
      key,
      Object.freeze({
        dir,
        debug,
        debugType,
        isFirst,
        flow,
        gap,
        justify,
        forceGridSize,
        gridSize,
        isParentScroll,
      })
    )
  }

  return cache.get(key)
}

export default getConfig
