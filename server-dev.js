import express from 'express';
import connectLiveReload from 'connect-livereload';
import livereload from 'livereload';

const app = express();

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

app.use(connectLiveReload());
app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Frontend Server ready at http://localhost:${PORT}`);
});
