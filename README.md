## Getting started

1. INSTALL - `npm install`
2. Add credentials - Create a .env.local adding in the keys as required. 
3. Add details to your app in partners
4. --> app url = https://ngrok.domain/api/auth
5. --> whitelist = https://ngrok.domain/
6. start ngrok - I have an npm script `npm run ngrok:leigh` add one or start manually. 
7. `npm run dev`


## Sample .env.local

```
  APP_URL=https://some.ngrok.domain

  SHOPIFY_API_VERSION=2021-07
  SHOPIFY_APP_KEY=KEY_HERE
  NEXT_PUBLIC_SHOPIFY_APP_KEY=KEY_HERE

  SHOPIFY_APP_SECRET=SECRET_HERE

  SHOPIFY_APP_SCOPES=read_content,write_content,read_themes,write_themes,read_products,write_products,read_script_tags,write_script_tags,read_locales,write_locales,read_translations,write_translations

  MONGO_DB_CONNECTION_STRING=ADD_CONNECTION_STRING
  MONGO_DB_DATABASE=decoupled-staging
  MONGO_DB_DATABASE_ROOT=stores

```
