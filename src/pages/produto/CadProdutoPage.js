import './CadProdutoPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Cadastrar Produtos';

class CadProdutoPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho} 

        <ion-content class = "ion-padding">
            <from id = "from=produto">
                <ion-list>
                    <ion-item>
                        <ion-input type = "text" name = "dsc_produto" label = "Descrição do produto" label-placement = "floating" required>
                        </ion-input> 
                    </ion-item>

                    <ion-item>
                        <ion-input type = "number" step = "0.01" name = "valor_unit" 
                        label = "Valor Unitário" label-placement  = "floating" required>
                        </ion-input> 
                    </ion-item>

                    <ion-item>
                        <ion-label> Ativo </ion-label>
                        <ion-toggle slot = "end" name = "status" checked></ion-toggle> 
                    </ion-item>
                </ion-list>  
            </from>
        </ion-content>

        `;

        this.querySelector('#logout-btn').addEventListener('click', logout);

    }
}

customElements.define('cad-produto-page', CadProdutoPage);