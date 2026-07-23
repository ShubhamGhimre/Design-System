import { writeFileSync, existsSync } from 'fs'
import { join, resolve } from 'path'
import prompts from 'prompts'

const CONFIG_FILENAME = 'design-system.config.json'

export async function init() {
  const cwd = process.cwd()
  const configPath = join(cwd, CONFIG_FILENAME)

  if (existsSync(configPath)) {
    const { overwrite } = await prompts({
      type: 'confirm',
      name: 'overwrite',
      message: 'A design-system config already exists. Overwrite?',
      initial: false,
    })
    if (!overwrite) {
      console.log('Aborted.')
      return
    }
  }

  const { prefix, tailwindPrefix, componentsDir } = await prompts([
    {
      type: 'text',
      name: 'prefix',
      message: 'What CSS variable prefix do you want to use?',
      initial: 'ds',
    },
    {
      type: 'text',
      name: 'tailwindPrefix',
      message: 'What Tailwind CSS prefix do you want to use?',
      initial: 'ds-',
    },
    {
      type: 'text',
      name: 'componentsDir',
      message: 'Where should components be installed?',
      initial: 'src/components/ui',
    },
  ])

  const config = {
    $schema: 'https://design-system.example.com/schema.json',
    style: 'default',
    rsc: false,
    tsx: true,
    tailwind: {
      config: 'tailwind.config.ts',
      css: 'src/index.css',
      baseColor: 'neutral',
      cssVariables: true,
      prefix: tailwindPrefix || 'ds-',
    },
    aliases: {
      components: componentsDir || 'src/components/ui',
      utils: 'src/lib/utils',
      ui: componentsDir || 'src/components/ui',
      lib: 'src/lib',
      hooks: 'src/hooks',
    },
    cssVariables: {
      prefix: prefix || 'ds',
    },
  }

  writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8')

  console.log()
  console.log('✔ Design system initialized successfully!')
  console.log()
  console.log(`  Created: ${resolve(configPath)}`)
  console.log()
  console.log('Next steps:')
  console.log(`  - Run \`ds add <component>\` to add components`)
  console.log(`  - Import components from "${config.aliases.ui}"`)
  console.log()
}
