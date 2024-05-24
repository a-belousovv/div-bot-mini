<script setup>
import Text from './Text.vue'

const handleScrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
<template>
	<div className="footer">
		<div className="block-container">
			<div className="footer__box">
				<div className="footer__items">
					<div className="footer__items_item">
						<Text size="22" textColor="white" text="DIV`ный мир IT" />
					</div>
					<div className="footer__items_item">
						<div className="footer__list">
							<p className="footer__list_item">
								ИП Окотчик Алёна Константиновна
							</p>
							<p className="footer__list_item">УНП 591625019</p>
							<p className="footer__list_item">
								Свидетельство о государственной регистрации от 14.10.2022,
							</p>
							<p className="footer__list_item">
								выданное Новогрудский райисполкомом
							</p>
						</div>
					</div>
					<div className="footer__items_item">
						<div className="footer__links">
							<RouterLink
								@click="handleScrollToTop"
								className="footer__links_link"
								to="/privacyPolicy"
								>Политика конфиденциальности</RouterLink
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import '/src/assets/services/main.scss';

.footer {
	padding: 48px 0px;
	width: 100%;
	background-color: $accent_2;
	&__box {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		.footer__items {
			width: 100%;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			@media (max-width: $media-s) {
				flex-direction: column;
				gap: 30px;
			}
			&_item {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				.footer__list {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 4px;
					&_item {
						color: $white_less;
						font-family: $inter;
						font-size: 16px;
						line-height: 24px;
					}
				}
				.footer__links {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 4px;
					&_link {
						text-decoration: underline;
						font-family: $inter;
						font-size: 16px;
						line-height: 24px;
						color: $white_less;
					}
				}
			}
		}
	}
}
</style>
