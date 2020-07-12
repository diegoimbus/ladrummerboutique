import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

const app: express.Application = express();
const path = '/graphql';
const cors = require('cors'); 
const PORT = process.env.PORT || 4000;

const main = async () => {
  const schema = await buildSchema({
    resolvers: [__dirname + '/**/*.resolver.ts'],
  });

  const apolloServer = new ApolloServer({
    cors: true,
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    // cacheControl: true,
  });

  app.use(cors());
  apolloServer.applyMiddleware({ app, path, cors: true });

  app.listen(PORT, () => {
    console.log('🚀 started http://localhost:4000/graphql');
  });
};

main();
