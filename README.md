## hono-react-webapp
DenoDeployで動くWebアプリケーション

|                | ランタイム | 技術スタック          | 
| -------------- | ---------- | --------------------- | 
| フロントエンド | Node.js    | React, Vite, Tailwind | 
| バックエンド   | Deno       | Hono                  | 
## Setup
1. `npm install`
2. `npm run build`
3. `deno task start`

## Deploy to DenoDeploy
※{プロジェクト名}を変えること
```
deployctl deploy --project={プロジェクト名} --entrypoint=./main.ts --include=./main.ts --include=./deno.json --include=./frontend-app/dist/
```