const dev = process.env.NODE_ENV !== 'production';

export const s3Region = 'us-west-2';
export const s3Name = 'deliverysh';
export const server = dev ? 'http://localhost:3000' : 'https://use.delivery';
export const s3Url = 'http://deliverysh.s3-website-us-west-2.amazonaws.com/';
