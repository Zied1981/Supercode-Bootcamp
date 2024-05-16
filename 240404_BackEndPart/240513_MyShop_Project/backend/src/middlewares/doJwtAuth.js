import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export async function doJwtAuth(req, res, next) {
  const _invalidAuth = (message) =>
    res.status(401).json({ message: message || "Invalid auth" }); // 401 Status Unauthorized!

  if (!req.headers.authorization) return _invalidAuth();

  // req.headers.authorization ====> "Bearer eyJhbGciOiJIUzI1Ni..."
  const [authType, tokenString] = req.headers.authorization.split(" ");
  if (authType !== "Bearer" || !tokenString) return _invalidAuth();

  const verifyToken = createTokenVerifier(req, res, next);
  verifyToken(tokenString, "access");
}

export async function validateRefreshTokenInCookieSession(req, res, next) {
  if (!req.session.refreshToken) return _invalidAuth(res);
  const verifyToken = createTokenVerifier(req, res, next);
  verifyToken(req.session.refreshToken, "refresh");
}

try {
  const verifiedTokenClaims = jwt.verify(tokenString, jwtSecret); // Claims sind Behauptungen der TokenPayload

  if (verifiedTokenClaims.type !== expectType) return _invalidAuth(res);

  req.authenticatedUserId = verifiedTokenClaims.sub; // verifiedTokenClaims = TokenPayload = { sub, type, iat, exp }
  /*   req.verifiedTokenClaims = verifiedTokenClaims; // extra für refresh token */

  next();
} catch (err) {
  console.log(err);
  return _invalidAuth();
}
