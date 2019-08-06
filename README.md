# GM5 - Desenvolvimento Front-End

Padrão de desenvolvimento de Sites e Aplicações Front-End.

## 1 - Dos items necessários

- Visual Studio Code
- Extensões ( **EditorConfig for VS Code**, **TODO Highlight** )

Itens não obrigatórios:
- FiraCode: https://github.com/tonsky/FiraCode, Após a instalação basta incluir nas configurações do editor a linha abaixo:

```
{
	"editor.fontFamily": "Fira Code",
	"editor.fontLigatures": true,
	"editor.fontWeight": "450"
}
```

- VS Code Icons https://github.com/vscode-icons/vscode-icons


## 2 - Arquivos de configuração do editor e do projeto

### .editorconfig
```
root = true

[*]
indent_style = tab
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

```

### projeto.code-workspace
```
{
    "folders": [
        {
            "path": "."
        }
    ],
    "settings": {}
}
```
### Configurações do editor
- Para acessar as configurações do editor, basta pressionar as teclas **CTRL+P, digitar >settings** e inserir os parametros abaixo listado
```
{
   "editor.renderIndentGuides": false,
   "editor.fontSize": 14,
   "editor.lineHeight": 22,
   "editor.fontLigatures": true,
   "editor.tabSize": 4,
   "editor.formatOnSave": true,
   "editor.minimap.enabled": true,
   "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
   "javascript.updateImportsOnFileMove.enabled": "always",
 }

```
## Das definições do código de escrita
- **Para HTML**
	- Chamadas JS devem obrigatoriamente estar no final do documento HTML
	- Tags <img> devem ter obrigatoriamente um alt com a descrição da imagem e a tag de fechamento.
	```
		<img src="../img/logo-projeto.png" alt="Projeto" />
	```
	- O HTML deve se manter todo identado por TabSize e com 4 espaçamentos como no editorConfig.
	```
	<nav>
		<ul>
			<li>
				<a href="link1.php">Link 1</a>
			</li>
			<li>
				<a href="link2.php">Link 2</a>
			</li>
		</ul>
	</nav>
	```
	- Links devem obrigatóriamente ter um title
	```
	<a href="quem-somos.php" title="Ir para página Quem somos">Quem somos</a>
	```
- **Para JS**

	Foi utilizado o documento de Style Guides do AirBnB como referência. ( https://github.com/airbnb/javascript )

    - Usar **PascalCase** somente para nomes de classes e **camelCase** para funções, variáveis, etc.
	```
	class User {
		constructor(options) {
			this.fullName = options.fullName;
		}
	}
	```
	- Todo final de linha deve conter ponto vírgula **;**
	```
	var contador = 1;
	```
	- Utilizar operadores ternários para validações curtas como por exemplo:
	```
	(x > 10) ? y++ : null;
	```
	- Espaçamentos na assinatura das funções
	```
	var y = function a() {}
	```
	- Nunca mudar ou reatribuir valores de parametros, crie uma variável e atribua o valor a ela:
	```
	// Bom
	function f2 (obj) {
		var novoObjeto = obj + 1;
	}

	// Ruim
	function f2 (obj) {
		obj = obj + 1;
	}
	```
	- Variáveis devem ser declaradas sempre
	```
	// Bom
	var x = 1;

	// Ruim
	x = 1;
	```
	- Nome de métodos devem ter no máximo 25 caracteres e devem ter significado objetivo, por exemplo:
	```
	function cortaPalavras () {};
	```
	- Usar comparação reduzida para booleanos e explícitas para strings e números. Exemplo:
	```
	// Para Booleanos
	if (isValid) {
		...
	}

	// Para strings
	if (name !== '') {
		...
	}

	//	Para números
	if (collection.length > 0) {
		...
	}
	```
	- Para encapsulamento utilizamos o Brace Style como no exemplo: https://eslint.org/docs/rules/brace-style.html
	```
	if (isValid) {
		...
	} else {
		...
	}
	```
	- Utilizar apenas o seletor curto do jQuery **$**
	```
	$('table').hide();
	```
  	- Preferir utilizar classes no seletores ao invés do find
	```
	// Bom
	$('.sidebar ul').hide();

	// Ruim
	$('.sidebar').find('ul').hide();
	```
- **Para CSS / LESS**
	- Classes e IDs devem estar escritos no formato **camelCase**:
	```
	.minhaClasse{
		color: red;
	}
	```
	- Adotar um idioma para criação das classes, como por exemplo:
	```
	// Inglês
	.marginTop{
		margin-top: 10px;
	}

	// Português
	.margemSuperior{
		margin-top: 10px;
	}
	```
	- O Less deve estar estruturado por componente a fim de reutilização do código em questão e aninhado, como por exemplo:
	```
	.filtros{
		.grupo{
			label{
				color: '#000';
			}
			input{
				color: '#2d2d2d';
			}
		}
	}
	```
	- As Media Queries devem estar no final da classe pai a fim de que quando tivermos que reaproveitar o código em outro projeto, seja incluido todo o código encapsulado. Um grupo encapsulado não pode ter mais de uma media query igual;
	```
	.filtros{
		.grupo{
			label{
				color: '#000';
			}
			input{
				color: '#2d2d2d';
			}
		}
		@media only screen and (max-width: 991px), only screen and (max-device-width: 991px){
			.grupo{
				label{
					color: '#f00';
				}
			}
		}
		@media only screen and (max-width: 767px), only screen and (max-device-width: 767px){
			.grupo{
				input{
					color: '#00f';
				}
			}
		}
	}
	```
- **Para Imagens**
    - Imagem deve ter um nome descritivo em português separado por hífen **"-"** e sem acentuação ( caracteres especiais ) como por exemplo **logo-arariba.jpg**

###### Alexandre Mattos Torrão
