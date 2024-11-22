class WCMenu extends HTMLElement {
    constructor () {
		super();

		
	}

	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
        this.attachShadow({ mode: "closed" });
		this.innerHTML = `
            <nav>
                <a href="menu-1">Menu 1</a>
                <a href="menu-2">Menu 2</a>
                <a href="menu-3">Menu 3</a>
            </nav>
        `
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
		console.log('disconnected', this);
	}
}

if ('customElements' in window) {
	customElements.define('wc-menu', WCMenu);
}