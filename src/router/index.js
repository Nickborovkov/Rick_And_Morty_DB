import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../components/homePage/HomePage";
import ErrorPage from "../components/common/errorPage/ErrorPage";

Vue.use(VueRouter)

const routes = [
  {
    path: `/`,
    name: `home`,
    component: HomePage,
  },
  {
    path: `/characters`,
    name: `characters`,
    component: () => import(/*webpackChunkName: "Characters"*/`../components/characters/Characters`),
  },
  {
    path: `/characters/character/:id`,
    props: true,
    name: `specificCharacter`,
    component: () => import(/*webpackChunkName: "SpecificCharacter"*/`../components/characters/specificCharacter/SpecificCharacter`),
  },
  {
    path: `/locations`,
    name: `locations`,
    component: () => import(/*webpackChunkName: "Locations"*/`../components/locations/Locations`),
  },
  {
    path: `/locations/location/:id`,
    props: true,
    name: `specificLocation`,
    component: () => import(/*webpackChunkName: "SpecificLocation"*/`../components/locations/specificLocation/SpecificLocation`),
  },
  {
    path: `/episodes`,
    name: `episodes`,
    component: () => import(/*webpackChunkName: "Episodes"*/`../components/episodes/Episodes`),
  },
  {
    path: `/episodes/episode/:id`,
    props: true,
    name: `specificEpisode`,
    component: () => import(/*webpackChunkName: "SpecificEpisode"*/`../components/episodes/specificEpisode/SpecificEpisode`),
  },
  {
    path: `*`,
    name: `errorPage`,
    component: ErrorPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
