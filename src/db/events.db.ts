import { ClubEvent } from "@/business-logic/events.model";
import { createClubEvent } from "@/business-logic/events.utils";

export const ClubEvents: ClubEvent[] = [
  createClubEvent('2024-06-08', 'herzschlagruckerz'),
  createClubEvent('2024-06-08', 'herzschlagruckerz', {name: 'Hürtgenwald Ruck', location: 'Baptist-Palm-Platz, Vossenach, Germany', coordinates: [50.68580,6.37393]}),
  createClubEvent('2024-06-11', 'auxruckers'),
  createClubEvent('2024-06-12', 'goruck_club_franken'),
  createClubEvent('2024-06-13', 'teutorucker'),
  createClubEvent('2024-06-13', 'ruhr_ruckers'),
  createClubEvent('2024-06-13', 'munichruckingcrew'),
  createClubEvent('2024-06-14', 'goruck', {name: 'Ingress Stealth Ops', location: 'Babits Mihály Statue, Budapest, Hungary', coordinates: [47.50020,19.02773], time: '19:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/32d3e58e-030e-4163-937b-e26ed30e3fa4'}),
  createClubEvent('2024-06-15', 'goruck', {name: 'Ingress Urban Ops', location: 'Babits Mihály Statue, Budapest, Hungary', coordinates: [47.50020,19.02773], time: '10:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/9711d917-b949-4547-9615-65540b97ac74'}),
  createClubEvent('2024-06-15', 'herzschlagruckerz'),
  createClubEvent('2024-06-15', 'skylineruckers', {name: 'Skyline Ruckers Club Cloverleaf Bronze', time: '13:00', type: 'ruck', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeBNRidYZp0FgxAXZ7rT10jwjVbkIaq0n0kwry9YeQtDrALRA/viewform'}),
  createClubEvent('2024-06-16', 'goruck', {name: 'Ingress Operation Clear Field', location: 'Babits Mihály Statue, Budapest, Hungary', coordinates: [47.50020,19.02773], time: '10:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/b6a409c2-c767-427d-a72c-88b9137cea8f'}),
  createClubEvent('2024-06-18', 'auxruckers'),
  createClubEvent('2024-06-19', 'goruck_club_franken'),
  createClubEvent('2024-06-20', 'teutorucker'),
  createClubEvent('2024-06-20', 'ruhr_ruckers'),
  createClubEvent('2024-06-20', 'munichruckingcrew'),
  createClubEvent('2024-06-22', 'herzschlagruckerz', {name: 'Goruck Herzschlag Summer times blues powered by Patrick', time: '09:00'}),
  createClubEvent('2024-06-25', 'auxruckers'),
  createClubEvent('2024-06-26', 'goruck_club_franken'),
  createClubEvent('2024-06-27', 'teutorucker'),
  createClubEvent('2024-06-27', 'ruhr_ruckers'),
  createClubEvent('2024-06-27', 'munichruckingcrew'),
  createClubEvent('2024-06-29', 'herzschlagruckerz'),
  createClubEvent('2025-05-30', 'goruck', {name: '100km Ruck Normandy', time: '19:00', location: 'UTAH Beach Landing Museum, La Madeleine, 50480 Sainte-Marie-du-Mont', coordinates: [49.41519,-1.17528], url:'https://registration.goruck.com/event/100km---ruck-normandy'}),
  createClubEvent('2025-05-30', 'goruck', {name: '80km Ruck Normandy', time: '19:00', location: 'UTAH Beach Landing Museum, La Madeleine, 50480 Sainte-Marie-du-Mont', coordinates: [49.41519,-1.17528], url:'https://registration.goruck.com/event/80km---ruck-normandy'}),
  createClubEvent('2025-05-31', 'goruck', {name: '42km Ruck Normandy', time: '07:00', location: 'Le DéBARcadère, 62 Quai Henri Chéron, 14450 Grandcamp-Maisy', coordinates: [49.38913,-1.04142], url:'https://registration.goruck.com/event/42km---ruck-normandy'}),
  createClubEvent('2025-05-31', 'goruck', {name: '20km Ruck Normandy', time: '08:00', location: 'PARKING du Littoral, 1114 Moulins, 14710 Colleville-sur-Mer', coordinates: [49.35789,-0.85035], url:'https://registration.goruck.com/event/20km---ruck-normandy'}),
  createClubEvent('2025-05-31', 'goruck', {name: '10km Ruck Normandy', time: '09:00', location: 'Omaha Beach Memorial, Av. de la Libération, 14710 Saint-Laurent-sur-Mer', coordinates: [49.37089,-0.87953], url:'https://registration.goruck.com/event/10km---ruck-normandy'}),
  createClubEvent('2025-05-31', 'goruck', {name: '5km Ruck Normandy', time: '10:00', location: '17 Rue Talbot, 14450 Cricqueville-en-Bessin', coordinates: [49.39317,-0.98682], url:'https://registration.goruck.com/event/5km---ruck-normandy'}),
  createClubEvent('2025-06-02', 'goruck', {name: 'Airborne Basic - Normandy', time: '00:00', location: 'Sainte-Mere Eglise Church, Rue Koenig, 50480 Sainte-Mère-Église', coordinates: [49.40869,-1.31622], url:'https://registration.goruck.com/event/airborne-basic---normandy'}),
  createClubEvent('2025-06-02', 'goruck', {name: 'Utah Beach Basic - Normandy', time: '07:00', location: 'UTAH Beach Landing Museum, La Madeleine, 50480 Sainte-Marie-du-Mont', coordinates: [49.41519,-1.17528], url:'https://registration.goruck.com/event/utah-beach-basic---normandy'}),
  createClubEvent('2025-06-03', 'goruck', {name: 'Omaha Beach Basic - Normandy', time: '07:00', location: 'Omaha Beach Memorial, Av. de la Libération, 14710 Saint-Laurent-sur-Mer', coordinates: [49.37089,-0.87953], url:'https://registration.goruck.com/event/omaha-beach-basic---normandy'}),
  createClubEvent('2025-06-03', 'goruck', {name: 'Gold Beach Basic - Normandy', time: '13:00', location: 'British Normandy Memorial, 13 Av. Paul Poret, 14114 Ver-sur-Mer', coordinates: [49.33668,-0.52841], url:'https://registration.goruck.com/event/gold-beach-basic---normandy'}),
  createClubEvent('2025-06-04', 'goruck', {name: 'Juno Beach Basic - Normandy', time: '07:00', location: 'Juno Beach Centre, Voie des Français Libres, 14470 Courseulles-sur-Mer', coordinates: [49.33684,-0.46479], url:'https://registration.goruck.com/event/juno-beach-basic---normandy'}),
  createClubEvent('2025-06-04', 'goruck', {name: 'Sword Beach Basic - Normandy', time: '13:00', location: 'Sword Beach-Queen Red Sector, Bd maritime, 14880 Colleville-Montgomery', coordinates: [49.29347,-0.28313], url:'https://registration.goruck.com/event/sword-beach-basic---normandy'}),
]

