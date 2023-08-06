import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';


function App() {

  const [showForm, updateShow] = useState(false);
  const [collaborators, updateCollaborators] = useState([{
    id: uuid(),
    team: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "Programación",
    foto: "https://github.com/maitenblanc.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    team: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]);

  const [teams, updateTeams] = useState([{
    id: uuid(),
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9",
  },
  {
    id: uuid(),
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
  },
  {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
  },
  {
    id: uuid(),
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
  },
  {
    id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
  },
  {
    id: uuid(),
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9",
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF",
  },
  ]);

  const changeShow = () => {
    updateShow(!showForm);
  };

  // Registrar colaborador
  const registerCollaborator = (collaborator) => {
    console.log("Nuevo colaborador", collaborator);
    updateCollaborators([...collaborators, collaborator]);
  };

  // Eliminar colaborador
  const deleteCollaborator = (id) => {
    console.log("Eliminar Colaborador", id);

    const newCollaborators = collaborators.filter((collaborator) => collaborator.id !== id)

    updateCollaborators(newCollaborators)
  };

  // Actualizar color de equipo
  const updateColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.colorPrimario = color;
      };
      return team;
    });

    updateTeams(updatedTeams);
  };

  // Crear equipo
  const createTeam = (newTeam) => {
    console.log(newTeam);
    updateTeams([...teams, { ...newTeam, id: uuid() }])
  };

  // Dar like

  const like = (id) => {
    console.log("like", id)
    const updatedCollaborators = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav;
      };
      return collaborator;
    });
    updateCollaborators(updatedCollaborators);
  };

  return (
    <div>
      <Header />

      {showForm && <Form teams={teams.map((team) => team.titulo)}
        registerCollaborator={registerCollaborator}
        createTeam={createTeam}
      />}

      <MyOrg changeShow={changeShow} />

      {teams.map((team) => <Team
        data={team}
        key={team.titulo}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.titulo)}
        deleteCollaborator={deleteCollaborator}
        updateColor={updateColor}
        like={like}
      />
      )}

      <Footer />

    </div>
  );
};

export default App;
