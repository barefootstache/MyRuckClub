import { ClubEvent } from "@/business-logic";
import { TursoService } from "@/services";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useClubEventsStore = defineStore('clubEvents', () => {
  const list = ref([] as ClubEvent[]);

  async function registerClubEventsList(refresh = false) {
    try {
      if (list.value.length === 0 || refresh) {
        list.value = await TursoService.getFutureEventsV2();
      }
    } catch (err) {
      return err;
    }
  }

  function getEventsByClubId(id: string): ClubEvent[] {
    const foundClubEvents = list.value.filter(ev => ev.clubId === id);
    return foundClubEvents ?? [];
  }

  return { list, registerClubEventsList, getEventsByClubId };
});
