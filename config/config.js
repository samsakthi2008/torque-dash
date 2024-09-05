let config = {
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.DATABASE_URL || 'postgres://postgres:fSI0jmXBWZCYDAol5XEY@torque-dash.chu3jv8rnovy.ap-south-1.rds.amazonaws.com:5432/torque-dash',
        options: {
            logging: true
        }
    },
    session: {
        keys: process.env.SESSION_KEYS || ['6a5w4d65a4wd', 'a65w4d6aw4d89a4', '65f4b8b4szd8']
    }
};

module.exports = config;