const {
    commonFunctions,
    log,
    appErrors,
} = global;

const { Users } = global.db;

module.exports = function () {
    return async (req, res, next) => {
        const { authorization } = req.headers;
        if (!authorization) return res.http401(appErrors.authorizationHeaderMissing);

        try {
            const token = authorization.split(' ')[1];
            const decodedToken = await commonFunctions.decodeAPiToken(token);

            if (!decodedToken) return res.http401(appErrors.invalidToken);

            
                const user = await Users.findOne({
                    id: decodedToken.id,
                    deleted: false,
                });
            
            
            if (!user) return res.http401(appErrors.invalidToken);
            req.user = user;
            next();
        } catch (error) {
            log.error(error);
            return res.http401(appErrors.invalidToken);
        }
    };
};
