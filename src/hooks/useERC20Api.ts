
import { useCallback } from "react";
import { BaseErc20 } from '../blockchain/contracts/BaseErc20';

export function useERC20Api(token: BaseErc20) {
  // 获取余额
  const fetchBalance = useCallback(async (account: string) => {
    return await token.balanceOf(account);
  }, [token]);
  // 小数位
  const fetchDecimals = useCallback(async () => {
    return await token.decimals();
  }, [token]);

  const fetchName = useCallback(async () => {
    return await token.name();
  }, [token]);

  return {
    fetchBalance,
    fetchDecimals,
    fetchName
  }
}
