class MenuElement extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode:'open'})
        const styles = new CSSStyleSheet()
        styles.replaceSync( `
        .menu {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background-color: rebeccapurple;
        }
        
        .menu a {
            text-decoration: none;
            color: white;
        }
        `)
        // shadow.adoptedStyleSheets = [styles]
        const wrapper_root = document.createElement("div")
        wrapper_root.classList.add("menu")
        wrapper_root.innerHTML = `
        <a href="./">Home page</a>
        <a href="./secondary.html">Other page</a>
        `

        shadow.adoptedStyleSheets = [styles]
        shadow.appendChild(wrapper_root)   
    }
}

customElements.define("c-menu", MenuElement)