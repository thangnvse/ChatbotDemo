import { resolve } from 'path';
import express from 'express';
import logger from 'morgan';
import { json, urlencoded } from 'body-parser';
import cookieParser from 'cookie-parser';

import routes from './routes';
import webpackDevServer from '../../config/hmr';

// Express app setup
const app = express();
if (process.env.NODE_ENV !== 'production') {
  webpackDevServer(app);
}

app.use(logger('combined'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(resolve(__dirname, '..', '..', 'build')));

// use routes
app.use('/api', routes);

app.get('*', (req, res) => res.sendFile(resolve(__dirname, '..', '..', 'build/index.html')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  next();
});

export default app;
