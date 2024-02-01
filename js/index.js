"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];

//--------------------------------------------------------------------------//
// розмітка прелоадера
const preloadHTML = `
<div class="preloader">
		<svg class="pl" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
					<stop offset="0%" stop-color="hsl(313,90%,55%)" />
					<stop offset="100%" stop-color="hsl(223,90%,55%)" />
				</linearGradient>
				<linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="hsl(313,90%,55%)" />
					<stop offset="100%" stop-color="hsl(223,90%,55%)" />
				</linearGradient>
			</defs>
			<circle class="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36" stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round" transform="rotate(-90,100,100)" />
			<line class="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36" stroke-dasharray="1 165" stroke-linecap="round" />
		</svg>
	</div>
`;

//--------------------------------------------------------------------------//

const body = document.querySelector('body');

// підключення стилів та розмітки прелоадера
document.body.insertAdjacentHTML('afterbegin', preloadHTML);
const preloader = document.querySelector('.preloader');
const stylesLink = document.createElement('link');
stylesLink.rel = 'stylesheet';
stylesLink.type = 'text/css';
stylesLink.href = './css/preload.css';
document.head.appendChild(stylesLink);

// глобальні змінні
const sorting = document.querySelector('.sorting');
const allSortingBtn = document.querySelectorAll('.sorting__btn');
const sidebar = document.querySelector('.sidebar');
const sidebarForm = document.querySelector('.filters');
const allInput = sidebarForm.querySelectorAll('input');
const containerCards = document.querySelector('.trainers-cards__container');
const trainerCard = document.querySelector('#trainer-card');
const infoPopap = document.querySelector('#modal-template');
// масив фільтрованих карток для рендерингу
let filteredData = [];
// зберігаємо поточне значення фільтрів. оновлюється при сабміт
const appliedFilters = {
	category: 'всі',
	specialization: 'всі',
};
// зберігаємо поточний checked фільтрів. оновлюється при виборі
const checkedFilters = {
	categoryId: 'all-category',
	specializationId: 'all-direction',
};
// зберігаємо поточне значення сортування. оновлюється при сортуванні
const appliedSorting = {
	value: 'за замовчанням',
	valueId: 0,
};

// об'єкт методів для блокування/розблокування скролу сторінки

const scrollControl = {
	scrollPosition: 0,
	disableScroll() {
		this.scrollPosition = window.scrollY;
		document.body.style.cssText = `
			overflow: hidden;
			position: fixed;
			top: -${this.scrollPosition}px;
			left: 0;
			height: 100vh;
			width: 100vw;
			padding-right: ${window.innerWidth - document.body.offsetWidth}px;
		`;
		document.documentElement.style.scrollBehavior = 'unset';
	},
	enableScroll() {
		document.body.style.cssText = '';
		window.scroll({ top: this.scrollPosition });
		document.documentElement.style.scrollBehavior = '';
	},
};

//--------------------------------------------------------------------------//
// запуск прелоадера при завантаженні сторінки

window.addEventListener('load', () => {
	setTimeout(() => {
		// по завершенні таймауту
		// видаляємо прелоадер з DOM - дерева
		preloader.remove();
		// відключаємо файл стилів для прелоадера
		stylesLink.remove();
		// скролимо сторінку на початок
		window.scrollTo(0, 0);
	}, 1000);
});

//--------------------------------------------------------------------------//
// завантаження сторінки

document.addEventListener('DOMContentLoaded', () => {
	// відображення блоку сортування та сайдбару
	sorting.removeAttribute('hidden');
	sidebar.removeAttribute('hidden');
	// фільтрування та відображення карток
	filteringData();
	sortingData();
	showCardTrainers(filteredData);
});

//--------------------------------------------------------------------------//
// відмалювання карток

const showCardTrainers = (data) => {
	data.forEach((element, id) => {
		const card = trainerCard.content.cloneNode(true);
		const trainerName = `${element['last name']} ${element['first name']}`;

		card.querySelector('img').setAttribute('src', element.photo);
		card.querySelector('.trainer__name').innerText = trainerName;
		card.querySelector('.trainer').setAttribute('data-id', id);
		containerCards.append(card);
	});
};

//--------------------------------------------------------------------------//
// очищення блоку карток та новий рендеринг

const removeAndRenderCards = () => {
	// очищуємо блок відображення карток
	containerCards.innerHTML = '';
	// рендеримо картки за новими значеннями
	showCardTrainers(filteredData);
};

//--------------------------------------------------------------------------//
// показ відфільтрованих карток за кліком

// приміняємо дані фільтрів з відстеження по кліку на "показати" в об'єкт appliedFilters
sidebarForm.addEventListener('submit', (event) => {
	// блокуємо стандартну дію submit
	event.preventDefault();
	// приміняємо нові дані фільтрів
	updateAppliedFilters();
	// викликаємо фільтрацію карток
	filteringData();
	// приміняємо сортування карток
	sortingData();
	// рендеримо картки
	removeAndRenderCards();
});

//--------------------------------------------------------------------------//
// зберігання вибору фільтрів до події сабміт, щоб не плуталось сортування

// відстежуємо вибір фільтрів з сайдбару для збереження в об'єкти appliedFilters та checkedFilters
const updateAppliedFilters = () => {
	const value = [];

	allInput.forEach((element) => {
		if (element.type === "radio" && element.checked) {
			value.push(sidebar.querySelector(`label[for="${element.id}"]`).innerText.trim().toLowerCase());
			value.push(element.id);
		};
	});

	// при виклику функції передамо значення в об'єкти appliedFilters та checkedFilters
	appliedFilters.specialization = value[0];
	checkedFilters.specializationId = value[1];
	appliedFilters.category = value[2];
	checkedFilters.categoryId = value[3];
	// зберігаємо значення вибору checked в sessionStorage
	sessionStorage.setItem('checkedFilters', JSON.stringify(checkedFilters));
};

