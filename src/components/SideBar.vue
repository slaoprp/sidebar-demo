<template>
  <div class="sidebar-wrapper">
    <component
      v-for="element in navigation"
      :key="element.id"
      :to="element.link"
      :is="element.parentComponent"
      :class="dynamicClass(element.selected)"
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
  methods: {
    dynamicClass(element) {
      if (element === "noSelectable") {
        return "container-icon";
      } else {
        return "container-icon-selectable";
      }
    },
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
          parentComponent: "UiButton",
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

.icon-color:hover path * {
  fill: black;
}

.icon-color path * {
  fill: white;
}

.container-icon-selectable {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: rgba(17, 17, 29, 1);
  gap: 10px;
}

.container-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: rgba(17, 17, 29, 1);
  gap: 10px;
}

.container-icon-selectable:hover {
  background-color: white;
}

.container-icon-selectable:hover svg path {
  fill: black !important;
}
</style>
