<script setup>
import { computed } from 'vue'

const props = defineProps({
	text: String,
	textColor: String,
	size: String,
	isBold: Boolean,
})

const textClassName = computed(() => {
	return `text textColor-${props.textColor} size-${props.size} ${
		props.isBold ? 'bold' : ''
	}`
})
</script>
<template>
	<p v-html="text" :class="textClassName"></p>
</template>
<style lang="scss">
@import '/src/assets/services/main.scss';
.text {
	width: auto;
	height: auto;
	span {
		font-weight: 700;
	}
	&.size-12 {
		font-family: $inter;
		font-size: 12px;
		line-height: 20px;
		font-weight: 400;
	}
	&.size-14 {
		font-family: $inter;
		font-size: 14px;
		line-height: 16px;
		font-weight: 400;
	}
	&.size-18 {
		font-family: $inter;
		font-size: 18px;
		line-height: 24px;
		font-weight: 400;
		@media (max-width: $media-s) {
			font-size: 16px;
			line-height: 22px;
		}
	}
	&.size-22 {
		font-family: $russo;
		font-size: 22px;
		line-height: 28px;
		@media (max-width: $media-s) {
			font-size: 20px;
			line-height: 24px;
		}
		@media (max-width: $media-xs) {
			font-size: 18px;
			line-height: 22px;
		}
	}
	&.size-32 {
		font-family: $russo;
		font-size: 32px;
		line-height: 40px;
		@media (max-width: $media-s) {
			font-size: 28px;
			line-height: 36px;
		}
		@media (max-width: $media-xs) {
			font-size: 24px;
			line-height: 32px;
		}
	}
	&.size-44 {
		font-family: $russo;
		font-size: 44px;
		line-height: 48px;
		@media (max-width: $media-s) {
			font-size: 36px;
			line-height: 40px;
		}
		@media (max-width: $media-xs) {
			font-size: 24px;
			line-height: 32px;
		}
	}
	&.size-56 {
		font-family: $russo;
		font-size: 56px;
		line-height: 64px;
		@media (max-width: $media-s) {
			font-size: 48px;
			line-height: 56px;
		}
		@media (max-width: $media-xs) {
			font-size: 40px;
			line-height: 48px;
		}
	}
	&.size-80 {
		font-family: $russo;
		font-size: 80px;
		line-height: 80px;
		@media (max-width: $media-s) {
			font-size: 64px;
			line-height: 64px;
		}
		@media (max-width: $media-xs) {
			font-size: 48px;
			line-height: 48px;
		}
	}
	&.bold {
		font-weight: 700;
	}
}
</style>
