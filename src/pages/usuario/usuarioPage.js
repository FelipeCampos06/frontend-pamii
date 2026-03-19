import './UsuarioPage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Usuario';

class UsuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
        `;
    }
}

customElements.define('usuario-page', UsuarioPage);