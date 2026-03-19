import './produtoPage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Produto';

class produtoPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
        `;
    }
}

customElements.define('produto-page', ProdutoPage);