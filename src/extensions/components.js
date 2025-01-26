import BaseButton from "../components/common/buttons/BaseButton.vue";
import DataBaseWrapper from "../components/common/DataBase/DataBaseWrapper.vue";
import BaseGrid from "../components/common/BaseGrid.vue";
import BaseCard from "../components/common/BaseCard.vue";

export default {
  install: (app) => {
    app.component("BaseButton", BaseButton);
    app.component("DataBaseWrapper", DataBaseWrapper);
    app.component("BaseGrid", BaseGrid);
    app.component("BaseCard", BaseCard);
  },
};
