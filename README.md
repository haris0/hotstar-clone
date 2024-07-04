# Hotstar123

This app show movie, and tv show in entertainment, you can check detail for each content, search for content, and save your watchlist movie or tv show. The data is provided by [Themoviedb](https://www.themoviedb.org/). You can check the deployed app on [Hotstar123](https://hotstar123-clone.vercel.app/).

## Local Setup

### Get Themoviedb API key

To running this web you need to get api key from Themoviedb, this key will be used for fetching data. Go to [https://developer.themoviedb.org/](https://developer.themoviedb.org/) to get your key.

### Setup env variable

After you get the key, you need set this key on env variable, create file on project root called ".env.local", and put the key:

```bash
NEXT_PUBLIC_MDB_TOKEN={your-key}
```

### Install dependencies

Before you ready to run the web, you need install all required dependencies, use **Node.js 18.17 or later**. run this command on root of project:

```bash
npm run install
```

### Run the web

And thats all, now you ready to run the web, hit this command:

```bash
npm run dev
```

## Preview

### Home

| Desktop              | Mobile               |
| -------------------- | -------------------- |
| ![page1](./ss_1.png) | ![page2](./ss_2.png) |

### Watchlist

| Desktop              | Mobile               |
| -------------------- | -------------------- |
| ![page3](./ss_3.png) | ![page4](./ss_4.png) |

### Search

| Desktop              | Mobile               |
| -------------------- | -------------------- |
| ![page5](./ss_5.png) | ![page6](./ss_6.png) |

### Movie Detail

| Desktop              | Mobile               |
| -------------------- | -------------------- |
| ![page7](./ss_7.png) | ![page8](./ss_8.png) |

### Tv Detail

| Desktop              | Mobile                 |
| -------------------- | ---------------------- |
| ![page8](./ss_9.png) | ![page10](./ss_10.png) |

## Technologies

This project uses several technologies listed below :

- **[NextJs](https://nextjs.org/docs)**, the React Framework for Production.
- **[Typescript](https://www.typescriptlang.org/)**, a strict syntactical superset of JavaScript and adds optional static typing to the language.
- **[React Context](https://reactjs.org/docs/context.html)**, context lets you “broadcast” such data, and changes to it, to all components below.
