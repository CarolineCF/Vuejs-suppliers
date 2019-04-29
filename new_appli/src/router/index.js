
import SuppliersList from '../components/SuppliersList.vue'
import SuppliersMap from '../components/SuppliersMap.vue'
import Supplier from '../components/Supplier.vue'


export default [
    { path: '/supplist', component: SuppliersList},
    {path: '/suppmap', component: SuppliersMap},
    {path: '/supp', component: Supplier}
]
