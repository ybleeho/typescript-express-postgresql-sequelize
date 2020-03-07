import * as env from '@config/env.json'

const nodeEnv = process.env.NODE_ENV;

export const config = {
    env: nodeEnv || 'development',
    port: process.env.PORT || '3000',
    jwtSecret: 'secret-b3-CtXMdcWWLljKZvA0QsuC4dTueqhPhi8j',
    jwtStaffSecret: 'secret-b3-staff-LbGfVjm4naBc5NDUAbkn0qX3a5q72dYB',
    ...env[nodeEnv]
}
