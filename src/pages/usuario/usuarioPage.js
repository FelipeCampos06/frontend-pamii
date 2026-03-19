import './usuarioPage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Usuario';

class usuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
        `;
    }
}

customElements.define('usuario-page', usuarioPage);