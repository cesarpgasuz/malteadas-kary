// const [csvData, setCsvData] = useState([]);
//   const [pedidos, setPedidos] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vS3AKcTb_mWpoRvjYajkZwRjetufUPUWn9T3wbvsOkoYVDTc2KcpLRXgEJ6VsCK41pLw_JjaKPVMfJf/pub?gid=0&single=true&output=csv');
//         const textData = await response.text();
//         const lines = textData.split('\n');
//         const data = lines.map(line => line.split(','));

//         const conv = parseCsv(data);


//         // console.log(conv)
//         setCsvData(conv);
//       } catch (error) {
//         console.error('Error fetching CSV data:', error);
//       }
//     }

//     fetchData();
//   }, []);


//   // console.log(pedido)

//   function parseCsv(data) {
//       let productos = [];

//       data.forEach(element => {

//           const nuevoProducto = {
//             id: element[0],
//             nombre: element[1],
//             categoria: element[2]
//           };

//           productos = [...productos, nuevoProducto]

//       });
   
//       return productos
//   }


//   const handleAgregar = (dato) => {
    
//     setPedidos([...pedidos, dato])
    
//   }


//   const enviarPedido = () => {
    

//     const miPedido = pedidos.map(item => `- *_${item.nombre}_*`).join('\n');
//     const mensaje = encodeURIComponent(`¡Hola! quiero estos productos:\n${miPedido}`)
//     const whatsappUrl = `https://wa.me/+524191389032?text=${mensaje}`

//     window.open(whatsappUrl)
//   }





//   <div className='bg-slate-500'>
//         {csvData.map(dato => (
//           <div key={dato.id}>
//           <p>ID: {dato.id}<strong className='nombre'>{dato.nombre}</strong> <span className='categoria'>{dato.categoria}</span></p>
//           <button
//             onClick={() => handleAgregar(dato)}
//           >Agregar al carrito</button>
//           </div>
          

//         ))}
//       </div>

//           <button
//             onClick={enviarPedido}
//           > enviar pedido por whatsapp</button>
