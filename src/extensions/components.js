import DataBaseWrapper from "@/components/common/DataBase/DataBaseWrapper.vue";
import BaseButton from "@/components/common/BaseButton.vue";
import CardComponent from "@/components/common/CardComponent.vue";
import SocialIcons from "@/components/common/SocialIcons.vue";

export default {
  install: (app) => {
    app.component("DataBaseWrapper", DataBaseWrapper);
    app.component("BaseButton", BaseButton);
    app.component("CardComponent", CardComponent);
    app.component("SocialIcons", SocialIcons);
  },
};
