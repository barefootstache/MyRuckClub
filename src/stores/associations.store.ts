import { Association, AssociationType, Club, PLACEHOLDER_ASSOCIATION, PLACEHOLDER_CLUB } from "@/business-logic";
import { TursoService } from "@/services";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAssociationsStore = defineStore('associations', () => {
  const list = ref([PLACEHOLDER_ASSOCIATION] as Association[]);

  async function registerAssociationsList(refresh = false) {
    try {
      if (list.value.length === 1 || refresh) {
        list.value = await TursoService.getAllAssociationsV2();
      }
    } catch (err) {
      return err;
    }
  }

  function getAssociationByType(type: AssociationType): Association {
    const foundAssociation = list.value.find(ass => ass.type === type);
    return foundAssociation ?? PLACEHOLDER_ASSOCIATION;
  }

  return { list, registerAssociationsList, getAssociationByType };
});
