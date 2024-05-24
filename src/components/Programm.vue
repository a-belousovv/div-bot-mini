<script setup>
import { ref, computed } from 'vue'
import Text from './Text.vue'
import Button from './Button.vue'
import ProgrammItem from './ProgrammItem.vue'

const programmItems = [
	{
		id: 'module-1',
		header: {
			title: 'Доступ в закрытый канал участников',
			lessonCount: 'после регистрации и до 4 июня',
		},
		content: [
			'познакомишься с авторами интенсива;',
			'узнаешь кто такой Backend-разработчик и сколько ему платят;',
			'плюсы и минусы профессии Backend-разработчик;',
			'как найти свою первую работу в IT компании с зарплатой от 700$.',
		],
	},
	{
		id: 'module-2',
		header: {
			title: 'Погружение в мир Backend-разработки',
			lessonCount: '4 июня в 19:00',
		},
		content: [
			'разберем как создать свой первый проект и зачем он нужен;',
			'на практике, в онлайн формате, напишешь свой первый код и сдашь его на проверку;',
			'получишь обратную связь на свой проект и ответы на вопросы.',
		],
	},
	{
		id: 'module-3',
		header: {
			title: 'Создаем свой проект',
			lessonCount: '5 июня в 19:00',
		},
		content: [
			'наполнишь свой проект уникальными материалами;',
			'добавишь свой проект в интернет;',
			'сдать проект на проверку для получения сертификата о прохождении интенсива.',
		],
	},
	{
		id: 'module-4',
		header: {
			title:
				'От знаний интенсива до первого работы в IT за 700$+. Пошаговая инструкция',
			lessonCount: '6 июня в 19:00',
		},
		content: [
			'презентация основного курса по  Backend-разработке от авторов интенсива и открытие продаж;',
			'негласные преимущества Backend-разработки в сравнении с другими направлениями IT;',
			'что нужно знать, чтобы стать востребованным Backend-разработчиком;',
			'алгоритм как устроится на первую работу в IT без опыта, рекомендации и связей;',
			'как продавать себя дорого на собеседования в IT компаниях;',
			'ответы на вопросы участников интенсива.',
		],
	},
]
</script>
<template>
	<div className="programm" id="programm">
		<div className="block-container">
			<div className="programm__box">
				<Text size="56" text="Программа интенсива" />
				<div className="programm__items">
					<programm-item
						v-for="item in programmItems"
						:key="item.id"
						:item="item" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '/src/assets/services/main.scss';
.programm {
	width: 100%;
	padding: 104px 0px;
	@media (max-width: $media-s) {
		padding: 50px 0px;
	}
	&__box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 48px;
		.programm__items {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 48px;
		}
	}
}
</style>
