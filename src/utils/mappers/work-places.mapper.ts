import { IWorkPlacesMapped } from 'store/api/form2/types/work-places-response.interface';

export const workPlacesMapper = (workPlaces: string[]): IWorkPlacesMapped[] => {
  return workPlaces.map((value) => ({
    text: value,
    value: value,
  }));
};
