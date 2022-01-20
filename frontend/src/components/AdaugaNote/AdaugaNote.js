import React, { useState, useEffect } from "react";
import "./AdaugaNote.css";
import Axios from "axios";
import { useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";

const userSelector = (state) => state.user.user;

const AdaugaNote = () => {
  const [data, setData] = useState([]);
  const [livrabile, setLivrabile] = useState([]);
  const[nota,setNota]=useState(0);
  const user = useSelector(userSelector, shallowEqual);

  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:8080/api/projects`)
      .then((result) => {
        for (let i = 0; i < result.data.length; i++) {
          let idProiect = result.data[i].id;
          let titluProiect = result.data[i].titlu;
          let livrabile = [];
          Axios.get(
            `http://localhost:8080/api/projects/${idProiect}/partialDeliverables`
          )
            .then((resultLivrabile) => {
              
              for (
                let j = 0;
                j < resultLivrabile.data.PartialDeliverable.length;
                j++
              ) {
                let idLivrabil = resultLivrabile.data.PartialDeliverable[j].id;
                let numeLivrabil =
                  resultLivrabile.data.PartialDeliverable[j].nume;
                let linkLivrabil =
                  resultLivrabile.data.PartialDeliverable[j].link;
                livrabile.push({
                  idLivrabil: idLivrabil,
                  numeLivrabil: numeLivrabil,
                  linkLivrabil: linkLivrabil,
                });
                setLivrabile((oldLivrabile) => [
                  ...oldLivrabile,
                  {
                    idLivrabil: idLivrabil,
                    numeLivrabil: numeLivrabil,
                    linkLivrabil: linkLivrabil,
                  },
                ]);
              }
            })
            .catch((error) => {
              console.log(error);
            });
          setData((oldData) => [
            ...oldData,
            {
              idProiect: idProiect,
              titluProiect: titluProiect,
              livrabile: livrabile,
            },
          ]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const adaugaNota = (idProiect,notaProiect) => {
    let idstud;
    Axios.get(
      `http://localhost:8080/api/projects/${idProiect}`
    ).then((result)=>{
      idstud=result.data.studentId;
      Axios.post(`http://localhost:8080/api/grades/`,{
        grade:notaProiect,
        projectId:idProiect,
        idStudent:idstud,
        
      });
    })
   
    const newData = data.filter((item) => item.idProiect !== idProiect);
    setData(newData);
  };

  const editeaza = (idProiect) => {
    navigate(`/editProject/${idProiect}`);
  };

  return (
    <div>
      <div className="containerAdaugaNote">
        {data.map((item) => {
          return (
            <div key={item.idProiect} className="divProiect">
              <h1 className="titluLivrabil">{item.titluProiect}</h1>
              <button
                className="projectButton"
                onClick={() => adaugaNota(item.idProiect,nota)}
              >
                Adauga Nota
              </button>
              <input id="inputNota"
                placeholder="Nota"
                onChange={(e)=>setNota(e.target.value)}
              >
                
              </input>
              {item.livrabile?.map((item2) => {
                return (
                  <p className="linkLivrabil" key={item2.idLivrabil}>
                    {item2.numeLivrabil}:{" "}
                    <a
                      href={item2.linkLivrabil}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item2.linkLivrabil}
                    </a>
                  </p>
                );
              })}
            </div>
          );
        })}
        <div className="addProjectButton">
          <button
            onClick={() => {
              navigate("/addProject");
            }}
          >
            Adauga proiect
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdaugaNote;