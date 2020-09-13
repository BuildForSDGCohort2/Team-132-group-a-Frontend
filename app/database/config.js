var _config = {
	hostname: process.env.OPENSHIFT_MYSQL_DB_HOST || 'localhost',
    user: 'b4ff78d117cc32',
    password: '2ebf249d',
    database: 'heroku_ecc52e23303dc4f',
	port: process.env.OPENSHIFT_MYSQL_DB_PORT || '2212'
};
exports.mysqlConfig = _config;