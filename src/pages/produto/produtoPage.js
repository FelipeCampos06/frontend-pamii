import './produtoPage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Produtos';

class ProdutoPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
        `;
    }
}

customElements.define('produto-page', ProdutoPage);