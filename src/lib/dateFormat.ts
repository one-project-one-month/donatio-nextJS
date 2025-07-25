import { format, isToday } from 'date-fns';

export const ISODateFormat = (date: Date | string): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  if (isToday(date)) {
    return 'today';
  }

  return format(date, 'M/d/yyyy');
};


export const ISOTimeFormat = (date: Date | string): string => {

    if(typeof date === 'string') {
        date = new Date(date);
    }

    return format(date, 'h:mm a');
}