# sample firebase

testing everything firebase has

```bash
mkdir sample-firebase
cd sample-firebase
npm init -y
npm i -D firebase-tools
npx firebase login
npm firebase init
# several interactive prompts...
```

select any feature you wish

add `firebase emulators:start` on package.json as the "dev" script, it's cool

## next steps

- how to combine emulators structure into modern frontend tools
- how to properly setup github action to build and deploy
