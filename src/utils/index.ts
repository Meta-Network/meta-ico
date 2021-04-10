export function getShortedAddress(address: string | null) {
  if (!address) return "...";
  return address.slice(0, 6) + "..." + address.slice(-4);
}

// 处理小数
export const processDecimals = (amount: number, decimals: number) => {
  if (Number.isInteger(amount)) {
    return amount
  } else {
    let decimalsIdx = String(amount).indexOf('.')
    return String(amount).slice(0, 1 + decimalsIdx + decimals)
  }
}