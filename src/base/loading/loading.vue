<template>
	<div class="loading">
		<img src="./loading.gif" width="24" height="24">
		<p class="desc">{{title}}</p>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      	title: {
      	  	type: String,
			default: '正在加载...'
		}
	}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable.styl"

	.loading
		width 100%
		text-align: center
		.desc
			line-height 20px
			font-size $font-size-small
			color $color-text-l
</style>