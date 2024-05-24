<script setup>
import Text from './Text.vue'
import { onMounted, ref } from 'vue'

const innerWidth = ref(window.innerWidth)

const resize = () => {
	innerWidth.value = window.innerWidth
}

onMounted(() => {
	window.addEventListener('resize', resize)
})
</script>
<template>
	<div className="teachers" id="teachers">
		<div className="block-container">
			<div className="teachers__box">
				<h2 className="teachers__title">
					Мы можем стать твоими <span>наставниками</span> в мире IT
				</h2>
				<div className="teachers__items" v-if="innerWidth > 1200">
					<div className="teachers__items_side teachers__items_side-left">
						<div className="teachers__items_item">
							<Text size="44" textColor="black" text="Кирилл Окотчик" />
							<Text size="22" textColor="blue" text="Основатель школы" />
							<div className="teachers__item_image">
								<img src="/welcome/teachers-kirill-picture.png" alt="" />
							</div>
							<div className="teachers__item_banner">
								<Text
									text="Backend с практическим опытом 6 лет"
									textColor="blue"
									size="22" />
							</div>
							<div className="teachers__item_description">
								<Text
									size="18"
									textColor="body_regular"
									text="Прошел путь от Junior с первой ЗП в 500$ до Senior с ЗП 3 500$, а после открыл собственную IT компанию" />
								<div className="teachers__description_img">
									<img src="/welcome/blue-border.png" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="teachers__items_side teachers__items_side-right">
						<div className="teachers__items_item">
							<Text size="44" textColor="black" text="Алёна Окотчик" />
							<Text size="22" textColor="blue" text="Основатель школы" />
							<div className="teachers__item_image">
								<img src="/welcome/teachers-alena-picture.png" alt="" />
							</div>
							<div className="teachers__item_banner">
								<Text
									text="Backend с практическим опытом 3 года"
									textColor="blue"
									size="22" />
							</div>
							<div className="teachers__item_description">
								<Text
									size="18"
									textColor="body_regular"
									text="в 19 лет бросила универ, чтобы ворваться в IT:
7 компаний, 11 проектов, 1 купленная машина и 1 квартира у моря за 3 года :)" />
								<div className="teachers__description_img">
									<img src="/welcome/blue-border.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="teachers__items mobile" v-if="innerWidth < 1200">
					<div className="teachers__items_item">
						<Text size="44" textColor="black" text="Кирилл Окотчик" />
						<Text size="22" textColor="blue" text="Основатель школы" />
						<div className="teachers__item_image">
							<img src="/welcome/teachers-kirill-picture.png" alt="" />
						</div>
						<div className="teachers__item_banner">
							<Text
								text="Backend с практическим опытом 6 лет"
								textColor="blue"
								size="22" />
						</div>
						<div className="teachers__item_description">
							<Text
								size="18"
								textColor="body_regular"
								text="Прошел путь от Junior с первой ЗП в 500$ до Senior с ЗП 3 500$, а после открыл собственную IT компанию" />
							<div className="teachers__description_img">
								<img src="/welcome/blue-border.png" alt="" />
							</div>
						</div>
					</div>
					<div className="teachers__items_item">
						<Text size="44" textColor="black" text="Алёна Окотчик" />
						<Text size="22" textColor="blue" text="Основатель школы" />
						<div className="teachers__item_image">
							<img src="/welcome/teachers-alena-picture.png" alt="" />
						</div>
						<div className="teachers__item_banner">
							<Text
								text="Backend с практическим опытом 3 года"
								textColor="blue"
								size="22" />
						</div>
						<div className="teachers__item_description">
							<Text
								size="18"
								textColor="body_regular"
								text="в 19 лет бросила универ, чтобы ворваться в IT:
7 компаний, 11 проектов, 1 купленная машина и 1 квартира у моря за 3 года :)" />
							<div className="teachers__description_img">
								<img src="/welcome/blue-border.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '/src/assets/services/main.scss';

