<template>
  <div class="sidebar-wrapper">
    <component
      v-for="element in navigation"
      :key="element.id"
      :to="element.link"
      :is="element.parentComponent"
    >
      <component :is="element.childcomponent" :size="30" :color="'white'" />
    </component>
  </div>
</template>

<script>
import UiButton from "@/components/ui/UiButton";

export default {
  components: {
    UiButton,
  },
  data() {
    return {
      navigation: [
        {
          id: 1,
          name: "buttonMenu",
          parentComponent: "UiButton",
          childcomponent: "SvgMenu",
          selected: "noSelectable",
          action: "",
        },
        {
          id: 2,
          name: "buttonSearch",
          parentComponent: "UiButton",
          childcomponent: "SvgSearch",
          selected: false,
        },
        {
          id: 3,
          name: "buttonDashboard",
          parentComponent: "router-link",
          childcomponent: "SvgDashboard",
          link: "/dashboard",
          selected: false,
        },
        {
          id: 4,
          name: "buttonUser",
          parentComponent: "router-link",
          childcomponent: "SvgUser",
          link: "/user",
          selected: false,
        },
        {
          id: 5,
          name: "buttonMessages",
          parentComponent: "router-link",
          childcomponent: "SvgMessages",
          link: "/messages",
          selected: false,
        },
        {
          id: 6,
          name: "buttonAnalytics",
          parentComponent: "router-link",
          childcomponent: "SvgAnalytics",
          link: "/analytics",
          selected: false,
        },
        {
          id: 7,
          name: "buttonFileManager",
          parentComponent: "router-link",
          childcomponent: "SvgFileManager",
          link: "/fileManager",
          selected: false,
        },
        {
          id: 8,
          name: "buttonOrder",
          parentComponent: "router-link",
          childcomponent: "SvgOrder",
          link: "/order",
          selected: false,
        },
        {
          id: 9,
          name: "buttonSaved",
          parentComponent: "router-link",
          childcomponent: "SvgSaved",
          link: "/favorites",
          selected: false,
        },
        {
          id: 10,
          name: "buttonSetting",
          parentComponent: "router-link",
          childcomponent: "SvgSetting",
          link: "/setting",
          selected: false,
        },
        {
          id: 11,
          name: "buttonExit",
          parentComponent: "button",
          childcomponent: "SvgExit",
          link: "/exit",
          selected: false,
        },
      ],
    };
  },
};
</script>

<style>
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}
</style>
