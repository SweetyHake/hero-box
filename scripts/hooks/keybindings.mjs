/**
 * @fileoverview Client keybinding to open the Data Manager.
 */

import { MODULE_ID } from '../constants/index.mjs';
import { logger } from '../utils/index.mjs';

export function registerKeybindings() {
  game.keybindings.register(MODULE_ID, 'openDataManager', {
    name: 'cs-hero-box.keybindings.openDataManager.name',
    hint: 'cs-hero-box.keybindings.openDataManager.hint',
    editable: [{ key: 'KeyP' }],
    onDown: openDataManager,
    restricted: true,
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
  });

  logger.debug('Keybindings registered');
}

/** Open or focus the Data Manager window. */
async function openDataManager() {
  const { DataManager } = await import('../applications/data-manager/data-manager.mjs');

  const existingApp = Object.values(ui.windows).find(
    w => w.id === `${MODULE_ID}-data-manager`
  );

  if (existingApp) {
    existingApp.bringToFront();
  } else {
    new DataManager().render(true);
  }

  return true;
}