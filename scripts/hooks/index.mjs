import { registerReadyHooks } from './ready.mjs';
import { registerTokenHooks } from './token.mjs';
import { registerUIHooks } from './ui.mjs';
import { registerKeybindings } from './keybindings.mjs';

export function registerAllHooks() {
  registerReadyHooks();
  registerTokenHooks();
  registerUIHooks();
  registerKeybindings();
}