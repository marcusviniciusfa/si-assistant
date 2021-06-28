import app from './app';
import pidusage from 'pidusage';

const port = process.env.PORT || 3000;
pidusage(process.pid, (_err, stats) => {
  console.log(stats);
});

app.listen(port, () => {
  console.log(`Webhook serving at port ${port}`);
});
