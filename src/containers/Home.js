import ModalAdd from "../components/ModalAdd";
import Table from "../components/Table";
import TableEntradas from "../components/TablaEntradas";
import ModalAddExistencia from "../components/ModalAddExistencia";
import TableSalida from "../components/TablaSalida";
import ModalAddSalida from "../components/ModalAddSalida";
export default function Home() {


    return(
        <>
        <div className="bg-secondary text-center">
            <h1 text="text text-center"> Productos </h1>
            <Table></Table>
        </div>
        <div className="text text-center">
            <h4> Agregar Producto </h4>
            <ModalAdd></ModalAdd>
        </div>
        <div>
        </div>
        <div className="bg-success text-center" > 
            <h1> ENTRADAS </h1>
            <TableEntradas></TableEntradas>
        </div>
        <div className="text-center">
            <h4> Agregar Entradas </h4>
            <ModalAddExistencia></ModalAddExistencia>
        </div>
        <div>
        </div>
        <div className="bg-danger text-center">
            <h1 text="text text-center"> SALIDAS </h1>
            <TableSalida></TableSalida>
        </div>
        <div className="text text-center"> 
            <h4> Agregar Salidas </h4>
            <ModalAddSalida></ModalAddSalida> 
        </div>
        <div>
        </div>           
        </>
    )
}