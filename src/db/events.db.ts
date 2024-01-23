import { ClubEvent } from "@/business-logic/events.model";
import { createClubEvent } from "@/business-logic/events.utils";

export const ClubEvents: ClubEvent[] = [
  createClubEvent('2024-01-07', 'ruhr_ruckers', {time: '09:00', name: 'Monthly Rucking Meet Up', type: 'ruck', coordinates: [51.39556, 7.31011], location: 'Haus Bommerholz, Witten'}),
  createClubEvent('2024-01-07', 'ruckithannover'),
  createClubEvent('2024-01-09', 'auxruckers'),
  createClubEvent('2024-01-11', 'munichruckingcrew'),
  createClubEvent('2024-01-16', 'auxruckers'),
  createClubEvent('2024-01-18', 'munichruckingcrew'),
  createClubEvent('2024-01-23', 'auxruckers'),
  createClubEvent('2024-01-25', 'munichruckingcrew'),
  createClubEvent('2024-01-30', 'auxruckers', {name: 'Polar Plunge Challenge', type: 'ruck'}),
  createClubEvent('2024-04-20', 'munichruckingcrew', {name: 'Milton Memorial Tough', location: 'Frankfurt am Main, Germany', coordinates: [50.10866, 8.67352], time: '09:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/8d01fbfb-55c1-4c28-8b01-76995933f4fb'}),
  createClubEvent('2024-05-27', 'goruck', {name: 'Selection', location: 'Monument Signal de la Libération, Les Moulins, France', coordinates: [49.37069,-0.87970], time: '19:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/8e28c5f1-8774-411b-9fd3-4d75be723d83'}),
  createClubEvent('2024-05-29', 'goruck', {name: 'Selection Workout/Watch Party', location: 'Villa le Manoir, Grandcamp-Maisy, France', coordinates: [49.38864,-1.03731], time: '16:00', type: 'pt', url: 'https://fistbumps.sandlot.fit/fistbump/d190fbda-6230-44ff-a9ff-a7755904f847'}),
  createClubEvent('2024-05-31', 'goruck', {name: 'Normandy GORUCK Party (D-Day WOD)', location: 'Villa le Manoir, Grandcamp-Maisy, France', coordinates: [49.38864,-1.03731], time: '21:00', type: 'pt', url: 'https://fistbumps.sandlot.fit/fistbump/7bf4fca6-e0d5-423c-977f-d6dbab4dc033'}),
  createClubEvent('2024-06-02', 'goruck', {name: '80km - Ruck Normandy', location: 'Utah Beach, France', coordinates: [49.41589,-1.17458], time: '01:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/a95e51d6-b6bd-42f2-a17a-bb1becba879a'}),
  createClubEvent('2024-06-02', 'goruck', {name: '26.2 mile - Ruck Normandy', location: 'Villa le Manoir, Grandcamp-Maisy, France', coordinates: [49.38864,-1.03731], time: '12:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/e7fd0573-dbaa-41c7-b9c4-2ef907b7efd7'}),
  createClubEvent('2024-06-02', 'goruck', {name: '15 miler - Ruck Normandy', location: 'Pointe du Hoc, Normandy, France', coordinates: [49.39717,-0.98930], time: '16:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/f29c691d-451c-4370-aa52-b8bf45e2027b'}),
  createClubEvent('2024-06-02', 'goruck', {name: '15km - Ruck Normandy', location: 'Monument Signal de la Libération, Les Moulins, France', coordinates: [49.37069,-0.87970], time: '17:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/42c23594-87f0-446d-bcfb-faa964a80a44'}),
  createClubEvent('2024-06-02', 'goruck', {name: '5km - Ruck Normandy', location: 'Pointe du Hoc, Normandy, France', coordinates: [49.39717,-0.98930], time: '18:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/ff2e112d-b597-4097-9263-8ee5d300217d'}),
  createClubEvent('2024-06-03', 'goruck', {name: 'Normandy Tough Challenge', location: 'Monument Signal de la Libération, Les Moulins, France', coordinates: [49.37069,-0.87970], time: '13:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/ed8549c2-1ad4-4f72-a466-17b6f0c51d19'}),
  createClubEvent('2024-06-04', 'goruck', {name: 'Normandy Basic Challenge', location: 'Monument Signal de la Libération, Les Moulins, France', coordinates: [49.37069,-0.87970], time: '13:00', type: 'ruck', url: 'https://fistbumps.sandlot.fit/fistbump/a6810da5-4f09-42f2-8f72-38773dcdb490'}),
  createClubEvent('2024-06-04', 'goruck', {name: 'Normandy Light Challenge', location: 'Pointe du Hoc, Normandy, France', coordinates: [49.39717,-0.98930], time: '19:00', type: 'pt', url: 'https://fistbumps.sandlot.fit/fistbump/44f81481-62cf-4628-b23a-7868e2e6ccbc'}),
]

