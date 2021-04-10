import { ethers } from 'ethers';
import { useMemo } from 'react';
import { BaseErc20Factory } from '../blockchain/contracts/BaseErc20Factory';
import { currentProvider } from '../constant/providers';

export function useERC20(tokenAddress: string) {
  const token = useMemo(() => {
    return BaseErc20Factory.connect(tokenAddress, currentProvider as ethers.providers.Provider);
  }, [tokenAddress]);

  return token;
}
