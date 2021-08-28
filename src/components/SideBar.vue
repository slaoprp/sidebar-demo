<template>
  <Wrapper>
    <template v-slot:wrapper-header>
      <span v-if="sidebarIsActive" style="width: 100%">
        <img src="@/assets/LogoSithCode.png" alt="logo" class="logo-img" />
      </span>
      <UiButton
        class="container-icon"
        :selected="'noSelectable'"
        :action="'toggleSidebar'"
      >
        <SvgMenu :size="30" :color="'white'" />
      </UiButton>
    </template>
    <template v-slot:wrapper-content>
      <UiInput :icon="'SvgSearch'"></UiInput>
      <Component
        v-for="element in navigation"
        :key="element.id"
        :to="element.link"
        :is="element.parentComponent"
        :class="dynamicClass(element.name)"
        :action="element.action"
      >
        <component :is="element.childcomponent" :size="30" :color="'white'" />
        <transition>
          <span v-if="sidebarIsActive" class="title-nav">
            {{ element.name }}
          </span>
        </transition>
      </Component>
    </template>
    <template v-slot:wrapper-footer>
      <UiButton
        class="container-icon"
        :selected="'noSelectable'"
        :action="'toggleSidebar'"
      >
        <SvgExit :size="30" :color="'white'" />
      </UiButton>
    </template>
  </Wrapper>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import UiButton from "@/components/ui/UiButton";
import UiRouterLink from "@/components/ui/UiRouterLink";
import UiInput from "@/components/ui/UiInput";

export default {
  components: {
    Wrapper,
    UiButton,
    UiRouterLink,
    UiInput,
  },
  methods: {
    dynamicClass(element) {
      if (this.currentRouteName === element) {
        return "container-icon-selected";
      } else if (element === "noSelectable") {
        return "container-icon";
      } else {
        return "container-icon-selectable";
      }
    },
  },
  computed: {
    sidebarIsActive() {
      return this.$store.getters["sidebarIsActive"];
    },
    currentRouteName() {
      return this.$route.name;
    },
  },
  data() {
    return {
      navigation: [
        {
          id: 3,
          name: "Dashboard",
          parentComponent: "UiRouterLink",
          childcomponent: "SvgDashboard",
          link: "/dashboard",
          selected: true,
        },
        {
          id: 4,
          name: "User",
          parentComponent: "UiRouterLink",
          childcomponent: "SvgUser",
          link: "/user",
          selected: false,
        },
        {
          id: 5,
          name: "Messages",
          parentComponent: "UiRouterLink",
          childcomponent: "SvgMessages",
          link: "/messages",
          selected: false,
        },
        {
          id: 6,
          name: "Analytics",
          parentComponent: "UiRouterLink",
          childcomponent: "SvgAnalytics",
          link: "/analytics",
          selected: false,
        },
        {
          id: 7,
          name: "FileManager",
          parentComponent: "UiRouterLink",
          childcomponent: "SvgFileManager",
          link: "/filemanager",
          selected: false,
        },
        {
          id: 8,
          name: "Order",
          parentComponent: "UiRouterLink",
          childcomponent: "SvgOrder",
          link: "/order",
          selected: false,
        },
        {
          id: 9,
          name: "Favorites",
          parentComponent: "UiRouterLink",
          childcomponent: "SvgSaved",
          link: "/favorites",
          selected: false,
        },
        {
          id: 10,
          name: "Setting",
          parentComponent: "UiRouterLink",
          childcomponent: "SvgSetting",
          link: "/setting",
          selected: false,
        },
      ],
    };
  },
};
</script>

<style>
.icon-color:hover path * {
  fill: black;
}

.icon-color path * {
  fill: white;
}

a {
  text-decoration: none;
  color: white;
}

.container-icon-selectable {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 40px;
  max-height: 40px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(32, 33, 36, 1);
  margin-bottom: 10px;
  padding: 0px 5px 0px 5px;
}

.container-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 40px;
  max-height: 40px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(32, 33, 36, 1);
  padding: 0px 5px 0px 5px;
}

.container-icon-selected {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 40px;
  max-height: 40px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(60, 60, 60, 1);
  margin-bottom: 10px;
  padding: 0px 5px 0px 5px;
}

.container-icon-selectable:hover {
  background-color: white;
  color: black;
}

.container-icon-selectable:hover svg path {
  fill: black !important;
}

.logo-img {
  display: flex;
  align-items: center;
  width: auto;
  height: 40px;
  color: white;
  margin-right: 55px;
}

.title-nav {
  margin-left: 10px;
}
</style>
