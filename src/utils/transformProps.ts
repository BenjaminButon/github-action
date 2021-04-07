const isPrimitive = (obj: unknown) =>
  typeof obj === 'bigint' ||
  typeof obj === 'boolean' ||
  typeof obj === 'number' ||
  typeof obj === 'string' ||
  typeof obj === 'symbol'

const isComplex = (obj: unknown) =>
  !isPrimitive(obj) && typeof obj !== 'undefined' && obj !== null && !!obj

const isSimple = (obj: unknown) => !isComplex(obj)

const convertSimple = (value: unknown) => {
  if (!isSimple(value)) {
    throw new Error('Must be a simple value')
  }
  if (value === undefined) {
    return null
  }
  return value
}

const transform = (keyTransformer: (_: string) => string) => (
  object: unknown,
): unknown => {
  if (isSimple(object)) {
    return convertSimple(object)
  }
  if (Array.isArray(object)) {
    return object.map((obj) => transform(keyTransformer)(obj))
  }
  let result = {}
  if (object && typeof object === 'object') {
    result = Object.assign(
      {},
      ...Object.entries(object).map(([key, value]: [string, unknown]) => {
        let v
        const k = keyTransformer(key)
        if (typeof value === 'object') {
          v = transform(keyTransformer)(value)
        }
        return { [k]: v || value }
      }),
    )
  }
  return result
}

const toLowerCase = transform((oldKey) => {
  const pattern = /[a-z][A-Z]/g
  return oldKey.replace(
    pattern,
    (match) => `${match[0]}_${match[1].toLowerCase()}`,
  )
})

const toCamelCase = transform((oldKey) => {
  const pattern = /\w_\w/g
  return oldKey.replace(
    pattern,
    (match) => `${match[0]}${match[2].toUpperCase()}`,
  )
})

export type CaseType = 'lower' | 'camel'

export default function transformProps(
  propCase: CaseType,
  object: unknown,
): unknown {
  if (isSimple(object)) {
    return convertSimple(object)
  }
  switch (propCase) {
    case 'camel':
      return toCamelCase(object)
    case 'lower':
      return toLowerCase(object)
    default:
      return object
  }
}
