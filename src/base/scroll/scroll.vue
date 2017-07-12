<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script type="text/ecmascript-6">
	import BScroll from 'better-scroll'

	export default {
	  	props: {
	  	  	probeType: {
	  	  	  	type: Number,
				default: 1
			},
			click: {
	  	  	  	type: Boolean,
				default: true
			},
			data: {
	  	  	  	type: Array,
				default: null
			},
			mounted() {
	  	  	  	console.log('mounted')
	  	  	  	setTimeout(() => {
	  	  	  	  	this._initScroll()
				}, 20)
			},
			methods: {
	  	  	  	_initScroll() {
	  	  	  	  	if (!this.$refs.wrapper)
					{
					  	console.log('return')
					  	return
					}
					this.scroll = new BScroll(this.$refs.wrapper, {
					  	probeType: this.probeType,
						click: this.click
					})
					console.log('init')
				},
				enable() {
	  	  	  	    this.scroll && this.scroll.enable()
				},
				disable() {
	  	  	  	    this.scroll && this.scroll.disable()
				},
				refresh() {
					this.scroll && this.scroll.refresh()
				}
			},
			watch: {
	  	  	  	data() {
	  	  	  	  	setTimeout(() => {
	  	  	  	  	  	this.refresh()
					}, 20)
				}
			}
		}
	}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable.styl"
    @import "~common/stylus/mixin.styl"
</style>