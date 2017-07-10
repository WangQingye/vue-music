<template>
	<div class="recommend">
		<div class="recommend-content">
			<div class="slider-wrapper">
				<slider>
					<div v-for="item in recommends">
						<a :href="item.linkUrl">
							<img :src="item.picUrl"/>
						</a>
					</div>
				</slider>
			</div>
			<div class="recommend-list">
				<h1 class="list-title">热门歌单推荐</h1>
				<ul>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import {getRecommend} from 'src/api/recommend'
	import {ERR_OK} from 'src/api/config'
	import Slider from 'src/base/slider/slider.vue'

	export default {
		data() {
			return {
				recommends: []
			}
		},
		created() {
			this._getRecommend()
		},
		methods: {
			_getRecommend() {
				getRecommend().then((res) => {
					if (res.code === ERR_OK) {
						this.recommends = res.data.slider
					}
				})
			}
		},
		components: {
			Slider
		}
	}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable.styl"
    @import "~common/stylus/mixin.styl"

	.recommend
		position fixed
		width 100%
		top 88px
		bottom 0
		.recommend-content
			height 100%
			overflow hidden
			.slider-wrapper
				position relative
				width 100%
				overflow hidden
			.recommend-list
				.list-title
					height 65px
					line-height 65px
					text-align: center
					font-size $font-size-medium
					color $color-theme


</style>