//--------------------------------------------------------------------------//
// фільтрація карток за значенням фільтрів

const filteringData = () => {
	// фільтруємо масив DATA за значеннями збереженими в appliedFilters
	filteredData = DATA.filter((element) => {
		const elementValue1 = element.specialization.toLowerCase();
		const elementValue2 = element.category.toLowerCase();
		const value1 = appliedFilters.specialization;
		const value2 = appliedFilters.category;

		return (elementValue1 === value1 || value1 === 'всі') &&
			(elementValue2 === value2 || value2 === 'всі');
	});
	// зберігаємо значення вибору фільтрів в sessionStorage
	sessionStorage.setItem('appliedFilters', JSON.stringify(appliedFilters));
};

//--------------------------------------------------------------------------//
// сортування карток по кліку

sorting.addEventListener('click', (event) => {
	const target = event.target;
	if (target.closest('button')) {

		allSortingBtn.forEach((button, id) => {
			// видаляємо активний клас у всіх кнопок сортування
			button.classList.remove('sorting__btn--active');
			if (button === target) {
				appliedSorting.valueId = id;
				appliedSorting.value = button.textContent.trim().toLowerCase();
				// зберігаємо вибір активної кнопки в sessionStorage
				sessionStorage.setItem('appliedSorting', JSON.stringify(appliedSorting));
				// надаємо активний клас активній кнопці
				button.classList.add('sorting__btn--active');
				sortingData();
			};
		});

		// заново рендиремо картки
		removeAndRenderCards();
	};
});

//--------------------------------------------------------------------------//
// сортування карток

const sortingData = () => {

	switch (appliedSorting.value) {

		case 'за прізвищем':
			filteredData.sort((a, b) => a['last name'].localeCompare(b['last name']));
			break;
		
		case 'за досвідом':
			filteredData.sort((a, b) => parseInt(b['experience']) - parseInt(a['experience']));
			break;
		
		case 'за замовчанням':
			filteringData();
		break;
	};
};

//--------------------------------------------------------------------------//
// відмалювання модального вікна

containerCards.addEventListener('click', (event) => {
	if (event.target.classList.contains('trainer__show-more')) {
		const popup = infoPopap.content.cloneNode(true);
		const cardId = event.target.closest('li').dataset.id;
		const popupName = `${filteredData[cardId]['last name']} ${filteredData[cardId]['first name']}`;

		popup.querySelector('.modal__img').setAttribute('src', filteredData[cardId].photo);
		popup.querySelector('.modal__name').innerText = popupName;
		popup.querySelector('.modal__point--category').innerText = filteredData[cardId].category;
		popup.querySelector('.modal__point--experience').innerText = filteredData[cardId].experience;
		popup.querySelector('.modal__point--specialization').innerText = filteredData[cardId].specialization;
		popup.querySelector('.modal__text').innerText = filteredData[cardId].description;

		// додавання модального вікна в DOM-дерево та блокування скролу сторінки

		body.append(popup);
		scrollControl.disableScroll();

		const modal = document.querySelector('.modal');
		modal.style.display = 'flex';
		modal.style.cursor = 'pointer';
		const modalBody = document.querySelector('.modal__body');
		modalBody.style.cursor = 'default';

		// видалення модального вікна з DOM-дерева та розблокування скролу сторінки

		modal.addEventListener('click', (event) => {
			if (event.target.closest('button') || event.target === modal) {
				modal.remove();
				scrollControl.enableScroll();
			};
		});
	};
});

//--------------------------------------------------------------------------//
// Завантаження збережених в сховищі sessionStorage налаштувань фільтрування та сортування

// Перевірка, чи в сховищі sessionStorage вже є збережені фільтри
const storedFilters = sessionStorage.getItem('appliedFilters');
const storedSavedFilters = JSON.parse(storedFilters);

// Витягуємо збережені фільтри (якщо вони є) та оновлюємо об'єкт appliedFilters
if (storedFilters) {
	appliedFilters.category = storedSavedFilters.category;
	appliedFilters.specialization = storedSavedFilters.specialization;
};

// Перевірка, чи в сховищі sessionStorage вже є збережені checked фільтрів
const storedCheckFilters = sessionStorage.getItem('checkedFilters');
const storedSavedCheckFilters = JSON.parse(storedCheckFilters);

// Витягуємо збережені checked фільтрів (якщо вони є) та оновлюємо об'єкт checkedFilters
if (storedCheckFilters) {
	allInput.forEach((element) => {
		if (element.id === storedSavedCheckFilters.categoryId ||
				element.id === storedSavedCheckFilters.specializationId) {
			element.checked = true;
		};
	});
};

// Перевірка, чи в сховищі sessionStorage вже є збережене значення сортування
const storedSorting = sessionStorage.getItem('appliedSorting');
const storedSavedSorting = JSON.parse(storedSorting);

// Витягуємо збережене значення сортування (якщо воно є) та оновлюємо об'єкт appliedSorting
if (storedSorting) {
	appliedSorting.value = storedSavedSorting.value;

	allSortingBtn.forEach((button, id) => {
		button.classList.remove('sorting__btn--active');
		if (id === storedSavedSorting.valueId) {
			button.classList.add('sorting__btn--active');
		};
	});
};