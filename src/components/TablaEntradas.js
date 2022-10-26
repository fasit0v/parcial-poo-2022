import { useContext, useEffect } from "react"
import DataTable from "react-data-table-component"
import context from "../context/Context"
import BtnDelete from "./BtnDelete"

export default function TableEntradas() {

    const {lstEntradas,getEntradas} = useContext(context)


    const col =[{
        name:"N° Factura",
        selector: i => i.id,
        sortable:true,
        style: {background:"yellow"}
    },{
        name:"Fecha",
        selector:i => i.fecha,
        sortable:true
    },{
        name: "Codigo Producto",
        selector:i =>i.codigoProducto,
        sortable:true,
        style: {background:"yellow"}
    },{
        name: "Descripcion",
        selector:i =>i.descripcion,
        sortable:true
    },{
        name:"Cantidad",
        selector:i=>i.cantidad,
        sortable:true,
        style: {background:"yellow"}
    },{
        name:" Delete ",
        selector:i=> <BtnDelete key={i.id} id={i.id} coleccion={"entradas"}></BtnDelete>
    }]

    useEffect(() => {
      getEntradas()
      console.log("cargar entradas")
    }, [])
    

    return(
        <>
            <DataTable 
                columns={col} 
                data={lstEntradas}
                pagination>
            </DataTable>
        </>

    )
}