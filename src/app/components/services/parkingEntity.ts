import { VehicleEntity } from './vehicleEntity';

export class ParkingEntity {
    idParking: number;
    inDate: Date;
    outDate: Date;
    status:boolean;
    payment: number;
    vechicle: VehicleEntity;
}