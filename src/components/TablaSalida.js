import { useContext, useEffect } from "react"
import DataTable from "react-data-table-component"
import context from "../context/Context"
import BtnDelete from "./BtnDelete"

export default function TableSalida() {

    const {lstSalida,getSalidas} = useContext(context)


    const col =[{
        name:"N° Factura",
        selector: i => i.id,
        sortable:true,
        style: {background:"red"}
    },{
        name:"Fecha",
        selector:i => i.fecha,
        sortable:true
    },{
        name: "Codigo Producto",
        selector:i =>i.codigoProducto,
        sortable:true,
        style: {background:"red"}
    },{
        name: "Descripcion",
        selector:i =>i.descripcion,
        sortable:true
    },{
        name:"Cantidad",
        selector:i=>i.cantidad,
        sortable:true,
        style: {background:"red"}
    },{
        name:" Delete ",
        selector:i=> <BtnDelete key={i.id} id={i.id} coleccion={"salida"}></BtnDelete>
    }]

    useEffect(() => {
      getSalidas()
      console.log("cargar salidas")
    }, [])
    

    return(
        <>
            <DataTable 
                columns={col} 
                data={lstSalida}
                pagination>
            </DataTable>
        </>

    )
}