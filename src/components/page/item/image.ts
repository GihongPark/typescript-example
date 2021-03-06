export class ImageComponent {
	private element: HTMLElement;

	constructor(title: string, url: string) {
		const template = document.createElement('template');
		template.innerHTML = `<section class="image">
  <div class="image__holder"><img class="image__thumbnail"></div>
  <p class="image__title"></p>
</section>`;
		// 사용자에게 입력 받는 데이터는 innerHTML를 통해 그려주는건 좋지 않다
		this.element = template.content.firstElementChild! as HTMLElement;

		const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
		imageElement.src = url;
		imageElement.alt = title;

		const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
		titleElement.textContent = title;
	}

	attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
		parent.insertAdjacentElement(position, this.element);
	}
}
