import { format } from 'date-fns';

export const Today = () => {
  return format(new Date(), 'yyyy-MM-dd');
};
