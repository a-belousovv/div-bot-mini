<script setup>
import { computed } from 'vue'

const props = defineProps({
	text: String,
	backgroundColor: String,
	textColor: String,
	path: String,
})

const buttonClass = computed(() => {
	return `button bg-${props.backgroundColor} textColor-${props.textColor}`
})
</script>

<template>
	<a :href="path" :class="buttonClass">{{ props.text }}</a>
</template>

<style lang="scss">
@import '/src/assets/services/main.scss';
.button {
	font-size: 22px;
	line-height: 28px;
	font-family: $russo;
	border-radius: 32px;
	padding: 16px 40px;
	border: none;
	outline: none;
	cursor: pointer;
	transition: 0.5s;
	display: inline-block;
	&.bg-yellow {
		background-color: $yellow;
		&:hover {
			background-color: #e1ff69;
		}
	}
	&.bg-blue {
		background-color: $accent_1;
		&:hover {
			background-color: #4e4bff;
		}
	}
}
</style>
