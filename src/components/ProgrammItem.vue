<script setup>
import Text from './Text.vue'
import { ref, computed } from 'vue'
const props = defineProps({
	item: Object,
})

const isOpen = ref(false)

const itemClassName = computed(() => {
	return `programm__items_item ${isOpen.value ? '' : 'hide'}`
})
</script>
<template>
	<div :className="itemClassName" @click="isOpen = !isOpen">
		<div className="programm__item_header">
			<Text size="22" :text="props.item.header.title" />
			<div className="programm__header_button">
				<img src="/icons/programm__button.svg" alt="" />
			</div>
			<div
				className="programm__item_banner"
				v-if="props.item.header.lessonCount != '0 уроков'">
				<Text
					size="22"
					:text="props.item.header.lessonCount"
					textColor="blue" />
			</div>
		</div>
		<div className="programm__item_content">
			<div
				className="programm__content_item"
				v-for="(item, i) in props.item.content"
				:key="i">
				<Text size="18" :text="item" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '/src/assets/services/main.scss';

.programm__items_item {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 24px;
	border: 2px solid $accent_1;
	background-color: #eef0f7;
	cursor: pointer;
	&.hide {
		.programm__item_header {
			.programm__header_button {
				transform: rotate(0deg);
			}
		}
		.programm__item_content {
			height: 0;
			overflow: hidden;
			padding: 0px 40px;
			border: 2px solid rgba(black, 0);
		}
	}
	.programm__item_banner {
		position: absolute;
		padding: 10px 24px;
		background-color: $yellow;
		border-radius: 32px;
		top: -15%;
		left: 2%;
	}
	.programm__item_header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		padding: 48px 40px;
		.programm__header_button {
			transform: rotate(180deg);
			transition: 0.5s;
			min-width: 64px;
			min-height: 64px;
		}
	}
	.programm__item_content {
		width: 100%;
		padding: 32px 40px;
		border-top: 2px solid $accent_1;
		transition: 0.5s;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 16px;
		flex-wrap: wrap;
		@media (max-width: $media-s) {
			flex-wrap: nowrap;
			max-height: 100%;
		}
		.programm__content_item {
			position: relative;
			padding-left: 16px;
			&::before {
				content: '';
				width: 8px;
				height: 8px;
				background-color: $accent_1;
				border-radius: 50%;
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
}
</style>