.teachers {
	background-color: $accent_2;
	padding: 112px 0px;
	&__box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 48px;
		.teachers__title {
			color: $white;
			font-size: 56px;
			line-height: 64px;
			font-family: $russo;
			text-align: center;
			width: 880px;
			margin: 0 auto;
			span {
				color: $yellow;
				font-weight: 700;
			}
			@media (max-width: $media-l) {
				width: 100%;
				font-size: 48px;
			}
			@media (max-width: $media-m) {
				font-size: 36px;
				line-height: 42px;
			}
		}
		.teachers__items {
			width: 100%;
			display: flex;
			align-items: flex-start;
			justify-content: center;
			gap: 32px;
			@media (max-width: $media-l) {
				flex-direction: column;
				align-items: center;
			}
			&.mobile {
				.teachers__items_item {
					width: 100%;
					background-color: $white;
					padding: 40px;
					border-radius: 24px;
					position: relative;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 20px;
					@media (max-width: $media-l) {
						padding: 40px 40px 80px 40px;
					}
					@media (max-width: $media-s) {
						padding: 20px 20px 40px 20px;
					}
					.teachers__item_image {
						@media (max-width: $media-l) {
							width: 100%;
						}
						margin: 28px 0px 0px 0px;
						@media (max-width: $media-s) {
							margin: 0px;
						}
						img {
							width: 100%;
							height: 100%;
							display: block;
						}
					}
					.teachers__item_description {
						width: 100%;
						padding: 24px;
						position: relative;
						.teachers__description_img {
							position: absolute;
							left: 50%;
							width: 100%;
							top: 50%;
							transform: translate(-50%, -50%);
							z-index: 10;
							height: 100%;
							img {
								width: 100%;
								height: 100%;
								display: block;
							}
						}
					}
					.teachers__item_banner {
						width: 100%;
						background-color: $yellow;
						padding: 25px;
						border-radius: 16px;
						z-index: 10;
						transform: translateY(20px) rotate(-3deg);
						position: relative;
						z-index: 50;
						@media (max-width: $media-l) {
							width: 100%;
						}
						@media (max-width: $media-s) {
							padding: 15px;
							bottom: 25%;
						}
						@media (max-width: $media-xs) {
							bottom: 25%;
						}
						.size-22 {
							max-width: 312px;
						}
					}
				}
			}
			&_side {
				width: 45%;
				max-width: 488px;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 148px;

				@media (max-width: $media-l) {
					margin: 0px;
					gap: 30px;
					max-width: 100%;
					width: 80%;
				}
				@media (max-width: $media-s) {
					width: 100%;
				}
				.teachers__items_item {
					width: 100%;
					background-color: $white;
					padding: 40px;
					border-radius: 24px;
					position: relative;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 20px;
					@media (max-width: $media-l) {
						padding: 40px 40px 80px 40px;
					}
					@media (max-width: $media-s) {
						padding: 20px 20px 40px 20px;
					}
					.teachers__item_image {
						@media (max-width: $media-l) {
							width: 100%;
						}
						margin: 28px 0px 0px 0px;
						@media (max-width: $media-s) {
							margin: 0px;
						}
						img {
							width: 100%;
							height: 100%;
							display: block;
						}
					}
					.teachers__item_description {
						padding: 24px;
						position: relative;
						.teachers__description_img {
							position: absolute;
							left: 50%;
							width: 100%;
							top: 50%;
							transform: translate(-50%, -50%);
							z-index: 10;
							height: 100%;
							img {
								width: 100%;
								height: 100%;
								display: block;
							}
						}
					}
					.teachers__item_banner {
						width: 100%;
						background-color: $yellow;
						padding: 25px;
						border-radius: 16px;
						z-index: 10;
						transform: translateY(20px) rotate(-3deg);
						position: relative;
						z-index: 50;
						@media (max-width: $media-l) {
							width: 90%;
						}
						@media (max-width: $media-s) {
							padding: 15px;
							bottom: 25%;
						}
						@media (max-width: $media-xs) {
							bottom: 25%;
						}
						.size-22 {
							max-width: 312px;
						}
					}
				}

				&-right {
					margin-top: 486px;
					@media (max-width: $media-s) {
						margin: 0px;
					}
					.teachers__items_item {
						.teachers__item_banner {
							transform: translateY(20px) rotate(3deg);
						}
					}
				}
			}
		}
	}
}
</style>
