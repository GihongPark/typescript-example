import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";

class App {
	private readonly page: PageComponent;

	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);

		const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
		image.attachTo(appRoot, 'beforeend');
	}
}

// ".document"는 정적으로 타이핑 해두었기 때문에 !를 사용하여 타입 체크를 하지 않을 수 있다.
new App(document.querySelector(".document")! as HTMLElement);
