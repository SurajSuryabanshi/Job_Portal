const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 8000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb+srv://naheedimani:webappdev@jobboardapi.uldgjvy.mongodb.net/jobBoard?retryWrites=true&w=majority'
};

module.exports = config;
