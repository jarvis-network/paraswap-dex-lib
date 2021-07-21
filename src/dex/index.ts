import { Address } from '../types';
import { DexMap } from './idex';
import { UniswapV2 } from './uniswap-v2';
import { ZeroX } from './zerox';

export function getDexMap(augustusAddress: Address): DexMap {
  return {
    uniswapv2: new UniswapV2(augustusAddress),
    zerox: new ZeroX(augustusAddress),
  };
}
