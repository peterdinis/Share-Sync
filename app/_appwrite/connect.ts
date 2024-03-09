import { Account, Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as unknown as string)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT as unknown as string);

export const account = new Account(client);
export {ID} from "appwrite";
export default client;