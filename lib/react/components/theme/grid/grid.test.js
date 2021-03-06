'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

/** @test {Grid} */

describe('Grid component', function () {
  /** @test {Grid#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, null));

    it('Should output a grid', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });

    it('Should output a grid with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['container']));
    });
  });
});