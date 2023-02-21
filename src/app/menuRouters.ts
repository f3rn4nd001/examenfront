import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

//import components

import { UsuarioConsultaComponent } from "./Component/Catalogo/usuario/usuario-consulta/usuario-consulta.component";
import { ConsultaComponent } from "./Component/Catalogo/MenuSubMenuPermisos/Consulta/consulta.component";

//defin rutas


const menurouting:ModuleWithProviders<any>=RouterModule.forRoot(
    [
        {path:'Catalogo/usuarios/Consulta',component:UsuarioConsultaComponent},
        {path:'Catalogo/MenuSubmenu/Consulta',component:ConsultaComponent},
    ]
);
export var objRutasMenuRutas=[
    menurouting
];