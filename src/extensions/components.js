import BaseButton from "@/components/common/BaseButton.vue";
import DataBaseWrapper from "@/components/common/DataBaseWrapper.vue";
import BaseGrid from "@/components/common/BaseGrid.vue";
import BaseCard from "@/components/common/Card/BaseCard.vue";
import CardItem from "@/components/common/Card/CardItem.vue";

export default {
  install: (app) => {
    app.component("BaseButton", BaseButton);
    app.component("DataBaseWrapper", DataBaseWrapper);
    app.component("BaseGrid", BaseGrid);
    app.component("BaseCard", BaseCard);
    app.component("CardItem", CardItem);
  },
};
