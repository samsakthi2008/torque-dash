const fs = require('fs');
const path = require('path');

// Define the path to the certificate file
const certPath = path.join(__dirname,  'certs', 'ca.pem');

// Read the certificate file
const cert = fs.readFileSync(certPath).toString();
let config = {
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.DATABASE_URL || 'postgres://avnadmin:AVNS_a2Y3nNNdnwdtWDvLRnY@pg-6124afa-torque-dash.e.aivencloud.com:19018/defaultdb?sslmode=require',
        options: {
            logging: true
        },
        ssl: {
            rejectUnauthorized: true,  // Set to false if you do not want to verify the server certificate
            cert: cert
        }
    },
    session: {
        keys: process.env.SESSION_KEYS || ['6a5w4d65a4wd', 'a65w4d6aw4d89a4', '65f4b8b4szd8']
    }
};

module.exports = config;