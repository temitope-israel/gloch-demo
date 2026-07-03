import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'


/**
 * cn() combines clsx (conditional classNames) with tailwind-merge
 * (conflict resolution between Tailwind utility classes).
 *
 * Example:
 * cn('p-4 bg-white', isActive && 'bg-gold', className)
 *
 * Without tailwind-merge, if both 'bg-white' and 'bg-gold' are present,
 * Tailwind would apply whichever comes LAST in the generated CSS file
 * (unpredictable). tailwind-merge intelligently keeps only the intended one.
 */

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs));
}



