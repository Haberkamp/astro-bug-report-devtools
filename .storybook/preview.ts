import type { Decorator, Preview } from "@storybook/html";

import "../src/styles/reset.css";
import "../src/styles/tokens.css";
import "../src/styles/base.css";
import "../src/styles/composition.css";
import "../src/styles/utilities.css";
import "../src/styles/block.css";

const withTheme: Decorator = (Story, context) => {
  const wrapper = document.createElement("div");
  const theme = /black/.test(context.globals.backgrounds?.value)
    ? "dark"
    : "light";

  document.body.dataset.theme = theme;
  wrapper.appendChild(Story() as HTMLElement);

  return wrapper;
};

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    backgrounds: {
      values: [
        { name: "light", value: "var(--color-surface, white)" },
        { name: "dark", value: "var(--color-surface, black)" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
