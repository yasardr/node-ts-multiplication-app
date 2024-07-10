import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

const main = async () => {
    const { b:base, l:limit, s:show, n:fileName, d:fileDestination } = yarg;   
    ServerApp.run({base, limit, show, fileName, fileDestination});
}

(async () => {
    await main();
})()