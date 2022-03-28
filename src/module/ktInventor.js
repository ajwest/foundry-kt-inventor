import { InventorClassFeatures } from './lib/inventorClassFeatures';

Hooks.once('init', async function () {
  console.log('loading');
});

Hooks.once('ready', async function () {
  CONFIG.DND5E.classFeatures = {
    ...CONFIG.DND5E.classFeatures,
    ...InventorClassFeatures,
  };
  console.log('booya');
});
