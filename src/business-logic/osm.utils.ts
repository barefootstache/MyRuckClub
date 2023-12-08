import L, { Icon, IconOptions } from "leaflet";
import { EventType } from "./events.model";

/**
 * Gets the pin icon.
 * @param name - the name of the pin
 * @param scale - the division amount, so for half it is 2
 * @returns the pin icon
 */
export function getPin(name: EventType, scale = 1): Icon {
  scale = scale === 0 ? 1 : scale;
  const iconOptions = {
    iconSize: [40/scale, 60/scale],
    iconAnchor: [20/scale, 60/scale]
  } as Partial<IconOptions>;

  switch (name) {
    case 'ruck':
      return L.icon({
        ...iconOptions,
        iconUrl: '/ruck_pin.png'
      });
    case 'default':
      return L.icon({
        ...iconOptions,
        iconUrl: '/hq_pin.png'
      });
    case 'pt':
      return L.icon({
        ...iconOptions,
        iconUrl: '/pt_pin.png'
      });
  }
}
