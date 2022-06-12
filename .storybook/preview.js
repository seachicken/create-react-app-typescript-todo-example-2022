import { RecoilRoot } from "recoil"
import { withScreenshot } from 'storycap'
import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Pages', 'Components'],
    },
  },
}

export const decorators = [
  withScreenshot,
  (Story) => (
    <RecoilRoot>
      <Story />
    </RecoilRoot>
  )
]
