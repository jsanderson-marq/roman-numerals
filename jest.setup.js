const dotenv = require("dotenv");

// Load environment variables from .env files (most specific to least specific)
dotenv.config({ path: ".env", quiet: true });
