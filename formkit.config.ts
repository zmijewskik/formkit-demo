import { genesisIcons } from "@formkit/icons"
import { rootClasses } from "./formkit.theme.mjs"
import { pl } from '@formkit/i18n'

const config = {
  icons: { ...genesisIcons },
  config: { rootClasses },
  locales: { pl },
  locale: 'pl',
}

export default config
