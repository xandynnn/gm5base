# GM5 - Desenvolvimento Front-End

Padrão de desenvolvimento de Sites e Aplicações Front-End.

## 1 - Dos items necessários

- Visual Studio Code
- Extensões ( **Easy Less** , **EditorConfig for VS Code**, **TODO Highlight** )

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
    "settings": {
        "less.compile": {
            "compress": false,
            "sourceMap": true,
            "out": "../css/",
        }
    }
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
   "editor.minimap.enabled": false,
   "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
   "javascript.updateImportsOnFileMove.enabled": "always",
 }

```
## Das definições do código de escrita
- Para HTML
	- Chamadas JS devem obrigatoriamente estar no final do documento HTML
	-
- Para JS
	- Todo final de linha deve conter ponto vírgula **;**
- Para CSS
	- Classes e IDs devem estar escritos no formato **camelCase**

###### Alexandre Mattos Torrão
