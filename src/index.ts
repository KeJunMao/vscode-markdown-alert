import type * as vscode from 'vscode'
import type MarkdownIt from 'markdown-it'
import { alert } from '@mdit/plugin-alert'

export function activate(_context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md: MarkdownIt) {
      return md.use(alert, {
        titleRender(tokens, index) {
          const token = tokens[index]
          return `<p class="markdown-alert-title">
<span class="markdown-alert-icon"></span>
${token.content[0].toUpperCase() + token.content.substring(1).toLowerCase()}
</p>\n`
        },
      })
    },
  }
}

export function deactivate() { }
