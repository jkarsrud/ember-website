import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | releases/lts', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:releases/lts');

    assert.ok(controller);
  });
});
