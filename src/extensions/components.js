import BaseButton from "../components/common/buttons/BaseButton.vue";
import DataBaseWrapper from "../components/common/DataBase/DataBaseWrapper.vue";

export default {
  install: (app) => {
    app.component("BaseButton", BaseButton);
    app.component("DataBaseWrapper", DataBaseWrapper);
  },
};
