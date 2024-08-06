import { ClubEvent } from '@/business-logic/events.model';
import { createClubEvent } from '@/business-logic/events.utils';

export const ClubEvents: ClubEvent[] = [
  createClubEvent('2024-08-06', 'auxruckers'),
  createClubEvent('2024-08-06', 'theshed_healthclub'),
  createClubEvent('2024-08-07', 'goruck_club_franken'),
  createClubEvent('2024-08-08', 'teutorucker'),
  createClubEvent('2024-08-08', 'ruhr_ruckers'),
  createClubEvent('2024-08-10', 'herzschlagruckerz'),
  createClubEvent('2024-08-11', 'ybbsvalleyruckers', {
    location: 'Parkplatz Ybbstalradweg Opponitz/Gstadt',
    coordinates: [47.87246, 14.80351],
  }),
  createClubEvent('2024-08-13', 'auxruckers'),
  createClubEvent('2024-08-13', 'theshed_healthclub'),
  createClubEvent('2024-08-14', 'goruck_club_franken'),
  createClubEvent('2024-08-15', 'teutorucker'),
  createClubEvent('2024-08-15', 'ruhr_ruckers'),
  createClubEvent('2024-08-16', 'goruck', {
    name: 'Ingress Stealth Ops',
    time: '17:00',
    location:
      'Depot Boijmans Van Beuningen, Museumpark 24, 3015 CX Rotterdam, Netherlands',
    coordinates: [51.91415, 4.47109],
    url: 'https://registration.goruck.com/event/ingress-stealth-ops-rotterdam-netherlands',
    duration: { hours: 7 },
  }),
  createClubEvent('2024-08-17', 'goruck', {
    name: 'Ingress Urban Ops',
    time: '10:00',
    location:
      'Depot Boijmans Van Beuningen, Museumpark 24, 3015 CX Rotterdam, Netherlands',
    coordinates: [51.91415, 4.47109],
    url: 'https://registration.goruck.com/event/ingress-urban-ops-rotterdam-netherlands',
    duration: { hours: 3 },
  }),
  createClubEvent('2024-08-17', 'herzschlagruckerz'),
  createClubEvent('2024-08-18', 'goruck', {
    name: 'Ingress Operation Clear Field',
    time: '10:00',
    location:
      'Depot Boijmans Van Beuningen, Museumpark 24, 3015 CX Rotterdam, Netherlands',
    coordinates: [51.91415, 4.47109],
    url: 'https://registration.goruck.com/event/ingress-operation-clear-field-rotterdam-netherlands',
    duration: { hours: 4 },
  }),
  createClubEvent('2024-08-20', 'auxruckers'),
  createClubEvent('2024-08-20', 'theshed_healthclub'),
  createClubEvent('2024-08-21', 'goruck_club_franken'),
  createClubEvent('2024-08-22', 'teutorucker'),
  createClubEvent('2024-08-22', 'ruhr_ruckers'),
  createClubEvent('2024-08-24', 'herzschlagruckerz'),
  createClubEvent('2024-08-27', 'auxruckers'),
  createClubEvent('2024-08-27', 'theshed_healthclub'),
  createClubEvent('2024-08-28', 'goruck_club_franken'),
  createClubEvent('2024-08-29', 'teutorucker'),
  createClubEvent('2024-08-29', 'ruhr_ruckers'),
  createClubEvent('2024-08-31', 'herzschlagruckerz'),
  createClubEvent('2024-09-03', 'auxruckers'),
  createClubEvent('2024-09-03', 'theshed_healthclub'),
  createClubEvent('2024-09-04', 'goruck_club_franken'),
  createClubEvent('2024-09-05', 'teutorucker'),
  createClubEvent('2024-09-05', 'ruhr_ruckers'),
  createClubEvent('2024-09-07', 'herzschlagruckerz'),
  createClubEvent('2024-09-07', 'nolimits_deutschland', {
    duration: { hours: 24 },
  }),
  createClubEvent('2024-09-10', 'auxruckers'),
  createClubEvent('2024-09-10', 'theshed_healthclub'),
  createClubEvent('2024-09-11', 'goruck_club_franken'),
  createClubEvent('2024-09-12', 'teutorucker'),
  createClubEvent('2024-09-12', 'ruhr_ruckers'),
  createClubEvent('2024-09-14', 'herzschlagruckerz'),
  createClubEvent('2024-09-14', 'blackout_the_limit', {
    location:
      'Riginal CrossFit Nürnberg, Lenkersheimer Straße 10A, 90431 Nuremberg, Germany',
    url: 'https://www.blackoutthelimit.de/products/event-operation-workhorse-volume-3?variant=49175098654988',
    coordinates: [49.44856, 11.01473],
  }),
  createClubEvent('2024-09-21', 'munichruckingcrew', {
    name: 'Cloverleaf',
    time: '10:00',
    duration: { hours: 5 },
  }),
  createClubEvent('2024-11-01', 'goruck', {
    name: 'Ingress Stealth Ops',
    time: '17:00',
    location: 'Valencia, Spain',
    coordinates: [39.4704, -0.3767],
    url: 'https://registration.goruck.com/event/ingress-stealth-ops---valencia-spain',
    duration: { hours: 7 },
  }),
  createClubEvent('2024-11-02', 'goruck', {
    name: 'Ingress Urban Ops',
    time: '10:00',
    location: 'Valencia, Spain',
    coordinates: [39.4704, -0.3767],
    url: 'https://registration.goruck.com/event/ingress-urban-ops-valencia-spain',
    duration: { hours: 3 },
  }),
  createClubEvent('2024-11-03', 'goruck', {
    name: 'Ingress Operation Clear Field',
    time: '10:00',
    location: 'Valencia, Spain',
    coordinates: [39.4704, -0.3767],
    url: 'https://registration.goruck.com/event/ingress-operation-clear-field---valencia-spain',
    duration: { hours: 4 },
  }),
  createClubEvent('2024-11-09', 'teutorucker', {
    name: 'Chad 1000x'
  }),
  createClubEvent('2025-05-16', 'teutorucker', {
    name: 'Operation Chastise',
    time: '20:00',
    coordinates: [51.49148, 8.06131],
    location: 'Mahnmal der Möhnekatastrophe von Mai 1943'
  }),
  createClubEvent('2025-05-30', 'goruck', {
    name: '100km Ruck Normandy',
    time: '19:00',
    location:
      'UTAH Beach Landing Museum, La Madeleine, 50480 Sainte-Marie-du-Mont, France',
    coordinates: [49.41519, -1.17528],
    url: 'https://registration.goruck.com/event/100km---ruck-normandy',
    duration: { hours: 24 },
  }),
  createClubEvent('2025-05-30', 'goruck', {
    name: '80km Ruck Normandy',
    time: '19:00',
    location:
      'UTAH Beach Landing Museum, La Madeleine, 50480 Sainte-Marie-du-Mont, France',
    coordinates: [49.41519, -1.17528],
    url: 'https://registration.goruck.com/event/80km---ruck-normandy',
    duration: { hours: 20 },
  }),
  createClubEvent('2025-05-31', 'goruck', {
    name: '42km Ruck Normandy',
    time: '07:00',
    location:
      'Le DéBARcadère, 62 Quai Henri Chéron, 14450 Grandcamp-Maisy, France',
    coordinates: [49.38913, -1.04142],
    url: 'https://registration.goruck.com/event/42km---ruck-normandy',
  }),
  createClubEvent('2025-05-31', 'goruck', {
    name: '20km Ruck Normandy',
    time: '08:00',
    location:
      'PARKING du Littoral, 1114 Moulins, 14710 Colleville-sur-Mer, France',
    coordinates: [49.35789, -0.85035],
    url: 'https://registration.goruck.com/event/20km---ruck-normandy',
  }),
  createClubEvent('2025-05-31', 'goruck', {
    name: '10km Ruck Normandy',
    time: '09:00',
    location:
      'Omaha Beach Memorial, Av. de la Libération, 14710 Saint-Laurent-sur-Mer, France',
    coordinates: [49.37089, -0.87953],
    url: 'https://registration.goruck.com/event/10km---ruck-normandy',
  }),
  createClubEvent('2025-05-31', 'goruck', {
    name: '5km Ruck Normandy',
    time: '10:00',
    location: '17 Rue Talbot, 14450 Cricqueville-en-Bessin, France',
    coordinates: [49.39317, -0.98682],
    url: 'https://registration.goruck.com/event/5km---ruck-normandy',
  }),
  createClubEvent('2025-06-02', 'goruck', {
    name: 'Airborne Basic - Normandy',
    time: '00:00',
    location:
      'Sainte-Mere Eglise Church, Rue Koenig, 50480 Sainte-Mère-Église, France',
    coordinates: [49.40869, -1.31622],
    url: 'https://registration.goruck.com/event/airborne-basic---normandy',
    duration: { hours: 6 },
  }),
  createClubEvent('2025-06-02', 'goruck', {
    name: 'Utah Beach Basic - Normandy',
    time: '07:00',
    location:
      'UTAH Beach Landing Museum, La Madeleine, 50480 Sainte-Marie-du-Mont, France',
    coordinates: [49.41519, -1.17528],
    url: 'https://registration.goruck.com/event/utah-beach-basic---normandy',
    duration: { hours: 6 },
  }),
  createClubEvent('2025-06-03', 'goruck', {
    name: 'Omaha Beach Basic - Normandy',
    time: '07:00',
    location:
      'Omaha Beach Memorial, Av. de la Libération, 14710 Saint-Laurent-sur-Mer, France',
    coordinates: [49.37089, -0.87953],
    url: 'https://registration.goruck.com/event/omaha-beach-basic---normandy',
    duration: { hours: 6 },
  }),
  createClubEvent('2025-06-03', 'goruck', {
    name: 'Gold Beach Basic - Normandy',
    time: '13:00',
    location:
      'British Normandy Memorial, 13 Av. Paul Poret, 14114 Ver-sur-Mer, France',
    coordinates: [49.33668, -0.52841],
    url: 'https://registration.goruck.com/event/gold-beach-basic---normandy',
    duration: { hours: 6 },
  }),
  createClubEvent('2025-06-04', 'goruck', {
    name: 'Juno Beach Basic - Normandy',
    time: '07:00',
    location:
      'Juno Beach Centre, Voie des Français Libres, 14470 Courseulles-sur-Mer, France',
    coordinates: [49.33684, -0.46479],
    url: 'https://registration.goruck.com/event/juno-beach-basic---normandy',
    duration: { hours: 6 },
  }),
  createClubEvent('2025-06-04', 'goruck', {
    name: 'Sword Beach Basic - Normandy',
    time: '13:00',
    location:
      'Sword Beach-Queen Red Sector, Bd maritime, 14880 Colleville-Montgomery, France',
    coordinates: [49.29347, -0.28313],
    url: 'https://registration.goruck.com/event/sword-beach-basic---normandy',
    duration: { hours: 6 },
  }),
];