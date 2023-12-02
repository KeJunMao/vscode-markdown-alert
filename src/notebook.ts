import type { RendererContext } from 'vscode-notebook-renderer'
import type MarkdownIt from 'markdown-it'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'

// @ts-expect-error ignore
import alertCss from '../markdown-alert.css'

export async function activate(ctx: RendererContext<void>) {
  const markdownItRenderer = (await ctx.getRenderer('vscode.markdown-it-renderer')) as undefined | any
  if (!markdownItRenderer)
    throw new Error(`Could not load 'vscode.markdown-it-renderer'`)

  const style = document.createElement('style')
  style.textContent = alertCss
  const template = document.createElement('template')
  template.classList.add('markdown-style')
  template.content.appendChild(style)
  document.head.appendChild(template)

  markdownItRenderer.extendMarkdownIt((md: MarkdownIt) => md.use(MarkdownItGitHubAlerts))

  return markdownItRenderer
}
