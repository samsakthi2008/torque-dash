let config = {
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.DATABASE_URL || 'postgres://avnadmin:AVNS_a2Y3nNNdnwdtWDvLRnY@pg-6124afa-torque-dash.e.aivencloud.com:19018',
        options: {
            logging: true
        }
    },
    session: {
        keys: process.env.SESSION_KEYS || ['6a5w4d65a4wd', 'a65w4d6aw4d89a4', '65f4b8b4szd8']
    }
};

module.exports = config;