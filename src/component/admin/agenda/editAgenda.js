// import React, { useState, useEffect } from "react";
// import AdminLayout from "../admin_Layout";
// import { Link } from "react-router-dom";

// const EditAgenda = (props) => {
//     const [open, setOpen] = useState(false);

//     var openSlide= () => {
//         setOpen((open) => !open);
//       };


      
//   // -------------------------Collecting All Agenda------------------------

//   const [agenda, setAgenda] = useState([]);

//   // -----------------------------Fetching Agenda From Server------------------
//   const getAgendaData = () => {
//     fetch("/api/v1/agenda/getAllAgenda", {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("jwt"),
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setAgenda(data.data);
//       });
//   };

//   useEffect(() => {
//     getAgendaData();
//   }, []);
//   console.log("ADMIN_AGENDA_INFO=====>", agenda);


// //   ---------------------------------DELETE AGENDA------------------------------------



// //   -----------------------------UPDATE AGENDA----------------------------------
// const updateAgenda=(id)=>{
//     console.log("UpdateID", id);
//     fetch(`/api/v1/agenda/updateAgenda/${id}`, {
//         method: "POST",
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("jwt"),
//         },
//       })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log("UPDATE RESULT===>", result);
//         getAgendaData();
//         const newData = agenda.filter((item) => {
//           return item._id == result._id;
//         });
//         setAgenda(newData);
//       });

// }
//   return (
//     <div>
//       <AdminLayout>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4"></div>
         
//           <div className="col-md-4" style={{marginBottom:"300px",marginTop:"100PX"}}>
            
//             <h1 className="text-center" style={{color:"yellow"}}> Edit AGENDA</h1>
//             <br></br>
//             <form>
//               <div className="form-group">
//                 <label htmlFor="exampleInputPassword1">Days</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   placeholder="Days"
//                   value={day}
//                   onChange={(e) => setDay(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="exampleInputPassword1">Time</label>
//                 <input
//                   type="time"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   placeholder="Time"
//                   value={time}
//                   onChange={(e) => setTime(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="exampleInputPassword1">Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   placeholder="Title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="exampleInputPassword1">Description</label>
//                 <textarea
//                   type="text"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   placeholder="Description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="btn btn-warning btn-block "
//                 onClick={() => updateAgenda()}
//               >
//                 Edit Aggenda
//               </button>
//             </form>
//           </div>
//           <div className="col-md-4"></div>
//         </div>
//       </div>
//        </AdminLayout>
//     </div>
//   );
// };
// export default EditAgenda;
