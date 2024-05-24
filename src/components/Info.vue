<script setup>
import Text from './Text.vue'
import Button from './Button.vue'
</script>
<template>
	<div className="info">
		<div className="block-container">
			<div className="info__box">
				<div className="info__header">
					<h2 className="info__header_title">
						«Мы те, кто проходили этот путь годами,
						<span>работаем с топовыми проектами</span> прямо сейчас и выработали
						свою собственную методологию обучения, которой
						<span>готовы поделиться с Вами</span>».
					</h2>
				</div>
				<div className="info__photos">
					<div className="info__photos_item">
						<img src="/icons/kirill_okotchik_icon.svg" alt="" />
						<div className="info__item_banner">
							<Text size="12" :isBold="true" text="Кирилл" textColor="blue" />
						</div>
					</div>
					<div className="info__photos_item">
						<img src="/icons/elena_okotchik_icon.svg" alt="" />
						<div className="info__item_banner">
							<Text size="12" :isBold="true" text="Алена" textColor="blue" />
						</div>
					</div>
				</div>
				<div class="info__button">регистрация на интенсив</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import '/src/assets/services/main.scss';

.info {
	padding: 104px 0px;
	background-color: $white;
	width: 100%;
	@media (max-width: $media-s) {
		padding: 50px 0px;
	}
	&__box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 48px;
		.info__header {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			&_title {
				font-family: $russo;
				font-size: 56px;
				line-height: 64px;
				color: $black;
				text-align: center;
				@media (max-width: $media-m) {
					font-size: 36px;
					line-height: 42px;
				}

				span {
					color: $accent_1;
					text-decoration: underline;
					font-weight: 700;
				}
			}
		}
		.info__photos {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			&_item {
				border: 2px solid $accent_1;
				padding: 7px;
				border-radius: 50%;
				width: 112px;
				height: 112px;
				position: relative;
				.info__item_banner {
					position: absolute;
					bottom: -10%;
					left: 50%;
					transform: translateX(-50%);
					background-color: $yellow;
					padding: 6px 20px;
					border-radius: 32px;
				}
				img {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
		.info__button {
			background-color: $accent_1;
			color: $white;
			font-family: $russo;
			padding: 53px 61px;
			border-radius: 32px;
			font-size: 36px;
			line-height: 28px;
			margin: 20px auto;
			@media (max-width: $media-m) {
				padding: 15px 30px;
				font-size: 24px;
				font-weight: 500;
				text-align: center;
			}
		}
	}
}
</style>
