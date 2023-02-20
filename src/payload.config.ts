import { buildConfig } from 'payload/config';
import path from 'path';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';
import { Slider } from './collections/Slider';
import { Media } from './collections/Media';
import { Footer } from './globals/Footer';
import { MainMenu } from './globals/MainMenu';
import About from "./collections/About"
import { Social } from './globals/Social';

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  cors:['*', 'http://localhost:3001', '0.0.0.0:3001','https://ervagul.com', 'http://localhost:4005'],
  admin: {
    user: Users.slug,
  },
  collections: [
    Slider,
    About,
    Posts,
    Media,
    Users,
  ],
  globals: [
    MainMenu,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
