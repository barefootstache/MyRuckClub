import { ClubEvent } from '@/business-logic/events.model';
import { createClubEvent } from '@/business-logic/events.utils';

export const ClubEvents: ClubEvent[] = [
  createClubEvent('2024-07-23', 'auxruckers'),
  createClubEvent('2024-07-23', 'theshed_healthclub'),
  createClubEvent('2024-07-24', 'goruck_club_franken'),
  createClubEvent('2024-07-25', 'teutorucker'),
  createClubEvent('2024-07-25', 'ruhr_ruckers'),
  createClubEvent('2024-07-25', 'munichruckingcrew'),
  createClubEvent('2024-07-26', 'goruck', {
    name: 'Scavenger Hunt',
    time: '17:30',
    location: 'Riginal CrossFit, Nürnberg',
    coordinates: [49.44846, 11.01471],
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeLJ1mCbAqnCg51hBFDQE4Md4ZZUOBB1GZuLGaf8W0x5IRWfw/viewform',
  }),
  createClubEvent('2024-07-27', 'goruck', {
    name: 'Sandbag and Ruck Training Course',
    time: '10:30',
    type: 'pt',
    location: 'Riginal CrossFit, Nürnberg',
    coordinates: [49.44846, 11.01471],
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSd_MxcfDl0r2-5eSvv6KrVNh2BOgTqUtrpztUQZrWou_z3QDA/viewform',
  }),
  createClubEvent('2024-07-27', 'goruck', {
    name: 'Team Building Challenge',
    time: '16:30',
    location: 'Riginal CrossFit, Nürnberg',
    coordinates: [49.44846, 11.01471],
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfeHObIwAestEIBFE9eLHh4FdKB1oQVYXDtRv5YIC3d8r-Cmg/viewform',
  }),
  createClubEvent('2024-07-27', 'herzschlagruckerz', { time: '16:00' }),
  createClubEvent('2024-07-30', 'auxruckers'),
  createClubEvent('2024-07-30', 'theshed_healthclub'),
  createClubEvent('2024-07-31', 'goruck_club_franken'),
  createClubEvent('2024-08-01', 'teutorucker'),
  createClubEvent('2024-08-01', 'ruhr_ruckers'),
  createClubEvent('2024-08-01', 'munichruckingcrew', {
    time: '18:00',
    name: '12 Miler Ruck',
    duration: { hours: 4 },
  }),
  createClubEvent('2024-08-03', 'herzschlagruckerz'),
  createClubEvent('2024-08-03', 'goruck_club_franken', {
    name: 'Team Challenge Extraction',
    time: '10:00',
  }),
  createClubEvent('2024-08-03', 'goruck_club_franken', {
    name: 'GORUCK Boule and Cornhole',
    time: '14:00',
  }),
  createClubEvent('2024-08-03', 'goruck_club_franken', {
    name: 'Beer Mile: Take a Drink',
    time: '16:30',
    type: 'ruck',
  }),
  createClubEvent('2024-08-03', 'goruck_club_franken', {
    name: 'Community Meeting: Bayreuth City',
    time: '20:30',
  }),
  createClubEvent('2024-08-04', 'goruck_club_franken', {
    name: 'Rain Ruck',
    time: '10:00',
    type: 'ruck',
  }),
  createClubEvent('2024-08-04', 'goruck_club_franken', {
    name: 'Barbecue and Beer',
    time: '13:30',
  }),
  createClubEvent('2024-08-06', 'theshed_healthclub'),
  createClubEvent('2024-08-11', 'ybbsvalleyruckers', {
    location: 'Parkplatz Ybbstalradweg Opponitz/Gstadt',
    coordinates: [47.87246, 14.80351],
  }),
  createClubEvent('2024-08-13', 'theshed_healthclub'),
  createClubEvent('2024-08-16', 'goruck', {
    name: 'Ingress Stealth Ops',
    time: '17:00',
    location: 'Rotterdam, Netherlands',
    coordinates: [51.92216, 4.46664],
    url: 'https://registration.goruck.com/event/ingress-stealth---rotterdam-netherlands---08162024',
    duration: { hours: 7 },
  }),
  createClubEvent('2024-08-17', 'goruck', {
    name: 'Ingress Urban Ops',
    time: '10:00',
    location: 'Rotterdam, Netherlands',
    coordinates: [51.92216, 4.46664],
    url: 'https://registration.goruck.com/event/ingress-urban---rotterdam-netherlands---08172024',
  }),
  createClubEvent('2024-08-18', 'goruck', {
    name: 'Ingress Operation Clear Field',
    time: '10:00',
    location: 'Rotterdam, Netherlands',
    coordinates: [51.92216, 4.46664],
    url: 'https://registration.goruck.com/event/ingress-operation-clear-field---rotterdam-netherlands---08182024',
    duration: { hours: 4 },
  }),
  createClubEvent('2024-08-20', 'theshed_healthclub'),
  createClubEvent('2024-08-27', 'theshed_healthclub'),
  createClubEvent('2024-09-07', 'nolimits_deutschland', {
    duration: { hours: 24 },
  }),
  createClubEvent('2024-09-14', 'blackout_the_limit', {
    location:
      'Riginal CrossFit Nürnberg, Lenkersheimer Straße 10A, 90431 Nuremberg, Germany',
    coordinates: [49.44856, 11.01473],
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
