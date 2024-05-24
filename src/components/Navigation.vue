<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import AnchorButton from './AnchorButton.vue'
import Text from './Text.vue'
const isBurger = ref(false)
const isOpenBurger = ref(false)

const navigationClassName = computed(() => {
	return `navigation ${isBurger.value ? 'burger' : ''} ${
		isOpenBurger.value ? 'open-burger' : ''
	}`
})
const resize = () => {
	if (window.innerWidth < 1200) {
		isBurger.value = true
	}
	if (window.innerWidth > 1200) {
		isBurger.value = false
	}
}

onMounted(() => {
	window.addEventListener('resize', resize)

	resize()
})

onUnmounted(() => {
	window.removeEventListener('resize', resize)
})
</script>

<template>
	<div :class="navigationClassName">
		<div className="block-container">
			<div className="navigation__box">
				<div v-if="isBurger" class="navigation__header">
					<div
						className="navigation__burger_button"
						@click="isOpenBurger = !isOpenBurger">
						<div className="navigation__button_line"></div>
						<div
							className="navigation__button_line navigation__button_line-center"></div>
						<div className="navigation__button_line"></div>
					</div>
					<div className="navigation__banner">
						<Text size="22" text="Старт 4 июня" textColor="blue" />
					</div>
				</div>
				<div
					className="navigation__links navigation__links-mobile"
					v-if="!isBurger">
					<div className="navigation__links_side">
						<a href="#programm" @click="isOpenBurger = false">
							<Text
								size="18"
								text="Программа интенсива"
								textColor="white"
								:isBold="true" />
						</a>
						<a href="#teachers" @click="isOpenBurger = false">
							<Text
								size="18"
								text="Наставники"
								textColor="white"
								:isBold="true" />
						</a>
					</div>
					<button class="navigation__side_button">Регистрация</button>
					<div className="navigation__banner">
						<Text size="22" text="Старт 4 июня" textColor="blue" />
					</div>
				</div>
				<div
					className="navigation__links navigation__links-desktop"
					v-if="isOpenBurger">
					<div className="navigation__links_side ">
						<a href="#programm" @click="isOpenBurger = false">
							<Text
								size="18"
								text="Программа интенсива"
								textColor="white"
								:isBold="true" />
						</a>
						<a href="#teachers" @click="isOpenBurger = false">
							<Text
								size="18"
								text="Наставники"
								textColor="white"
								:isBold="true" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '/src/assets/services/main.scss';

.navigation {
	width: 100%;
	padding: 40px 0px;
	position: relative;
	margin-bottom: 80px;
	@media (max-width: $media-s) {
		margin-bottom: 30px;
	}
	transition: 0.5s;
	&.burger {
		.navigation__box {
			.navigation__links {
				display: none;
			}
			.navigation__burger_button {
				display: flex;
			}
			.navigation__banner {
				left: 0;
				transform: translate(0);
				border-radius: 0px 24px 24px 0px;
				top: 20%;
			}
			.navigation__header {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}
		}
		&.open-burger {
			width: 100%;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 100;
			background-color: $white;
			.navigation__box {
				flex-direction: column;
				align-items: flex-end;
			}
			.navigation__burger_button {
				position: relative;
				.navigation__button_line {
					background-color: $black;
					&-center {
						display: none;
					}
					&:first-child {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%) rotate(45deg);
					}
					&:last-child {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%) rotate(-45deg);
					}
				}
			}
			.navigation__banner {
				display: none;
			}
			.navigation__links {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 20px;
				&_side {
					flex-direction: column;
					gap: 20px;
					align-items: flex-start;
				}
				.size-18 {
					color: $black;
				}
			}
		}
	}
	&__box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		@media (max-width: $media-m) {
			justify-content: flex-end;
		}
		.navigation__side_button {
			background-color: $yellow;
			border: none;
			outline: none;
			padding: 10px 40px;
			border-radius: 20px;
			font-family: $inter;
			font-size: 18px;
			line-height: 24px;
			font-weight: 700;
		}
		.navigation__burger_button {
			width: 35px;
			height: 25px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
			display: none;
			.navigation__button_line {
				width: 100%;
				height: 4px;
				border-radius: 10px;
				background-color: $white;
				transition: 0.5s;
			}
		}
		.navigation__links {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			&_side {
				display: flex;
				align-items: center;
				gap: 72px;
				.navigation__links_link-login {
					background-color: rgba($accent_2, 0.2);
					padding: 10px 25px;
					border-radius: 10px;
				}
			}
		}
		.navigation__banner {
			background-color: $yellow;
			padding: 24px 71px;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 0px 0px 24px 24px;
		}
	}
}
</style>
