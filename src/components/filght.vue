<template>
	<div>
		<iframe id="iframe" src="https://app.armzlegends.com/fight" width="100" height="100"></iframe>
		<div id="dom"></div>
	</div>
</template>

<script>
	
	import axios from 'axios';
	
	export default{
		data(){
			return {
				
			}
		},
		mounted() {
			axios.get('/api/fight').then(res=>{
				console.log(res.data)
				document.getElementById("dom").innerHTML = res.data
			})
			
				
		}
	}
</script>

<style>
	#dom{
		width: 100px;
		height: 100px;
		background-color: red;
	}
</style>
