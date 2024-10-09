import { S3 } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

class UploadServiceS3 {
    private s3: S3;

    constructor() {
        this.s3 = new S3({
            region: process.env.AWS_REGION, // e.g., 'us-east-1'
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
            },
        });
    }

    async uploadSinglePhoto(fileBuffer: Buffer, fileName: string): Promise<{ url: string }> {
        const bucketName = process.env.AWS_BUCKET_NAME || ''; // Get bucket name from environment variable
        const uniqueFileName = `${Date.now()}-${fileName}`; // Create a unique file name

        // Create an upload instance
        const upload = new Upload({
            client: this.s3,
            params: {
                Bucket: bucketName,
                Key: uniqueFileName,
                Body: fileBuffer, // Should be a Buffer
                ContentType: 'image/jpeg', // Change as necessary
            },
        });

        // Execute the upload
        await upload.done();

        // Construct the URL to access the uploaded image
        const url = `https://${bucketName}.s3.amazonaws.com/${uniqueFileName}`;
        return { url };
    }


    async uploadMultiplePhotos(fileBuffers: Buffer[], fileNames: string[]): Promise<{ urls: string[] }> {
        const bucketName = process.env.AWS_BUCKET_NAME || ''; // Get bucket name from environment variable
        const promises: Promise<{ url: string }>[] = [];

        fileBuffers.forEach((fileBuffer, index) => {
            const fileName = fileNames[index];
            const uniqueFileName = `${Date.now()}-${fileName}`; // Create a unique file name

            // Create an upload instance
            const upload = new Upload({
                client: this.s3,
                params: {
                    Bucket: bucketName,
                    Key: uniqueFileName,
                    Body: fileBuffer, // Should be a Buffer
                    ContentType: 'image/jpeg', // Change as necessary
                },
            });

            // Execute the upload and add the promise to the array
            promises.push(upload.done().then(() => {
                // Construct the URL to access the uploaded image
                const url = `https://${bucketName}.s3.amazonaws.com/${uniqueFileName}`;
                return { url };
            }));
        });

        // Wait for all the promises to resolve
        const results = await Promise.all(promises);

        // Extract the URLs from the results
        const urls = results.map(result => result.url);

        return { urls };
    }


    async uploadVideo(fileBuffer: Buffer, fileName: string): Promise<{ url: string }> {
        const bucketName = process.env.AWS_BUCKET_NAME || ''; // Get bucket name from environment variable
        const uniqueFileName = `${Date.now()}-${fileName}`; // Create a unique file name

        // Create an upload instance
        const upload = new Upload({
            client: this.s3,
            params: {
                Bucket: bucketName,
                Key: uniqueFileName,
                Body: fileBuffer, // Should be a Buffer
                ContentType: 'video/mp4', // Change as necessary
            },
        });

        // Execute the upload
        await upload.done();

        // Construct the URL to access the uploaded image
        const url = `https://${bucketName}.s3.amazonaws.com/${uniqueFileName}`;
        return { url };
    }



}

const uploadFileToS3 = new UploadServiceS3();

export default uploadFileToS3;
