require('../styles/rating.styl');
require('../styles/btn.styl');

require('./matches.polyfill');
require('./rating');
require('./btn');

//инициализация рейтинг-панели
RatingPanel.init('.rating-block');
