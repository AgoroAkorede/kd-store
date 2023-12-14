import type { NumberLiteralType } from 'typescript'

function ConvertToDollars(price: NumberLiteralType) {
  return `$${price}:00`
}

export default ConvertToDollars
