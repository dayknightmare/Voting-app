<template>
	<div id="app" class="app font__nunito">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "App",
		components: {},
	};
</script>

<style>
	#app {
		min-height: 100vh;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		background-color: #fbfffe;
	}

	main {
		height: 100%;
	}

	.hv-100 {
		height: 100vh;
	}
</style>


<style lang="scss">
	@import url("https://vupy.github.io/Soft-UI-Interface/SoftUi/css/icons.css");
	@import url("https://vupy.github.io/Soft-UI-Interface/SoftUi/css/main.css");

</style>