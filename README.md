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
- Para HTML
	- Chamadas JS devem obrigatoriamente estar no final do documento HTML
	-
- Para JS

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
	// Correto
	function f2 (obj) {
		var novoObjeto = obj + 1;
	}

	//	Errado
	function f2 (obj) {
		obj = obj + 1;
	}
	```
	- Variáveis devem ser declaradas sempre
	```
	// Correto
	var x = 1;

	//Errado
	x = 1;
	```
	- Nome de métodos devem ter no máximo 25 caracteres e devem ter significado objetivo, por exemplo: **function cortaPalavras () {};**
	- Usar comparação reduzida para booleanos e explícitas para strings e números. Exemplo: **if (isValid) {}** e para strings **if (name !== '') {}** e números **if (collection.length > 0) {}**
	- Para encapsulamento utilizamos o Brace Style como no exemplo: https://eslint.org/docs/rules/brace-style.html
	```
	if (isValid) {
		...
	} else {
		...
	}
	```
	- Utilizar apenas o seletor curto do jQuery
	```
	$('table').hide();
	```
  	- Preferir utilizar classes no seletores ao invés do find
	```
	// Bom
	$('.sidebar ul').hide();

	//	Ruim
	$('.sidebar').find('ul').hide();
	```
- Para CSS
	- Classes e IDs devem estar escritos no formato **camelCase**
	- Adotar uma língua para criação das classes, em inglês **"marginTop"** ou em português **"margemSuperior"**
- Para Imagens
    - Imagem deve ter um nome descritivo em português separado por hífen **"-"** e sem acentuação ( caracteres especiais ) como por exemplo **logo-arariba.jpg**

###### Alexandre Mattos Torrão
