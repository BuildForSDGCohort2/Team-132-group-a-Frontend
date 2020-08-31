var _config = {
	hostname: process.env.OPENSHIFT_MYSQL_DB_HOST,
    user: 'root',
    password: 'Voltigeon.3',
    database: 'tosala_workspace',
	port: process.env.OPENSHIFT_MYSQL_DB_PORT
};
exports.mysqlConfig = _config;