import { Club, PLACEHOLDER_CLUB } from "@/business-logic";
import { TursoService } from "@/services";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useClubsStore = defineStore('clubs', () => {
  const list = ref([PLACEHOLDER_CLUB] as Club[]);

  async function registerClubsList(refresh = false) {
    try {
      if (list.value.length === 1 || refresh) {
        list.value = await TursoService.getAllClubsV2();
      }
    } catch (err) {
      return err;
    }
  }

  function getClubById(id: string): Club {
    const foundClub = list.value.find(club => club.id === id);
    return foundClub ?? PLACEHOLDER_CLUB;
  }

  return { list, registerClubsList, getClubById };
});