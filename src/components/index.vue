<template>
</template>

<script>
	
	const config = {
		privateKey:'386a27bb88fe7bd07e40e1b65b01d7360f54bfb94afcaa0b6d0f448787cbfec0',
		slide:1, //博饼滑点
		gasLimit:210000 //gas费用
	}
	
	const pancakeAddress={
		WBNB:'0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
	}
	
	import { ethers,utils } from 'ethers';

	const provider = ethers.getDefaultProvider(
	  "https://bsc-dataseed1.binance.org:443"
	);
	const wallet = new ethers.Wallet(config.privateKey, provider);
	
	
	const router = new ethers.Contract(
	  "0x10ED43C718714eb63d5aA57B78B54704E256024E",
	  [
	    "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
	    "function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)",
	    "function swapExactTokensForETHSupportingFeeOnTransferTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)",
	    "function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external returns (uint[] memory amounts)",
	    "function swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external returns (uint[] memory amounts)",
	  ],
	  wallet
	);


	export default{
		data(){
			return {
				
			}
		},
		mounted() {
			//this.bnb2Token(  utils.parseUnits( (0.01 * 1000000000).toString(),'gwei')  ,'0x55d398326f99059ff775485246999027b3197955')
		},
		methods:{
			//将 BNB 换成其他 TOKEN
			async bnb2Token(bnbValue, tokenAddress) {
			  const amountIn = bnbValue;
			  // 估算能获得多少个token
			  const amounts = await router.getAmountsOut(amountIn, [
			    pancakeAddress.WBNB,
			    tokenAddress,
			  ]);
			  // 滑点
			  const amountOutMin = amounts[1].sub(amounts[1].div(config.slide));
			  // 发起交易
			  const path = [pancakeAddress.WBNB, tokenAddress];
			  const gasPrice = await provider.getGasPrice();
			  const tx = await router.swapExactETHForTokens(
			    amountOutMin,
			    path,
			    wallet.address,
			    Date.now() + 10 * 60_000,
			    {
			      gasPrice,
			      gasLimit: config.gasLimit,
			      value: amountIn,
			    }
			  );
			  console.log(`交易已发起, https://bscscan.com/tx/${tx.hash}`);
			  try {
			    await tx.wait();
			    console.log("交易成功");
			  } catch (err) {
			    console.log("交易失败");
			    throw err;
			  }
			}

			
		}
	}
</script>

<style>
</style>
