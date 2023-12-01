import type * as vscode from 'vscode'
import type MarkdownIt from 'markdown-it'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'

export function activate(_context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt: (md: MarkdownIt) => md.use(MarkdownItGitHubAlerts),
  }
}
