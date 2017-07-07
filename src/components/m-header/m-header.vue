<template>
	<div class="m-header">
		<div class="icon"></div>
		<h1 class="text">Chicken Music</h1>
	</div>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable.styl"
	@import "~common/stylus/mixin.styl"

	.m-header
		position relative
		text-align center
		height 44px
		color $color-theme
		font-size 0
		.icon
			display inline-block
			vertical-align top
			margin-top 6px
			height 32px
			margin-right 9px
			bg-image('logo')
			width 30px
			background-size 30px 32px
		.text
			display inline-block
			vertical-align top
			line-height 44px
			font-size $font-size-large

</style>
