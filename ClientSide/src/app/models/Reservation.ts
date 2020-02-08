export class Reservation {
    id: number;
    name: string;
    serviceId: number;
    placeId: number;
    employeeId: number;
    start: string;
    end: string;
    code: string;
    state: number;
    possibleNewStates: Array<number>;
    capacity: number;
    color: string;
    timeInSeconds: number;
}