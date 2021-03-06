/**
 * GET /
 * Home page.
 */
import Application from '../../application/HelloWorld';

exports.home = (req, res) => {
  res.render('home', {
    Application,
    applicationName: 'HelloWorld',
    preloadedState: Object.assign({}, Application.preloadedState, {
      otherState: 123,
    }),
    payload: {},
    cache: true,
  });
};
