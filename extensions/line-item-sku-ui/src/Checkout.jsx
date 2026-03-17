import '@shopify/ui-extensions/preact'
import { render } from 'preact'

export default async () => {
  render(<LineItemSku />, document.body)
}

function LineItemSku() {
  const line = shopify.target.value
  const sku = getCombinedSku(line)

  return sku ? <s-text type='strong' color='subdued'>SKU: {sku}</s-text> : null
}

function getCombinedSku(line) {
  if (!line) return ''

  const skuAttrKeys = ['SKU', 'Full SKU']
  const fromAttr = line.attributes?.find((a) => skuAttrKeys.includes(a.key))?.value

  return fromAttr ?? line.merchandise?.sku ?? ''
}
