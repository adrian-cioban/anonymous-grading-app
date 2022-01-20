import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Students.css";
import { useNavigate } from "react-router";

const Students = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:8080/api/projects/")
      .then((resultProjects) => {
        Axios.get("http://localhost:8080/api/students/")
          .then((resultStudents) => {
            for (let i = 0; i < resultProjects.data.length; i++) {
              let idProiect = resultProjects.data[i].id;
              let titluProiect = resultProjects.data[i].titlu;
              for (let j = 0; j < resultStudents.data.length; j++) {
                let idStudent = resultStudents.data[j].id;
                if (idStudent === idProiect) {
                  let numeStudent = resultStudents.data[j].nume;
                  let prenumeStudent = resultStudents.data[j].prenume;
                  Axios.get(
                    `http://localhost:8080/api/projects/${idProiect}/finalGrade`
                  )
                    .then((resultGrade) => {
                      setData((oldData) => [
                        ...oldData,
                        {
                          idProiect: idProiect,
                          titluProiect: titluProiect,
                          idStudent: idStudent,
                          numeStudent: numeStudent,
                          prenumeStudent: prenumeStudent,
                          notaFinala: resultGrade.data.notaFinala,
                        },
                      ]);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const afisareListaNote = (idProiect) => {
    navigate(`/allGrades/${idProiect}`);
    // console.log(idProiect);
  };

  return (
    <div>
      <div className="containerStudents">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Titlu proiect</th>
              <th scope="col">Nume</th>
              <th scope="col">Prenume</th>
              <th scope="col">Nota Generala</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr
                  key={item.idProiect}
                  onClick={() => afisareListaNote(item.idProiect)}
                >
                  <td>{item.titluProiect}</td>
                  <td>{item.numeStudent}</td>
                  <td>{item.prenumeStudent}</td>
                  <td>{item.notaFinala}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
