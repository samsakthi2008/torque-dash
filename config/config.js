let config = {
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.DATABASE_URL || 'postgres://torque-dash1-main-db-0e583f2559aa3181f:JdCC12SjudeNAhfvPUA8PfJqewqQ2Y@user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com:5432/torque-dash1-main-db-0e583f2559aa3181f',
        options: {
            logging: false
        }
    },
    session: {
        keys: process.env.SESSION_KEYS || ['6a5w4d65a4wd', 'a65w4d6aw4d89a4', '65f4b8b4szd8']
    }
};

module.exports = config;