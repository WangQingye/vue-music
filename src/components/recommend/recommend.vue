<template>
	<div class="recommend" ref="recommend">
		<scroll ref="scroll" class="recommend-content" :data="discList">
			<div>
				<div v-if="recommends.length" class="slider-wrapper">
					<slider>
						<div v-for="item in recommends">
							<a :href="item.linkUrl">
								<img class="needsclick" @load="loadImage" :src="item.picUrl"/>
							</a>
						</div>
					</slider>
				</div>
				<div class="recommend-list">
					<h1 class="list-title">热门歌单推荐</h1>
					<ul>
						<li @click="selectItem(item)" v-for="item in discList" class="item">
							<div class="icon">
								<img v-lazy="item.imgurl" width="60" height="60">
							</div>
							<div class="text">
								<h2 class="name" v-html="item.author.name"></h2>
								<p class="desc" v-html="item.dissname"></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
            <div class="loading-container" v-show="!discList.length">
                <loading></loading>
            </div>
		</scroll>
        <router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
	import Slider from 'src/base/slider/slider.vue'
	import Scroll from 'src/base/scroll/scroll.vue'
	import Loading from 'src/base/loading/loading.vue'
	import {getRecommend, getDiscList} from 'src/api/recommend'
	import {ERR_OK} from 'src/api/config'
    import {playListMixin} from 'src/common/js/mixin'
    import {mapMutations} from 'vuex'

	export default {
        mixins: [playListMixin],
		data() {
			return {
				recommends: [],
				discList: []
			}
		},
		created() {
			this._getRecommend()
			this._getDiscList()
		},
		methods: {
            // 因为有下部小播放器所以需要调整滚动框底部的位置
            handlePlayList(playList)
            {
                const bottom = playList.length > 0 ? '60px' : 0
                this.$refs.recommend.style.bottom = bottom
                this.$refs.scroll.refresh()
            },
			_getRecommend() {
				getRecommend().then((res) => {
					if (res.code === ERR_OK) {
						this.recommends = res.data.slider
                        this.$refs.scroll.refresh()
					}
				})
			},
			_getDiscList() {
				getDiscList().then((res) => {
					if (res.code === ERR_OK) {
                        this.discList = res.data.hotdiss.list
                        this.$refs.scroll.refresh()
					}
				})
			},
            selectItem(item)
            {
                console.log(item)
                this.$router.push({
                    path: `/recommend/${item.dissid}`
                })
                this.setDisc(item)
            },
			loadImage() {
			  if (!this.checkLoaded)
			  {
				  // this.$refs.scroll.refresh()
				  this.checkLoaded = true
			  }
			},
            ...mapMutations({
                setDisc: 'SET_DISC'
            })
		},
		components: {
			Slider,
			Scroll,
			Loading
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
				.item
					display flex
					box-sizing border-box
					align-items center
					padding 0 20px 20px 20px
					.icon
						flex 0 0 60px
						width 60px
						padding-right 20px
						img
							border-radius 3px
					.text
						display flex
						flex-direction column
						justify-content center
						flex 1
						line-height 20px
						overflow hidden
						font-size $font-size-medium
						.name
							margin-bottom 10px
							color $color-text
						.desc
							color $color-text-d

		.loading-container
			position absolute
			width 100%
			top 50%
			transform translateY(-50%)
</style>