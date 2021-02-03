import bcryptjs from 'bcryptjs';

export const hash = async (value: string): Promise<string> => {
    const salt = process.env.SALT || 10;
    return bcryptjs.hash(value, salt);
};

export const compareHash = async (value: string, hash: string): Promise<boolean> => {
    return bcryptjs.compare(value, hash);
};
