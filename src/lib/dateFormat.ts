import { format } from 'date-fns/format';

export const ISODateFormat = (date: Date | string): string => {

    if (typeof date === 'string') {
        date = new Date(date);
    }
    return format(date, 'M/d/yyyy');

}