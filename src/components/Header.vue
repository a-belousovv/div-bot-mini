<script setup>
import Text from './Text.vue'
import Button from './Button.vue'
import Navigation from './Navigation.vue'
import AnchorButton from './AnchorButton.vue'
</script>

<template>
	<div class="header">
		<navigation />
		<div class="block-container">
			<div class="header__box">
				<div class="header__content">
					<div class="header__banner">
						<div class="header__banner_images">
							<div class="header__images_image">
								<img src="/icons/kirill_okotchik_icon.svg" alt="" />
							</div>
							<div class="header__images_image">
								<img src="/icons/elena_okotchik_icon.svg" alt="" />
							</div>
						</div>
						<Text
							textColor="white"
							size="14"
							:isBold="true"
							text="Бесплатный трехдневный интенсив от действующих программистов" />
					</div>
					<Text size="80" textColor="white" text="твой старт в IT" />
					<Text
						size="18"
						textColor="white"
						text="за 3 дня создашь свой первый уникальный проект в роли Backend-разработчика и узнаешь как с этими знаниями устроится в IT-компанию с зарплатой от 700$ с полного нуля" />
					<anchor-button
						path="#tariffs"
						textColor="black"
						text="Стать участником"
						backgroundColor="yellow" />
				</div>
				<div class="header__img">
					<img src="/welcome/header_illustration.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '/src/assets/services/main.scss';
.header {
	width: 100%;
	height: auto;
	padding: 0px 0px 110px 0px;
	background: url('/welcome/header-background.png') left/cover no-repeat;
	&__box {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		position: relative;
		@media (max-width: $media-l) {
			flex-direction: column;
			gap: 30px;
		}
		.header__content {
			width: 55%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			@media (max-width: $media-l) {
				width: 100%;
				align-items: center;
			}
			.size-80 {
				margin-top: 36px;
			}
			.size-18 {
				margin: 24px 0px 40px 0px;
				max-width: 500px;
			}
			.header__banner {
				background-color: $accent_1;
				display: flex;
				align-items: center;
				gap: 14px;
				border-radius: 40px;
				padding: 0px 14px 0px 0px;
				.size-14 {
					max-width: 198px;
				}
				&_images {
					display: flex;
					align-items: center;
					.header__images_image {
						position: relative;
						border: 2px solid $white;
						border-radius: 50%;
						padding: 5px;
						img {
							width: 100%;
							height: 100%;
							display: block;
						}
					}
				}
			}
		}
		.header__img {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: -10%;
			@media (max-width: $media-l) {
				width: 100%;
				position: relative;
				top: 0;
				right: 0;
				transform: translateX(0);
			}
			img {
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
}
</style>
