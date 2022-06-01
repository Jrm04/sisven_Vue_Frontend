import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBank, faBuilding, faPencil, faPhone, faPlus, faTag, faTrash, faUser, faHouseChimney, faCalendar, faAt, faCheck, faAlignJustify, faBookmark, faCreditCard, faDollarSign, faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

library.add(faPhone)
library.add(faUser)
library.add(faTrash)
library.add(faPencil)
library.add(faTag)
library.add(faBuilding)
library.add(faBank)
library.add(faPlus)
library.add(faHouseChimney)
library.add(faCalendar)
library.add(faAt)
library.add(faCheck)
library.add(faAlignJustify)
library.add(faBookmark)
library.add(faCreditCard)
library.add(faDollarSign)
library.add(faBox)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(VueAxios, axios).mount('#app')
