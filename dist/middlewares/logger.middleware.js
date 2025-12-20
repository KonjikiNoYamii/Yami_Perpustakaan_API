export const requestLogger = (req, _res, next) => {
    console.log(`Request masuk: ${req.method} ${req.path}`);
    // Log semua headers
    console.log("Headers:", req.headers);
    // Simpan waktu mulai request
    req.startTime = Date.now();
    next();
};
//# sourceMappingURL=logger.middleware.js.map