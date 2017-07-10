<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<slot></slot>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'
  	export default {
		props: {
		  	loop: {
				type: Boolean,
				default: true
		  	},
			autoPlay: {
		  	  	type: Boolean,
				default: true
			},
			interval: {
		  	  	type: Number,
				default: 4000
			}
		},
		mounted() {
		  	setTimeout(()=>{

			}, 20)
		},
		methods: {
		  	_setSliderWidth() {
				this.childern = this.$ref.sliderGroup.childern
				let width = 0
				let sliderWidth = this.$ref.slier.clientWidth
				for (let i = 0; i < this.childern; i++)
				{
					let child = this.childern[i]
				}
			},
			_initSlider() {

			},
		}
  	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable.styl"
    @import "~common/stylus/mixin.styl"

	.slider
		min-height 1px
		.slider-group
			position relative
			overflow hidden
			white-space nowrap
</style>