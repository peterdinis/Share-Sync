import { ID } from 'appwrite';
import { storage } from '../connect';

export async function uploadFile(file: File) {
    const data = await storage.createFile(
        process.env.NEXT_PUBLIC_BUCKET_ID as unknown as string,
        ID.unique(),
        file
    );
    return data;
}
