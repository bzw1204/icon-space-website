<template>
	<!--  -->
	<div class="w-full h-[calc(100vh_-_60px)]">
		<!-- 轮播图 -->
		<a-carousel class="w-full h-480px" :auto-play="false" indicator-type="dot" show-arrow="hover">
			<a-carousel-item>
				<div class="banner-1">
					<img src="@/assets/images/main_banner_2.png" :style="{ width: '100%', height: '100%' }" />
					<div class="text-40px mb-12px font-600">IconSpace资源站</div>
					<p class="text-16px font-300 w-432px mb-40px">这里有你需要的图标，也有属于你的风格，让工作变得更轻松</p>
				</div>
			</a-carousel-item>
			<a-carousel-item>
				<img
					src="https://lf3-static.bytednsdoc.com/obj/eden-cn/bqaeh7vhobd/illu_homebanner.png"
					:style="{ width: '100%' }"
				/>
			</a-carousel-item>
		</a-carousel>
		<!-- 使用 -->
		<div class="styles_albumWrap__2edNP styles_sectionWrap__3uwch styles_section-layout__3nt1b">
			<h3 class="styles_sectionTitle__2ZpZe">丰富多彩的资源库免费使用</h3>
			<p class="styles_sectionDesc__3_p08">2600+基础图标，29种图标分类，提供更多的选择</p>
			<div style="width: 1200px; margin: 0px auto" class="card-box flex justify-between">
				<div class="styles_albumOfficial__FhEES">
					<a href="/official">
						<img
							alt=""
							src="https://lf3-static.bytednsdoc.com/obj/eden-cn/bqaeh7vhobd/banner_zh-1.png"
							width="792px"
							height="360px"
						/>
						<div class="styles_albumShadowTitle__3BFS0">
							<div class="flex justify-between items-center gap-x-10px">
								<img alt="" src="//s3.bytecdn.cn/cdn/expire-1-M/by-design/iconpark/official_lib.svg" />
								<strong class="text-[#333]">官方图标库</strong>
							</div>
							<div class="styles_albumShadowTitleRight__36JH1 text-[#22adfc]">2600+</div>
						</div>
					</a>
				</div>
				<a
					tabindex="0"
					href="https://bytedance.feishu.cn/docs/doccnU0WZ2HEsYBINa9TfgDtAzP"
					target="_blank"
					class="byted-link byted-link-size-md"
				>
					<div class="styles_albumKeyline__1OxUR">
						<img
							alt=""
							src="//s3.bytecdn.cn/cdn/expire-1-M/by-design/iconpark/keyline.png"
							width="384px"
							height="360px"
						/>
						<div class="styles_albumShadowTitle__3BFS0">
							<div class="flex justify-between items-center gap-x-10px">
								<img alt="" src="//s3.bytecdn.cn/cdn/expire-1-M/by-design/iconpark/guide.svg" />
								<strong>官方图标库绘制规范 </strong>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
	.banner-1 {
		display: flex;
		position: relative;
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
		padding: 0 72px;
		height: 480px;
		width: 1366px;
		margin: 0 auto;
		img {
			position: absolute;
			height: 483px;
			width: 1367px;
			right: 0;
			top: 0;
			object-fit: cover;
		}
	}
	.styles_albumWrap__2edNP {
		width: 1366px;
		margin: 0 auto;
		padding: 80px 0;
		.styles_sectionTitle__2ZpZe {
			font-size: 32px;
			line-height: 44px;
			margin-bottom: 16px;
			text-align: center;
		}
		.styles_sectionDesc__3_p08 {
			font-size: 16px;
			line-height: 26px;
			color: #666;
			margin-bottom: 56px;
			font-weight: lighter;
			text-align: center;
		}
		.card-box {
			.styles_albumOfficial__FhEES {
				width: 792px;
				height: 360px;
				box-shadow: 0 6px 24px rgba(53, 66, 85, 0.08);
				border-radius: 16px;
				margin-right: 24px;
				position: relative;
				.styles_albumShadowTitle__3BFS0 {
					width: 100%;
					height: 64px;
					line-height: 64px;
					background: #fff;
					padding: 0 24px;
					-moz-border-radius-bottomleft: 16px;
					-moz-border-radius-bottomright: 16px;
					border-bottom-left-radius: 16px;
					border-bottom-right-radius: 16px;
					position: absolute;
					bottom: 0;
					display: flex;
					justify-content: space-between;
				}
			}
			.styles_albumKeyline__1OxUR {
				width: 384px;
				height: 360px;
				box-shadow: 0 6px 24px rgba(53, 66, 85, 0.08);
				border-radius: 16px;
				position: relative;

				.styles_albumShadowTitle__3BFS0 {
					width: 100%;
					height: 64px;
					line-height: 64px;
					background: #fff;
					padding: 0 24px;
					-moz-border-radius-bottomleft: 16px;
					-moz-border-radius-bottomright: 16px;
					border-bottom-left-radius: 16px;
					border-bottom-right-radius: 16px;
					position: absolute;
					bottom: 0;
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>
