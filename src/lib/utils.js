import {clsx} from 'clsx';
import { twMerge } from 'tailwind-merge';

// lets us use multiple classnames instead of just one in a function
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}; 