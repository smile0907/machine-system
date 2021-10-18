import Nprogress from 'nprogress';

export default ({ commit, getState }) => ({
    initState: {
        list: [{
            id: 'dashboard',
            isparent: false,
            icon: 'chat',
            path: '/',
            name: 'Dashboard',
        }, {
            id: 'equipos',
            isparent: true,
            icon: 'dashboard',
            name: 'Equipos',
            children: [{
                id: 'agregar',
                path: '/equipos/agregar',
                name: 'Agregar',
            },{
                id: 'equipos_historial',
                path: '/equipos/historial',
                name: 'Historial',
            }],
        }, {
            id: 'area_de_equipo',
            isparent: true,
            icon: 'movie',
            name: 'Área de Equipo',
            children: [{
                id: 'area_de_equipo_agregar',
                path: '/area_de_equipo/agregar',
                name: 'Agregar',
            },{
                id: 'area_de_equipo_historial',
                path: '/area_de_equipo/historial',
                name: 'Historial',
            }],
        }, {
            id: 'profesionales',
            isparent: true,
            icon: 'people',
            name: 'Profesionales',
            children: [{
                id: 'profesionales_agregar',
                path: '/profesionales/agregar',
                name: 'Agregar',
            },{
                id: 'profesionales_historial',
                path: '/profesionales/historial',
                name: 'Historial',
            }],
        }, {
            id: 'disponibilidad',
            isparent: true,
            icon: 'assessment',
            name: 'Disponibilidad',
            children: [{
                id: 'disponibilidad_agregar',
                path: '/disponibilidad/agregar',
                name: 'Agregar',
            },{
                id: 'disponibilidad_historial',
                path: '/disponibilidad/historial',
                name: 'Historial',
            }],
        }, {
            id: 'monitoreo_inspecciones',
            isparent: true,
            icon: 'public',
            name: 'Monitoreo/Inspecciones',
            children: [{
                id: 'monitoreo_inspecciones_registrar_datos',
                path: '/monitoreo_inspecciones/registrar_datos',
                name: 'Registrar Datos',
            },{
                id: 'monitoreo_inspecciones_modificar_eliminar',
                path: '/monitoreo_inspecciones/modificar_eliminar',
                name: 'Modificar/Eliminar',
            },{
                id: 'monitoreo_inspecciones_ver_historial',
                path: '/monitoreo_inspecciones/ver_historial',
                name: 'Ver historial',
            }],
        }, {
            id: 'Reportes_PDF',
            isparent: false,
            icon: 'language',
            path: '/reportes_pdf',
            name: 'Reportes PDF',
        }],
        active: {},
        mark: [...new Array(100)].fill(false),
    },

    onMenuItemClick(item, parent) {
        Nprogress.set(0.4);
        setTimeout(Nprogress.done, 300);
        item.parent = parent;
        commit({ active: item });
    },

    initActive() {
        const state = getState();
        const p = window.location.hash.slice(1);
        const res = isActive(state.list, p);
        if (res) state.active = res;
        else state.active = {};
        commit({ ...state });
    },

    onMenuTogger(index) {
        const state = getState();
        state.mark[index] = !state.mark[index];
        commit({ ...state });
    },
});

function isActive(list, P) {
    let item;
    item = list.find(i => i.path === P);
    if (item) {
        item.parent = item;
        return item;
    }    
    for (let i = 0; i < list.length; i++) {
        if (!Array.isArray(list[i].children)) continue;
        item = list[i].children.find(i => i.path === P);
        if (item) {
            item.parent = list[i];
            return item;
        }
    }
    return false;
}