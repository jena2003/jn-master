import HomeScreen from './components/HomeScreen.vue'
import Contacts from './components/Contacts.vue'
import Archive from './components/Archive.vue'
import ForAutors from './components/ForAutors.vue'
import aboutMagazine from './components/AboutMagazine.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import MyProfileScreen from './components/MyProfileScreen.vue'
import EditProfileScreen from './components/EditProfileScreen'

const routes = [
    { path: '/contacts', component: Contacts, props: true },
    { path: '/archive', component: Archive, props: true },
    { path: '/forautors', component: ForAutors, props: true },
    { path: '/aboutmagazine', component: aboutMagazine, name:'aboutMagazine', props: true },
    { path: '/', component: HomeScreen, props: true },
    { path: '/LogIn', component: LogIn, props: true },
    { path: '/SignUp', component: SignUp, props: true },
    { path: '/MyProfileScreen', component: MyProfileScreen, props: true },
    { path: '/EditProfileScreen', component: EditProfileScreen, props: true }
  ]

 export default routes;