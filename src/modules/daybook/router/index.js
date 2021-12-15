
export default {


    name: 'daybook',
    component: () => import(/*wbpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        
        {
            path: '',
            name: 'no-entry',
            component: () => import(/*wbpackChunkName: "no entry" */ '@/modules/daybook/views/NoEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/*wbpackChunkName: "entry" */ '@/modules/daybook/views/EntryView.vue')

        }
    ]

}