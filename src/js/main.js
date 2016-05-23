require('../styles/rating.styl');
require('../styles/btn.styl');
require('../styles/progress.polyfill.styl');
require('../styles/progress-bar.styl');
require('../styles/page.styl');

require('./matches.polyfill');
require('./rating');
require('./btn');
require('./progress.polyfill');

//инициализация рейтинг-панели
RatingPanel.init('.rating-block');

document.createElement('progress');
