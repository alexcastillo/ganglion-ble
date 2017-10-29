
export const GANGLION_SERVICE_ID = 0xfe84;
export const CHARACTERISTICS = {
    reader: '2d30c082-f39f-4ce6-923f-3484ea480596',
    writer: '2d30c083-f39f-4ce6-923f-3484ea480596',
    connection: '2d30c084-f39f-4ce6-923f-3484ea480596'
};
export const CHARACTERISTIC_EVENT = 'characteristicvaluechanged';
export const DEVICE_OPTIONS = {
    filters: [
        { namePrefix: 'Ganglion-' }
    ],
    optionalServices: [GANGLION_SERVICE_ID]
};
export const START_COMMAND_STRING = 'b';